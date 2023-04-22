import { RiSunFoggyLine, RiCalendarTodoLine, RiUserShared2Line, RiMailLine, RiStarLine, RiListCheck2 } from 'react-icons/ri';
import { v4 as uuidv4 } from 'uuid'
import { IconManifest, IconType } from 'react-icons'

export const MEU_DIA = 'Meu Dia'
export const IMPORTANTE = 'Importante'
export const HISTORICO = 'Histórico'
export const ATRIBUIDO_A_MIM = 'Atribuído a mim'

export const labels = [MEU_DIA, IMPORTANTE, ATRIBUIDO_A_MIM, HISTORICO];
export const iconsArr = [0, 1, 2, 3];
export const colors = ['#C6A4D1', '#D1C4A4', '#C8A8AE', '#84A9F9'];

export const generateValues = () => {

    const values = [];

    for (let i = 0; i < labels.length; i++) {
        const obj = {
            label: labels[i],
            id: uuidv4(),
            icon: iconsArr[i],
            isDefault: true,
            color: colors[i],
            tasks: [],
        };
        values.push(obj);
    }

    return values;
};


const icons = [
    RiSunFoggyLine,
    RiStarLine,
    RiUserShared2Line,
    RiCalendarTodoLine,
]
export const generateIcon = (iconName: number): JSX.Element => {
    const IconComponent = icons[iconName];
    if (IconComponent) {

        return <IconComponent />;
    } else {
        return <RiListCheck2 />
    }
}