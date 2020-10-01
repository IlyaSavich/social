import canvas from '../services/canvas/Canvas'
import textStorage from '../services/text/TextStorage';
import screenConfig from '../configs/screen';
import * as textRenderer from './TextRenderer';

export function draw() {
    canvas.context.save();

    textRenderer.renderScreenText(getScreenText());

    canvas.context.restore();
}

function getScreenText(): string[] {
    return textStorage.getRows().slice(-screenConfig.rowsOnScreen);
}
