import { KeyProcessor } from './KeyProcessor';
import * as commandService from '../../command/CommandService';
import caret from '../../caret/Caret';
import * as caretService from '../../caret/CaretService';
import { Direction } from '../../caret/CaretService';
import * as screenTextRenderer from '../../../renderer/ScreenTextRenderer';

export class LeftArrowKeyProcessor extends KeyProcessor {
    public isApplicable(e: KeyboardEvent): boolean {
        return super.isApplicable(e) && this.isLeftArrowKey(e);
    }

    public process(e: KeyboardEvent) {
        const letter = commandService.getLetterForActiveCommand(caret.textPositionX - 1);
        caretService.appendPositionByText(letter, Direction.Left);

        screenTextRenderer.draw();
    }

    private isLeftArrowKey(e: KeyboardEvent) {
        return e.keyCode === 37;
    }
}
