import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

`;

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    padding: var(--padding);
    min-height: 70vh;
    width: 100%;
`;

export const Title = styled.div`
    font-size: 1.2rem;
    color: var(--corBranca);
`;

export const Section = styled.section`
    display: flex;
    gap: var(--gaps);
    flex-wrap: wrap;
    width: 100%;
    padding: var(--padding);
    margin: calc(var(--margin) + 10px) 10px 0 0;
`;

export const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--corSecundaria);
    padding: var(--padding);
    border-radius: var(--borderRadius);
    min-width: 40vh;
`;

export const TopContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: calc(var(--margin));

    svg{
        color: var(--corPrincipal);
    }

`;

export const ContainerItens = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: calc(var(--gaps) - 5px);
    width: 100%;
    
    li{
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: var(--corBranca);
        box-shadow: var(--shadow);
        border-radius: calc(var(--borderRadius) - 5px);
        padding: calc(var(--padding) - 5px);
        text-align: center;
        width: 100%;
    }
`;

export const Footer = styled.footer`
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: 15vh;
    justify-content: flex-end;
    padding: var(--padding);
`;

export const ButtonAdd = styled.button`
    background-color: var(--corTerciaria);
    color: var(--corBranca);
    padding: var(--padding);
    margin-top: var(--margin);
    font-size: 1.2em;
    font-weight: bold;
    border-radius: 5px;

    &:hover{
        background-color: rgb(67, 193, 153);
    }
`;