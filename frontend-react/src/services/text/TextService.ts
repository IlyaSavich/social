import textStorage from './TextStorage';
import caret from '../caret/Caret';
import * as textRenderer from '../../renderer/TextRenderer';
import * as caretService from '../caret/CaretService';

const ROWS_ON_SCREEN = 10;

export function appendText(text: string): void {
    caretService.appendPixelPositionByText(text);
    textStorage.appendToLastRow(text);

    renderScreenText();
}

export function updateLastRow(text: string): void {
    caret.returnCaret();
    caretService.appendPixelPositionByText(text);
    textStorage.updateLastRow(text);
    renderScreenText();
}

export function newLine(): void {
    caret.newLine();
    textStorage.newLine();
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
