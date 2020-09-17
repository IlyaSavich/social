import textStorage from './TextStorage';
import caret from '../caret/Caret';
import * as textRenderer from '../../renderer/TextRenderer';

const ROWS_ON_SCREEN = 10;

export function appendText(text: string): void {
    const caretShift = textRenderer.measureText(text).width;

    caret.appendPixelXPosition(caretShift);
    textStorage.appendToLastRow(text);

    renderScreenText();
}

export function updateLastRow(text: string): void {
    textStorage.updateLastRow(text);
    renderScreenText();
}

export function getScreenText(): string[] {
    return textStorage.getRows().slice(-ROWS_ON_SCREEN);
}

export function renderScreenText() {
    caret.hide();

    textRenderer.renderScreenText(getScreenText());

    caret.show();
}
