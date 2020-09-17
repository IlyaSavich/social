import caret from './Caret';
import * as textRenderer from '../../renderer/TextRenderer';

export function appendPositionByText(text: string): void {
    caret.appendTextPosition(text.length);
    caret.appendPixelXPosition(textRenderer.measureText(text).width);
}
