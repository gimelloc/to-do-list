import { Trash, CheckCircle } from "phosphor-react";
import { Task } from "../../contexts/TaskContext";
import { useTask } from "../../hooks/useTask";
import { ButtonCheck, ButtonRemove, NewTaskContainer, TextNewTask } from "./styles";

interface Props {
    task: Task;
}

export function NewTask({task}: Props){
    const { removeTask, markTaskCompleted } = useTask();

    function handleRemove(){
        removeTask(task.id);
    }

    return(
        <NewTaskContainer>
            <ButtonCheck onClick={()=> markTaskCompleted(task.id)}>
            {task.isCompleted ? <CheckCircle size={22} weight="fill"/> :<div/>}
            </ButtonCheck>

            <TextNewTask>
            {task.title}</TextNewTask>

            <ButtonRemove>
                <Trash size={15} onClick={handleRemove}/>
            </ButtonRemove>
        </NewTaskContainer>
    )
}