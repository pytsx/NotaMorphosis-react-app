import { MdAdd, MdList } from "react-icons/md"
import { useNotes } from "../../Common/Context"
import { useTheme } from "../../Common/Context/Theme"
import { AvatarContainer, Board, MenuContainer, Search, Stack, Typography } from "../../Components"
import { Button } from "../../Components/Button"
import { MainContainerStyled } from "./Main.styled"

export const MainPage = () => {
    const { theme } = useTheme()

    return (
        <MainContainerStyled>
            <Stack direction="column" height="100%" width="280px" >

                <Stack padding='.8rem 0 .4rem .4rem' gap=".8rem" direction="column" height="cal(100% - 3rem)" width="100%" >

                    <Stack height="90px" direction="column" gap=".8rem" padding='0 .64rem '>

                        <Stack gap=".6rem" >
                            <AvatarContainer />
                            <Stack height="100%" justify="center" direction="column">
                                <Typography variant="h5" weight={400} letterSpace={'-.040rem'}>
                                    Lorem ipsum dolor sit
                                </Typography>
                                <Typography variant="h6" weight={400}  >
                                    dolor@ipsum.sit
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
                            <MenuContainer type='default' />
                        </Stack>
                        <MenuContainer />
                    </Stack>

                </Stack>
                <Stack
                    position="absolute"
                    width="100%"
                    height="3rem"
                    padding='.32rem .32rem 0 .32rem'
                    gap='0'
                    style={{
                        bottom: 1,
                        background: String(theme?.palette.secondary),
                    }} >

                    <Button icon={<MdAdd />} height='1.2rem' text="Nova lista" width='calc(100% - 20px)' onClick={() => { }} />
                    <Button width="40px" icon={<MdList />} height='1.2rem' justify="center" variant="h2" sx={{ 'justifyContent': 'center', 'alignItems': 'center' }} onClick={() => { }} />
                </Stack>

            </Stack>
            <Board />

        </MainContainerStyled >
    )
}