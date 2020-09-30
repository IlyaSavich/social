import { KeyProcessor } from './KeyProcessor';
import caret from '../../caret/Caret';
import * as commandService from '../../command/CommandService';
import commandStorage from '../../command/CommandStorage';
import * as caretService from '../../caret/CaretService';

export class BackspaceKeyProcessor extends KeyProcessor {
    public isApplicable(e: KeyboardEvent): boolean {
        return super.isApplicable(e) && this.isBackspaceKey(e);
    }

    public process(e: KeyboardEvent) {
        const previousTextPosition = caret.textPositionX;
        const command = commandStorage.get();

        commandService.removeFromPositionActiveCommand(previousTextPosition - 1);
        caret.returnCaret();
        caretService.appendPixelPositionByText(commandService.pathInfo());
        caretService.appendPositionByText(command.slice(0, previousTextPosition - 1));
    }

    private isBackspaceKey(e: KeyboardEvent) {
        return e.keyCode === 8;
    }
}
