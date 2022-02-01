import styled from 'styled-components';

export const FieldCamps = styled.fieldset`
    display: flex;
    align-items: center;
    padding: var(--padding);
    width: 15vw;
    
    @media(max-width: 600px){
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        width: 50vw;
        padding: 0;
    }

`;

export const OptionsCamp = styled.div`
    display: flex;
    align-items: center;
    gap: var(--gaps);
    margin-right: var(--margin);
    padding: var(--padding);

    label{
        cursor: pointer;
    }

    @media(max-width: 600px){
        label{
            font-size: 1.2em;
        }
    }

`;