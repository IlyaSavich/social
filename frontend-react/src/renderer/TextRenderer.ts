import canvas from '../services/Canvas'
import textConfig from '../configs/text'

const TEXT_COLOR = textConfig.color;
const FONT = `${textConfig.font.size} ${textConfig.font.family}`;

export function render(text: string, x: number, y: number) {
    canvas.context.save();

    canvas.context.fillStyle = TEXT_COLOR;
    canvas.context.font = FONT;

    canvas.context.fillText(text, x, y);

    canvas.context.restore();
}

export function measureText(text: string): TextMetrics {
    canvas.context.save();

    canvas.context.fillStyle = TEXT_COLOR;
    canvas.context.font = FONT;

    const textMetrics = canvas.context.measureText(text);

    canvas.context.restore();

    return textMetrics;
}
