import styled from 'styled-components';

export const Login = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
    
`;

export const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: var(--corBranca);
    padding: var(--padding);
    border-radius: var(--borderRadius);

    h1{
        font-size: 2rem;
        color: var(--corPrincipal);
    }

    a{
        color: var(--corPrincipal);
        font-size: 1.2rem;
        margin-bottom: 10px;
    }

    @media(max-width: 600px){
        min-height: 30vh;
        padding: 0;

    }


`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 50vh;
    padding: calc(var(--padding) + 10px);
    gap: calc(var(--gaps) + 10px);

    & > button{
        color: var(--corBranca);
        background-color: var(--corPrincipal);
        padding: var(--padding);
        border: none;
        border-radius: var(--borderRadius);
        font-weight: bold;
        font-size: 1.5rem;
        min-width: 20vw;
    }

    @media(max-width: 600px){
        gap: 10px;

        & > button{
            min-width: 60vw;
        }
        
    }
`;

export const InputGroup = styled.div`
    display: flex;
    flex-direction: row;

    
    input{
        border: none;
        min-width: 20vw;
        background-color: var(--corSecundaria);
        padding: var(--padding);
        font-size: 1rem;

        &::placeholder{
            color: var(--corPrincipal);
        }
    }
    
    label{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--corPrincipal);
        padding: var(--padding);
        border-top-left-radius: var(--borderRadius);
        border-bottom-left-radius: var(--borderRadius);
    }

    button{
        background-color: var(--corPrincipal);
        padding: var(--padding);
        border-top-right-radius: var(--borderRadius);
        border-bottom-right-radius: var(--borderRadius);
    }
    @media(max-width: 600px){
        input{
            font-size: 1.4em;
            max-width: 40vw;
        }
    }

`;
