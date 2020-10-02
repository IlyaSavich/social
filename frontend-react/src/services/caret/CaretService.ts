import caret from './Caret';
import * as textRenderer from '../../renderer/TextRenderer';
import caretRenderer from '../../renderer/CaretRenderer';

export enum Direction {
    Right = 1,
    Left = -1,
}

export function appendPositionByText(text: string, direction: number = Direction.Right): void {
    caret.appendTextPosition(text.length * direction);

    appendPixelPositionByText(text, direction);
}

export function appendPixelPositionByText(text: string, direction: number = Direction.Right): void {
    caret.appendPixelXPosition(textRenderer.measureText(text).width * direction);
}

export function forceShow(): void {
    caret.forceShowForTime();
    caretRenderer.renderCaret();
}
