import textStorage from './TextStorage';
import caret from '../caret/Caret';
import * as screenTextRenderer from '../../renderer/ScreenTextRenderer';
import * as caretService from '../caret/CaretService';

export function writeBatch(text: string[]): void {
    text.forEach((row) => {
        writeText(row);
        newLine();
    });
}

export function writeText(text: string): void {
    caretService.appendPositionByText(text);
    textStorage.appendToRow(text);

    screenTextRenderer.draw();
}

export function updateLastRow(text: string): void {
    caret.returnCaret();
    caretService.appendPixelPositionByText(text);
    textStorage.updateRow(text);
    screenTextRenderer.draw();
}

export function newLine(): void {
    caret.newLine();
    textStorage.newLine();
    screenTextRenderer.draw();
}
