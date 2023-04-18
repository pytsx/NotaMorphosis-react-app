import { RiSunFoggyLine, RiCalendarTodoLine, RiUserShared2Line, RiMailLine, RiStarLine } from 'react-icons/ri';
import { v4 as uuidv4 } from 'uuid'

const MEU_DIA = 'Meu Dia'
const IMPORTANTE = 'Importante'
const PLANEJADO = 'Planejado'
const ATRIBUIDO_A_MIM = 'Atribuído a mim'

const labels = [MEU_DIA, IMPORTANTE, PLANEJADO, ATRIBUIDO_A_MIM];
const icons = [<RiSunFoggyLine />, <RiStarLine />, <RiCalendarTodoLine />, <RiUserShared2Line />];
const colors = ['#C6A4D1', '#D1C4A4', '#84A9F9', '#C8A8AE'];

export const generateValues = () => {

    const values = [];

    for (let i = 0; i < labels.length; i++) {
        const obj = {
            label: labels[i],
            id: uuidv4(),
            icon: icons[i],
            personalNote: false,
            color: colors[i],
            tasks: [],
        };
        values.push(obj);
    }

    return values;
};