import { useTheme } from "../../../../../Common/Context/Theme"
import { IChildren } from "../../../../../Common/Types"

interface IMenyCard extends IChildren {
}
export const MenuCard = ({ children }: IMenyCard) => {
    const { theme } = useTheme()
    return (
        < div style={{
            width: '100%',
            height: 'fit-content',
            background: String(theme?.palette?.primary),
            padding: '1.2rem .2rem .2rem .2rem'
        }
        }>
            {children}

        </div >
    )
}