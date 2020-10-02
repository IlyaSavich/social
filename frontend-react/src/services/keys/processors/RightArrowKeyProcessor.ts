import { KeyProcessor } from './KeyProcessor';
import * as commandService from '../../command/CommandService';
import caret from '../../caret/Caret';
import * as caretService from '../../caret/CaretService';
import { Direction } from '../../caret/CaretService';
import * as screenTextRenderer from '../../../renderer/ScreenTextRenderer';

export class RightArrowKeyProcessor extends KeyProcessor {
    public isApplicable(e: KeyboardEvent): boolean {
        return super.isApplicable(e) && this.isRightArrowKey(e);
    }

    public process(e: KeyboardEvent) {
        const letter = commandService.getLetterForActiveCommand(caret.textPositionX);
        caretService.appendPositionByText(letter, Direction.Right);

        screenTextRenderer.draw();
    }

    private isRightArrowKey(e: KeyboardEvent) {
        return e.keyCode === 39;
    }
}
