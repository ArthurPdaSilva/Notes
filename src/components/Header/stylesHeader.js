import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: calc(var(--padding) + 5px);
    background-color: var(--corHeader);

    h1{
        color: var(--corBranca);
        font-style: italic;
    }
`;

export const Menu = styled.menu`
    & > ul{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--corBranca);
        font-size: var(--fontSize);
        font-style: italic;
        gap: var(--gaps);
    }
`;

export const FlexivelMenu = styled.ul`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 65px;
    right: 0px;

    li{
        display: flex;
        width: 20vw;
    }
    
`;

export const DisplayLi = styled.li`
    a, button{
        color: var(--corBranca);
        font-style: normal;
        background-color: var(--corHeader);
        width: 100%;
        height: 100%;
        text-align: center;
        font-size: calc(var(--fontSize) + 5px);
        padding: calc(var(--padding) + 5px);
        transition: all .4s ease;
    }

    a:hover, button:hover{
        background-color: var(--corPrincipal);
    }
`;

export const AvatarImagem = styled.img`
    height: 30px;
    width: 30px;
    border-radius: 10px;
`;