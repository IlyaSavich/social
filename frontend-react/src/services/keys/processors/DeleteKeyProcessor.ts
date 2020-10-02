import { KeyProcessor } from './KeyProcessor';
import caret from '../../caret/Caret';
import * as commandService from '../../command/CommandService';

export class DeleteKeyProcessor extends KeyProcessor {
    public isApplicable(e: KeyboardEvent): boolean {
        return super.isApplicable(e) && this.isDeleteKey(e);
    }

    public process(e: KeyboardEvent) {
        commandService.removeFromPositionActiveCommand(caret.textPositionX);
    }

    private isDeleteKey(e: KeyboardEvent) {
        return e.keyCode === 46;
    }
}
