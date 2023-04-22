import { MdAdd } from "react-icons/md"
import { AvatarContainer, Typography, Search, Menu, Stack } from "../../../../Components"
import { MenuLateral } from "../MenuLateral"
import { IMenuLateral } from "../MenuLateral.types"
import { Button } from "../../../../Components/Button"
import { useNotes, usePerfil } from "../../../../Common/Context"

export const MenuLeft = ({ width, isActive, theme }: IMenuLateral) => {
    const { addNote } = useNotes()
    const { perfil } = usePerfil()
    let letter = perfil?.username[0] ? perfil?.username[0] as String : '@'
    return (
        <MenuLateral width={width} isActive={isActive} >

            <Stack padding='.8rem 0 .4rem .4rem' gap=".8rem" direction="column" height="cal(100% - 3rem)" width="100%" >

                <Stack height="90px" direction="column" gap=".8rem" padding='0 .64rem '>

                    <Stack gap=".6rem" >
                        <AvatarContainer letter={letter?.toUpperCase()} />
                        <Stack height="100%" justify="center" direction="column">
                            <Typography variant="h5" weight={400} letterSpace={'-.040rem'}>
                                {perfil?.username}
                            </Typography>
                            <Typography variant="h6" weight={400}  >
                                {perfil?.email}
                            </Typography>
                        </Stack>
                    </Stack>
                    <Search />
                </Stack>

                <Stack
                    direction="column"
                    justify="start"
                    style={{
                        overflow: 'scroll',
                        height: 'calc(100vh - 90px - 3rem)',
                        paddingBottom: '1.2rem'
                    }}>
                    <Stack
                        style={{
                            borderBottom: '1px solid #c9c9c92f',
                            paddingBottom: '.4rem'
                        }}>
                        <Menu values={[]} />
                    </Stack>
                    <Menu values={[]} />
                </Stack>
            </Stack>
            <Stack
                position="absolute"
                width="100%"
                height="3rem"
                padding='.32rem '
                gap='0'
                style={{
                    bottom: 1,
                    background: String(theme?.palette.secondary),
                }} >

                <Button icon={<MdAdd />} height='1.2rem' text="Nova lista" width='100%' onClick={() => addNote()} />
                {/* <Button
                    width="40px"
                    icon={<MdList />}
                    height='1.2rem'
                    justify="center"
                    variant="h2"
                    sx={{ 'justifyContent': 'center', 'alignItems': 'center' }}
                    onClick={() => { }} /> */}
            </Stack>

        </MenuLateral>
    )
}