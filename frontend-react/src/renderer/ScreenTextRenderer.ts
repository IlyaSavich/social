import canvas from '../services/canvas/Canvas'
import textStorage from '../services/text/TextStorage';
import screenConfig from '../configs/screen';
import * as textRenderer from './TextRenderer';
import caretRenderer from './CaretRenderer';
import * as clearRenderer from './ClearRenderer';

export function draw() {
    canvas.context.save();

    clearRenderer.clear();
    textRenderer.renderScreenText(getScreenText());
    caretRenderer.renderCaret();

    canvas.context.restore();
}

function getScreenText(): string[] {
    return textStorage.getAll().slice(-screenConfig.rowsOnScreen);
}
