import canvas from '../services/canvas/Canvas'
import textConfig from '../configs/text'
import screenConfigs from '../configs/screen';

const FONT = `${textConfig.font.size} ${textConfig.font.family}`;

export function renderScreenText(text: string[]) {
    canvas.context.save();

    canvas.context.fillStyle = textConfig.color;
    canvas.context.font = FONT;

    text.forEach((rowText, index) => {
        canvas.context.fillText(rowText, screenConfigs.margin, screenConfigs.margin + (index + 1) * screenConfigs.rowHeight);
    });

    canvas.context.restore();
}

export function render(text: string, x: number, y: number, color: string = textConfig.color) {
    canvas.context.save();

    canvas.context.fillStyle = color;
    canvas.context.font = FONT;

    canvas.context.fillText(text, x, y);

    canvas.context.restore();
}

export function measureText(text: string): TextMetrics {
    canvas.context.save();

    canvas.context.fillStyle = textConfig.color;
    canvas.context.font = FONT;

    const textMetrics = canvas.context.measureText(text);

    canvas.context.restore();

    return textMetrics;
}
