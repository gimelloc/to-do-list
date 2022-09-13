import styled from "styled-components";

export const TableTaskContainer = styled.section`
    width: 100%;
    max-width: 46rem;
    margin: 0 auto;
    margin-top: 5.625rem;
    padding: 0 1rem;
`

export const TableTaskHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;

    .p-purple{
        color: ${(props) => props.theme.colors['purple']};
        font-size: 1rem;
        font-weight: 700;
    }

    .p-blue{
        color: ${(props) => props.theme.colors['blue']};
        font-size: 1rem;
        font-weight: 700;
    }

    div{
        display: flex;
        gap: 0.5rem;
    }

    span{
        background: ${(props) => props.theme.colors['gray-400']};
        color: ${(props) => props.theme.colors['gray-200']};
        border-radius: 8px;
        padding: 3px 9px;
        font-size: 0.75rem;
        font-weight: 700;
    }
`

export const ListTableTask = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    > section{
        margin-top: 4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 1rem;
        color:${(props) => props.theme.colors['gray-300']};
        text-align: center;

        > svg{
            opacity: 0.3;
        }
    }

`