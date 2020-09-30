import { KeyProcessor } from './KeyProcessor';
import * as commandService from '../../command/CommandService';
import caret from '../../caret/Caret';
import * as caretService from '../../caret/CaretService';
import { Direction } from '../../caret/CaretService';
import * as screenTextRenderer from '../../../renderer/ScreenTextRenderer';

export class SideArrowKeyProcessor extends KeyProcessor {
    public isApplicable(e: KeyboardEvent): boolean {
        const isSideArrowKey = this.isLeftArrowKey(e) || this.isRightArrowKey(e);

        return super.isApplicable(e) && isSideArrowKey;
    }

    public process(e: KeyboardEvent) {
        const previousCaretTextPosition = caret.textPositionX;

        screenTextRenderer.draw();

        caret.hide();

        if (this.isLeftArrowKey(e)) {
            const letter = commandService.getLetterForActiveCommand(previousCaretTextPosition - 1);

            caretService.appendPositionByText(letter, Direction.Left);
        }

        if (this.isRightArrowKey(e)) {
            const letter = commandService.getLetterForActiveCommand(previousCaretTextPosition);

            caretService.appendPositionByText(letter, Direction.Right);
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
