import { Task } from "./Task/Task.container"
import { NotesContainerStyled, NotesWrapperStyled } from "./Tasks.styled"
import { ITasksComponent } from "./Tasks.typs"
import { v4 as uuidv4 } from 'uuid'

export const TasksComponent = ({ tasks }: ITasksComponent) => (
    <NotesWrapperStyled>
        <NotesContainerStyled>
            {
                tasks?.map(task => (
                    <Task task={task} key={`${task?.id}-${uuidv4()}`} />
                ))
            }
        </NotesContainerStyled>
    </NotesWrapperStyled>
)
