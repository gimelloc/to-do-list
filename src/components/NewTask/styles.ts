import styled from "styled-components";

export const NewTaskContainer = styled.div`
    width: 100%;
    background: ${(props) => props.theme.colors['gray-500']};
    border: 1px solid ${(props) => props.theme.colors['gray-400']};
    border-radius: 0.75rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
`

export const ButtonCheck = styled.button`
    min-width: 1.125rem;
    height: 1.125rem;
    background: none;
    border: none;

    > div{
        width: 100%;
        height: 100%;
        border: 2px solid ${(props) => props.theme.colors['blue']};
        border-radius: 50%;
    }

    > svg{
        margin: auto;
        padding: 0;
        color: ${(props) => props.theme.colors['purple']};
    }
`

export const TextNewTask = styled.p`
    font-size: 0.875rem;
    line-height: 1.18rem;
    color: ${(props) => props.theme.colors['gray-100']};
    margin-right: auto;
    font-weight: 400;
`

export const ButtonRemove = styled.button`
    background: none;
    border: none;
    color: ${(props) => props.theme.colors['gray-200']}
`