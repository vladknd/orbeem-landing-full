import Web3 from 'web3';
import { useLazyQuery, useMutation, useQuery } from '@apollo/client'

import Market from '../ABI/Market'
import Receiver from '../ABI/Receiver';
import DAI from '../ABI/DAI';

import { QUERY_USER } from '../graphql/queries/user.queries'
import { VERIFY_USER } from '../graphql/mutations/user.mutations'
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { setCookies } from 'cookies-next';
import Router from 'next/router';

declare let window: any;

export const buyToken = async (amountUSDT: number) => {
    if(typeof window.ethereum !== "undefined"){
        const numberOfTokens = ethers.utils.parseUnits(amountUSDT.toString(), 18);
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        
        const market = new ethers.Contract("0x18263494346178c673D9aFa918BF9569A2943fdf", Market, signer)
        const dai = new ethers.Contract("0xcB1e72786A6eb3b44C2a2429e317c8a2462CFeb1", DAI, signer)
        
        await dai.approve("0x18263494346178c673D9aFa918BF9569A2943fdf", numberOfTokens)

        const options = {
            gasLimit: 100000,
            gasPrice: ethers.utils.parseUnits('100.0', 'gwei')
        };    
        
        const tx = await market.buyWithDAI(numberOfTokens, options)
        const usdtBalance = await tx.wait()

        console.log("TX", tx)
        console.log("USDT BAL",usdtBalance);
    }
}

export const checkBalanceDAI = async () => {
    if(typeof window.ethereum !== "undefined"){
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const market = new ethers.Contract("0x18263494346178c673D9aFa918BF9569A2943fdf", Market, signer)
        const tx = await market.balanceDAI()
        const balance = ethers.utils.formatEther(tx.toString());
        console.log("BALANCE", balance)
        return balance
    }
}

export const withdrawDAI = async () => {
    if(typeof window.ethereum !== "undefined"){
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const market = new ethers.Contract("0x18263494346178c673D9aFa918BF9569A2943fdf", Market, signer)
        const tx = await market.withdrawDAI()
        await tx.wait()
    }
}

export const checkBalanceORBM = async () => {
    if(typeof window.ethereum !== "undefined"){
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const market = new ethers.Contract("0x18263494346178c673D9aFa918BF9569A2943fdf", Market, signer)
        const tx = await market.balanceORBM()
        const balance = ethers.utils.formatEther(tx.toString());
        console.log("BALANCE", balance)
        return balance
    }
}

export const withdrawORBM = async () => {
    if(typeof window.ethereum !== "undefined"){
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const market = new ethers.Contract("0x18263494346178c673D9aFa918BF9569A2943fdf", Market, signer)
        const tx = await market.withdrawORBM()
        await tx.wait()
    }
}

export const getAccount = async () => {
    let web3
    if(window.ethereum){
        // window.ethereum.request({ method: 'eth_requestAccounts' });
        web3 =  await window.ethereum 
    } else if(window.web3){
        web3 = await window.web3.currentProvider
    } else{
        console.log("NO METAMASK")
    }
    const provider = new ethers.providers.Web3Provider(web3)
    await provider.send("eth_requestAccounts", []);
    const accounts = await provider.listAccounts()
    console.log("ADDR", accounts);
    
    return accounts[0]
}

export const signMessage = async (nonce: string, publicAddress: string) => {
    let web3
    if(window.ethereum){
        web3 =  await window.ethereum 
    } else if(window.web3){
        web3 = await window.web3.currentProvider
    } else{
        console.log("NO METAMASK")
    }
    const provider = new ethers.providers.Web3Provider(web3)
    const signer = provider.getSigner()
    const signature = await signer.signMessage(`I am signing my one-time nonce: ${nonce}`)

    return { 
        publicAddress,
        signature
    }
}

// export const useConnect = async () => {
    
//         const [checkUser] = useLazyQuery(QUERY_USER_BY_PUBLIC_ADDRESS)
//         const [verifyUser] = useMutation(VERIFY_USER)
//         return [connectUser]
// }

export const connectUser = async (checkUser:any, verifyUser: any) => {
    const addr = await getAccount()
    console.log("DONE", addr);
                    
    const {data} = await checkUser({variables: {publicAddress: addr}})
    if(!data.findUserByAddress){
        console.log("USER NOT FOUND")
    } else {
        const { nonce, publicAddress } = data.findUserByAddress
        const sigMsg = await signMessage(nonce, publicAddress)
        console.log("SIG",sigMsg)
        const token = await verifyUser({variables: sigMsg})
        console.log(token);
        setCookies("jwt", token.data.verifyUser.token)
        Router.push('profile')
    }
}

export const checkAdmin = async () => {
    const addr = await getAccount()
    console.log("DONE", addr);
    if(addr === "0x83799E98349124b3b30D9D9635bD66A381f22f24") return true
    return false
}