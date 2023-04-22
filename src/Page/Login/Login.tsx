import React from "react"
import { usePerfil, useTheme } from "../../Common/Context"
import { Stack, Typography } from "../../Components"
import { AddInput } from "../../Components/AddInput"
import { Button } from "../../Components/Button"

export const LoginPage = () => {
    const { theme } = useTheme()
    const { createPerfil, perfil } = usePerfil()
    const [username, setUsername] = React.useState<string>('')
    const [errorMessage, setErrorMessage] = React.useState<string>(' ')

    const handleUsername = (e: string) => {
        setUsername(e)
    }


    const handleCreatePerfil = () => {
        if (username) {
            createPerfil(username)
        } else {
            setErrorMessage('preencha o formulário para prosseguir')
        }
    }

    React.useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.code == 'Enter') {
                if (username) {

                    handleCreatePerfil()
                } else {
                    setErrorMessage('preencha o formulário para prosseguir')

                }
            }
        }
        document.addEventListener('keydown', handleKeyPress)

        return () => {
            document.removeEventListener('keypress', handleKeyPress)
        }
    })
    return (
        <Stack
            position="fixed"
            align="center"
            justify="center"
            width="100%"
            height="100%"
            style={{
                zIndex: 100000,
                display: !!!perfil ? 'flex' : 'none',
                backdropFilter: 'blur(10px) grayscale(100%)',
                transition: 'all 1s ease'
            }}>
            <Stack
                align="center"
                justify="space-evenly"
                direction="column"
                width="20rem"
                height="30rem"
                style={{
                    padding: '.8rem',
                    background: `${theme?.palette?.secondary}`,
                    borderRadius: `${theme?.shape.borderRadius}rem`,

                }}>

                <Stack justify="center" gap="-1rem" align="center" style={{ userSelect: 'none' }}>
                    <Typography weight={900} variant="h1" color={`${theme?.palette.red}`}>
                        To
                    </Typography>
                    <Typography weight={900} variant="h1" color={`${theme?.palette.blue}`}>
                        Do
                    </Typography>
                </Stack>

                <Stack direction="column" >

                    <AddInput color="" onChange={handleUsername} value={username as string} placeholder="username" />
                </Stack>
                <Stack align="center" justify="center" height="2rem">
                    <Typography color={`${theme?.palette.red}`}>
                        {errorMessage}
                    </Typography>
                </Stack>
                <span style={{ width: '100%', height: '2rem' }}>
                    <Button center color={`${theme?.palette.typography.primary}af`} text="criar conta" onClick={handleCreatePerfil} />
                </span>
            </Stack>
        </Stack>
    )
}