import { Task } from "./Task/Task.container"
import { NotesContainerStyled, NotesWrapperStyled } from "./Tasks.styled"
import { ITasksComponent } from "./Tasks.typs"


export const TasksComponent = ({ tasks }: ITasksComponent) => (
    <NotesWrapperStyled>
        <NotesContainerStyled>
            {
                tasks?.map(task => (
                    <Task task={task} key={task.id} />
                ))
            }
        </NotesContainerStyled>
    </NotesWrapperStyled>
)
