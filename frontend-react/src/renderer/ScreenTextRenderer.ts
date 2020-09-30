import canvas from '../services/canvas/Canvas'
import textStorage from '../services/text/TextStorage';
import screenConfig from '../configs/screen';
import caret from '../services/caret/Caret';
import * as textRenderer from './TextRenderer';

export function draw() {
    canvas.context.save();

    caret.hide();

    textRenderer.renderScreenText(getScreenText());

    caret.show();

    canvas.context.restore();
}

function getScreenText(): string[] {
    return textStorage.getRows().slice(-screenConfig.rowsOnScreen);
}
