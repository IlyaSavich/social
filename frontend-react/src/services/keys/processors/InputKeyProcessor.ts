import { KeyProcessor } from './KeyProcessor';
import * as commandService from '../../command/CommandService';
import caret from '../../caret/Caret';

export class InputKeyProcessor extends KeyProcessor {
    public isApplicable(e: KeyboardEvent): boolean {
        const isInputKey = this.isAlphanumericKey(e)
            || this.isNumpadKey(e)
            || this.isSpecialKey(e)
            || this.isSpace(e);

        return super.isApplicable(e) && isInputKey;
    }

    public process(e: KeyboardEvent) {
        commandService.insertIntoCaretPositionActiveCommand(e.key, caret.textPositionX);
    }

    private isNumpadKey(e: KeyboardEvent) {
        return e.keyCode >= 96 && e.keyCode <= 111;
    }

    private isAlphanumericKey(e: KeyboardEvent) {
        return e.keyCode >= 48 && e.keyCode <= 90;
    }

    private isSpecialKey(e: KeyboardEvent) {
        return (e.keyCode >= 186 && e.keyCode <= 192) || (e.keyCode >= 219 && e.keyCode <= 222);
    }

    private isSpace(e: KeyboardEvent) {
        return e.keyCode === 32;
    }
}
