import { KeyProcessor } from './KeyProcessor';
import caret from '../../caret/Caret';
import * as commandService from '../../command/CommandService';

export class BackspaceKeyProcessor extends KeyProcessor {
    public isApplicable(e: KeyboardEvent): boolean {
        return super.isApplicable(e) && this.isBackspaceKey(e);
    }

    public process(e: KeyboardEvent) {
        commandService.removeFromPositionActiveCommand(caret.textPositionX - 1);
    }

    private isBackspaceKey(e: KeyboardEvent) {
        return e.keyCode === 8;
    }
}
