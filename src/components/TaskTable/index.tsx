import { ClipboardText } from "phosphor-react";
import { useTask } from "../../hooks/useTask";
import { NewTask } from "../NewTask";
import { ListTableTask, TableTaskContainer, TableTaskHeader } from "./styles";

export function TaskTable(){
    const { tasks, tasksQuantity, completedTasks } = useTask();
    
    return (
        <TableTaskContainer>
            <TableTaskHeader>
                <div>
                    <p className="p-blue">Tarefas Criadas</p>
                    <span>{tasksQuantity}</span>
                </div>

                <div>
                    <p className="p-purple">Concluídas</p>
                    <span>{completedTasks} de {tasksQuantity}</span>
                </div>
                </TableTaskHeader>

                <ListTableTask>
                    {tasks.map((task) => (
                        <NewTask key={task.id} task={task}/>
                    ))}

                    {tasks.length <= 0 &&(
                        <section>
                            <ClipboardText size={50}/>
                            <div>
                                <p>Você ainda não tem tarefas cadastradas</p>
                                <span>Crie tarefas e organize seus itens a fazer</span>
                            </div>
                        </section>
                    )}
                </ListTableTask>
                
        </TableTaskContainer>
    )
}