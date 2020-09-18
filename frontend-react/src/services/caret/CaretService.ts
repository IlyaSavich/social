import caret from './Caret';
import * as textRenderer from '../../renderer/TextRenderer';

export enum Direction {
    Right = 1,
    Left = -1,
}

export function appendPositionByText(text: string, direction: number = Direction.Right): void {
    caret.appendTextPosition(text.length * direction);
    caret.appendPixelXPosition(textRenderer.measureText(text).width * direction);
}
