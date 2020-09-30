import { KeyProcessor } from './KeyProcessor';
import caret from '../../caret/Caret';
import * as commandService from '../../command/CommandService';
import commandStorage from '../../command/CommandStorage';
import * as caretService from '../../caret/CaretService';

export class DeleteKeyProcessor extends KeyProcessor {
    public isApplicable(e: KeyboardEvent): boolean {
        return super.isApplicable(e) && this.isDeleteKey(e);
    }

    public process(e: KeyboardEvent) {
        const previousTextPosition = caret.textPositionX;
        const command = commandStorage.get();

        commandService.removeFromPositionActiveCommand(previousTextPosition);
        caret.returnCaret();
        caretService.appendPixelPositionByText(commandService.pathInfo());
        caretService.appendPositionByText(command.slice(0, previousTextPosition));
    }

    private isDeleteKey(e: KeyboardEvent) {
        return e.keyCode === 46;
    }
}
