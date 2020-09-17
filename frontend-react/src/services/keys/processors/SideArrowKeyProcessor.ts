import { KeyProcessor } from './KeyProcessor';
import commandStorage from '../../command/CommandStorage';
import * as textService from '../../text/TextService';
import caret from '../../caret/Caret';
import * as textRenderer from '../../../renderer/TextRenderer';

export class SideArrowKeyProcessor extends KeyProcessor {
    public isApplicable(e: KeyboardEvent): boolean {
        const isSideArrowKey = this.isLeftArrowKey(e) || this.isRightArrowKey(e);

        return super.isApplicable(e) && isSideArrowKey;
    }

    public process(e: KeyboardEvent) {
        const previousCaretTextPosition = caret.textPosition;
        const previousCaretPixelPosition = caret.x;

        textService.renderScreenText();

        caret.hide();

        if (e.keyCode === 37) {
            const command = commandStorage.get();
            const letter = command.slice(previousCaretTextPosition - 1, previousCaretTextPosition);
            const pixelOffset = textRenderer.measureText(letter).width;

            caret.setTextPosition(previousCaretTextPosition - 1);
            caret.setPixelXPosition(previousCaretPixelPosition - pixelOffset);
        }

        if (e.keyCode === 39) {
            const command = commandStorage.get();
            const letter = command.slice(previousCaretTextPosition, previousCaretTextPosition + 1);
            const pixelOffset = textRenderer.measureText(letter).width;

            caret.setTextPosition(previousCaretTextPosition + 1);
            caret.setPixelXPosition(previousCaretPixelPosition + pixelOffset);
        }

        caret.show();
    }

    private isLeftArrowKey(e: KeyboardEvent) {
        return e.keyCode === 37;
    }

    private isRightArrowKey(e: KeyboardEvent) {
        return e.keyCode === 39;
    }
}
