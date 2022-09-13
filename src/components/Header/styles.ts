import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 12.5rem;
    position: relative;
    background: ${(props) => props.theme.colors['gray-700']};
`
export const AddTaskForm = styled.form`
    position: absolute;
    height: 3.375rem;
    bottom: calc(-3.375rem / 2);
    width: 100%;
    max-width: 46rem;
    display: flex;
    gap: 0.5rem;
    padding: 0 1rem;
`

export const InputTask = styled.input`
    height: 100%;
    flex: 1;
    color: ${(props) => props.theme.colors['gray-100']};
    background: ${(props) => props.theme.colors['gray-500']};
    border: 1px solid ${(props) => props.theme.colors['gray-700']};
    border-radius: 0.5rem;
    padding: 0 1rem;
    font-size: 1rem;
`
export const ButtonTask = styled.button`
    height: 100%;
    padding: 0 1rem;
    background: ${(props) => props.theme.colors['blue-dark']};
    color: ${(props) => props.theme.colors['gray-100']};
    border: none;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.375rem;
    font-weight: 700;
    font-size: 0.875rem;
`
