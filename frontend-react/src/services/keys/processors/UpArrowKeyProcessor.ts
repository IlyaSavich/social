import { KeyProcessor } from './KeyProcessor';
import * as commandService from '../../command/CommandService';

export class UpArrowKeyProcessor extends KeyProcessor {
    public isApplicable(e: KeyboardEvent): boolean {
        return super.isApplicable(e) && this.isUpArrowKey(e);
    }

    public process(e: KeyboardEvent) {
        commandService.setPreviousCommand();
    }

    private isUpArrowKey(e: KeyboardEvent) {
        return e.keyCode === 38;
    }
}
