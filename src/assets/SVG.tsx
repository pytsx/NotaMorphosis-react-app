import { SVG_1 } from './SVG_1'
import { SVG_2 } from './SVG_2'
import { SVG_3 } from './SVG_3'
import { SVG_4 } from './SVG_4'
import { SVG_5 } from './SVG_5'
export const SVG = ({ value, color }: { value: number, color: string }) => {
    const style = {
        width: '120px',
        height: 'auto'
    }
    switch (value) {
        case 1:
            return <SVG_1 color={color} />;
        case 2:
            return <SVG_2 color={color} />;
        case 3:
            return <SVG_3 color={color} />;
        case 4:
            return <SVG_4 color={color} />;
        case 5:
            return <SVG_5 color={color} />;

        default:
            return <SVG_1 color={color} />;
    }
}