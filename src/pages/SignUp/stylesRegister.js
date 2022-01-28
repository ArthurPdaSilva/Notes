import styled from 'styled-components';

export const FieldCamps = styled.fieldset`
    display: flex;
    align-items: center;
    padding: var(--padding);
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
`;