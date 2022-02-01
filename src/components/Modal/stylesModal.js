import styled from 'styled-components';

export const CreateContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.438);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
`;

export const ModalComponet = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--corBranca);
    border-radius: var(--borderRadius);
    padding: var(--padding);
    box-shadow: var(--shadow);
    min-height: 60vh;
    min-width: 25vw;

    @media(max-width: 600px){
        min-width: 80vw;
        border-radius: 0;
    }

`;

export const ItensTop = styled.div`
    display: flex;
    justify-content: space-between;
    color: var(--corPrincipal);
    margin-bottom: var(--margin);
`;

export const ListaAdd = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 50vh;
    gap: calc(var(--gaps) + 10px);

    & > input{
        border-top-right-radius: var(--borderRadius);
        border-bottom-right-radius: var(--borderRadius);
    }

    input{
        border: none;
        min-width: 20vw;
        min-height: 7.5vh;
        background-color: var(--corSecundaria);
        padding: var(--padding);
        font-size: 1rem;
        border-top-left-radius: var(--borderRadius);
        border-bottom-left-radius: var(--borderRadius);
    }

    @media(max-width: 600px){
        
        input{
            font-size: 2em;
        }
    }
`;

export const AddList = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    button{
        background-color: var(--corPrincipal);
        padding: calc(var(--padding) - 4.5px);
        border-top-right-radius: var(--borderRadius);
        border-bottom-right-radius: var(--borderRadius);
    }

    @media(max-width: 600px){
        
        input{
            flex: 1;
        }

        button{
            padding: 1.3em;
        }
    }
`

export const ListaValores = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    span{
        width: 80%;
        max-width: 80%;
    }
`;