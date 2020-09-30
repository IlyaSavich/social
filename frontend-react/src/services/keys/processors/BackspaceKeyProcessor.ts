import { KeyProcessor } from './KeyProcessor';
import caret from '../../caret/Caret';
import * as commandService from '../../command/CommandService';
import * as caretService from '../../caret/CaretService';
import { Direction } from '../../caret/CaretService';

export class BackspaceKeyProcessor extends KeyProcessor {
    public isApplicable(e: KeyboardEvent): boolean {
        return super.isApplicable(e) && this.isBackspaceKey(e);
    }

    public process(e: KeyboardEvent) {
        const letterToRemove = commandService.getLetterForActiveCommand(caret.textPositionX - 1);
        const newCommand = commandService.removeFromPositionActiveCommand(caret.textPositionX - 1);

        caretService.appendPositionByText(letterToRemove, Direction.Left);
        commandService.replaceActiveCommand(newCommand);
    }

    private isBackspaceKey(e: KeyboardEvent) {
        return e.keyCode === 8;
    }
}
