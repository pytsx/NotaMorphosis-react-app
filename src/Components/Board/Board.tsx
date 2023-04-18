import { Stack } from "../Stack";
import { Typography } from "../Typography";
import { AddInput } from "../AddInput";
import { IBoardComponent } from "./Board.type";
import { Tasks } from "../Tasks";
import { MdMenu } from "react-icons/md";
import { SVG } from "../../assets";

export const BoardComponent = ({
    primaryColor,
    secondaryColor,
    note,
    theme,
    width = 0,
    activeMenuIcon
}: IBoardComponent) => (
    <Stack
        direction="column"
        justify="start"
        width={`calc(100% - ${width}px)`}
        height="100%"
        style={{
            background: String(theme?.palette?.primary),
        }}>
        <Stack
            position='absolute'
            style={{
                display: note ? 'flex' : 'none',
                flexDirection: 'column',
                background: `${theme?.palette?.primary}0f`,
                backdropFilter: 'blur(12px)',
                padding: '2.4rem 2.4rem 1.2rem 2.4rem',
                zIndex: 2000
            }}>
            <div style={{ margin: '-1.2rem 0 .32rem .8rem', display: activeMenuIcon ? 'inline' : 'none' }}>
                <Typography color={secondaryColor} variant="h1" >
                    <MdMenu />
                </Typography>
            </div>
            <Stack>
                <div style={{ marginLeft: '.8rem' }}>
                    <Typography color={secondaryColor} variant="h1">
                        {note?.icon}
                    </Typography>
                </div>
                <div style={{ marginLeft: '.4rem' }}>
                    <Typography color={secondaryColor} variant="h1">
                        {note?.label}
                    </Typography>
                </div>
            </Stack>
        </Stack>


        <Stack
            position="relative"
            height="fit-content"
            width="100%"
            style={{
                display: note?.tasks?.length == 0 ? 'none' : 'flex',
                padding: '6.4rem 2.4rem 8rem 2.4rem',
                overflowY: 'scroll',
            }}>
            <div style={{ width: '100%', height: 'fit-content' }}>
                <Tasks />
            </div>



        </Stack>
        <Stack direction="column" height="100vh" align="center" justify="center" style={{ display: note?.tasks?.length != 0 ? 'none' : 'flex', }}>
            <div style={{ width: '200px', height: 'auto' }}>

                <SVG color={note?.color} value={Math.floor(Math.random() * 6)} />
            </div>
            <Typography color={note?.color} variant="h5" weight={400} margin="2rem">
                As tarefas de <strong>{note?.label}</strong> serão exibidas aqui
            </Typography>
        </Stack>
        <Stack
            width="100%"
            style={{
                position: 'absolute',
                bottom: 0,
                visibility: note ? 'visible' : 'hidden',
                background: `${theme?.palette?.primary}0f`,
                backdropFilter: 'blur(12px)',
                padding: '1.2rem 2.4rem 2.4rem 2.4rem',
                zIndex: 2000
            }}>
            <AddInput placeholder="Adicionar uma tarefa" color={String(primaryColor)} />
        </Stack>

    </Stack>
)