import { NoteContainerStyled, NoteWrapperStyled } from "./Task.styled"
import { ITaskComponent } from "./Task.type"
import { TaskContent } from "./TaskContent";
import { Typography } from "../../Typography";

export const TaskComponent = ({
    task,
    hover,
    handleHover,
    borderRadius,
    handleCurrentTask,
    currentTask
}: ITaskComponent) => (
    <NoteContainerStyled
        isActive={false || !!task?.label}
        onClick={() => !!task?.label ? handleCurrentTask(task) : {}}
    >
        <NoteWrapperStyled
            isActive={task?.id == currentTask?.id}
            style={{
                borderRadius,
                alignItems: 'center',
                justifyContent: 'center',
                display: !!task?.id ? 'flex' : 'none',
                flexDirection: 'column',
                padding: '.8rem 0rem',
            }}>
            <TaskContent task={task} />
            <div style={{
                width: '100%',
                padding: '.16rem 0 0 1.74rem'
            }}>
                <Typography variant="h6">
                    {/* parte inferior task */}
                </Typography>
            </div>
        </NoteWrapperStyled>
    </NoteContainerStyled >
)