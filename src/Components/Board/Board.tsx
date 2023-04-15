import { useNotes } from "../../Common/Context";
import { gray200 } from "../../Page/Layout/Layout";
import { Input } from "../Input";
import { Stack } from "../Stack";
import { Typography } from "../Typography";
import { AddInput } from "./AddInput";
import { Notes } from "./Notes";

export const Board = () => {
    const { currentNote } = useNotes()
    let primaryColor = currentNote?.color + 'de'
    let color = currentNote?.color
    return (
        <Stack direction="column" justify="start" width="calc(100% - 320px)" height="98%" style={{ background: gray200, margin: '.4rem .4rem .4rem .2rem', borderRadius: '.32rem' }}>

            <Stack style={{ margin: '2.4rem', gap: '.6rem' }}>
                <Typography color={primaryColor} variant="h1">
                    {currentNote?.icon}
                </Typography>
                <Typography color={primaryColor} variant="h1">
                    {currentNote?.label}
                </Typography>
            </Stack>

            <Stack height="100%" width="100%" style={{ padding: '0 2.4rem' }}>
                <Notes />
            </Stack>





            <Stack
                width="100%"
                style={{
                    position: 'absolute',
                    bottom: 0,
                    visibility: currentNote ? 'visible' : 'hidden',
                    background: '#1d1d1d9f',
                    backdropFilter: 'blur(6px)',
                    padding: '.8rem 2.4rem 3.2rem 2.4rem',
                }}>
                <AddInput color={String(color)} />
            </Stack>

        </Stack>
    )
}