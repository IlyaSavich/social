import textStorage from './TextStorage';
import caret from '../Caret';
import * as clearRenderer from '../../renderer/ClearRenderer';
import * as textRenderer from '../../renderer/TextRenderer';

const ROWS_ON_SCREEN = 10;

export function appendText(text: string): void {
    textStorage.appendToLastRow(text);
    renderScreenText();
}

export function getScreenText(): string[] {
    return textStorage.getRows().slice(-ROWS_ON_SCREEN);
}

function renderScreenText() {
    caret.resetPosition();

    clearRenderer.clear();

    const screenText = getScreenText();

    screenText.forEach((rowText, index) => {
        caret.returnCaret();

        textRenderer.render(rowText, caret.x, caret.y);

        if (index === screenText.length - 1) {
            const caretShift = textRenderer.measureText(rowText).width;

            caret.shift(caretShift);
        } else {
            caret.newLine();
        }
    });
}
