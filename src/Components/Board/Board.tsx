import { useNotes } from "../../Common/Context";
import { gray200 } from "../../Page/Layout/Layout";
import { Stack } from "../Stack";
import { Typography } from "../Typography";
import { AddInput } from "./AddInput";
import { IBoardComponent } from "./Board.type";
import { Notes } from "./Notes";

export const BoardComponent = ({
    primaryColor,
    secondaryColor,
    note
}: IBoardComponent) => (
    <Stack
        direction="column"
        justify="start"
        width="calc(100% - 280px)"
        height="100%"
        style={{
            background: gray200,
            margin: '.4rem .4rem .4rem .2rem',
            borderRadius: '.32rem'
        }}>

        <Stack
            position='absolute'
            style={{
                gap: '.6rem',
                background: '#1d1d1d9f',
                backdropFilter: 'blur(12px)',
                padding: '2.4rem 2.4rem 1.2rem 2.4rem',
                zIndex: 2000
            }}>
            <Typography color={secondaryColor} variant="h1">
                {note?.icon}
            </Typography>
            <Typography color={secondaryColor} variant="h1">
                {note?.label}
            </Typography>
        </Stack>


        <Stack
            position="relative"
            height="fit-content"
            width="100%"
            style={{
                padding: '6.4rem 2.4rem 8rem 2.4rem',
                overflowY: 'scroll',
            }}>
            <div style={{ width: '100%', height: 'fit-content' }}>
                <Notes />
            </div>

        </Stack>

        <Stack
            width="100%"
            style={{
                position: 'absolute',
                bottom: 0,
                visibility: note ? 'visible' : 'hidden',
                background: '#1d1d1d9f',
                backdropFilter: 'blur(12px)',
                padding: '1.2rem 2.4rem 2.4rem 2.4rem',
                zIndex: 2000

            }}>
            <AddInput color={String(primaryColor)} />
        </Stack>

    </Stack>
)