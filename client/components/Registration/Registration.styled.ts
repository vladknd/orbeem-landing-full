import styled from "styled-components"

export const RegistrationBackground = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100vh;
    background: rgba(56, 56, 56, 0.5);
    backdrop-filter: blur(20px);

    position: fixed;
    z-index: 6;
`

export const RegistrationModal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    width: 40%;
    height: 80%;
    background: rgba(14, 14, 14, 0.5);
    /* box-shadow: inset -5px -4px 4px rgba(0, 0, 0, 0.25), inset 4px 4px 4px rgba(255, 255, 255, 0.25); */
    backdrop-filter: blur(10px);
    border-radius: 30px;

    position: fixed;
    z-index: 7;
`

export const ModalHeader = styled.h2`
    font-size: 30px;
    font-weight: 100;
    color: white;
`

export const InputContainer = styled.div`
    position: relative;
    margin: 15px 0px;
    display: flex;
    flex-direction: row;

    width: 80%;
    height: 30px;
`

export const Input = styled.input`
    width: 100%;
    height: 100%;
    padding: 20px 10px;

    background: transparent;
    border-radius: 8px;  
    border: 1px solid gray;
    outline: none;
    color: white;
    font-size: 20px;

    &:focus {
        border: 1px solid #6d52d1;
    }

    &:focus ~ label {
        left: 80%;
    }
`

export const ModalLabel = styled.label`
    position: absolute;
    top: 12px;
    left: 15px;
    padding: 0 5px;
    color: white;
    font-size: 15px;

    transition: left 0.5s;
`

export const RegistrationForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    width: 100%;
`