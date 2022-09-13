import { PlusCircle } from 'phosphor-react'
import logo from '../../assets/logo-to-do.svg'
import { useTask } from '../../hooks/useTask'
import { AddTaskForm, ButtonTask, HeaderContainer, InputTask } from './styles'
import { useState, FormEvent, ChangeEvent } from "react";

export function Header(){
    const { addTask } = useTask();

    const [title, setTitle] = useState("");

    function handleSubmit (event: FormEvent){
        event.preventDefault();

        addTask(title);
        setTitle("");
    }

    function onChangeTitle(event: ChangeEvent<HTMLInputElement>){
        setTitle(event.target.value);
    }

    return (
        <HeaderContainer>
            <img src={logo} />

            <AddTaskForm onSubmit={handleSubmit}>
                <InputTask 
                type="text" 
                placeholder="Adicione uma nova tarefa"
                onChange={onChangeTitle}
                value={title}
                />

                <ButtonTask>
                    Criar
                    <PlusCircle size={20}/>
                </ButtonTask>
            </AddTaskForm>
        </HeaderContainer>
    )
}