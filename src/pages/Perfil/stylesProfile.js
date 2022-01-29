import styled from 'styled-components';

export const Profile = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: var(--corBranca);
    width: 30vw;
    margin: 20px auto;
    padding: var(--padding);
    min-height: 80vh;
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow);
`;

export const FormUser = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: calc(var(--gaps) + 10px);

    img{
        display: flex;
        border-radius: 50%;
        object-fit: cover;
    }

    input{
        border: none;
        min-width: 20vw;
        background-color: var(--corSecundaria);
        padding: var(--padding);
        font-size: 1rem;
        border-radius: var(--borderRadius);

        &::placeholder{
            color: var(--corPrincipal);
        }
    }

    button{
        width: 20vw;
    }

`;

export const Avatar = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;

    input{
        display: none;
    }

    span{
        z-index: 99;
        position: absolute;
        opacity: 0.7;
        transition: all .5s ease;

        &:hover{
            opacity: 1;
            transform: scale(1.4);
        }
    }
`;

export const InputDesativado = styled.input`
    cursor: not-allowed;
`;