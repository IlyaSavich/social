import { KeyProcessor } from './KeyProcessor';
import * as commandService from '../../command/CommandService';

export class UpDownArrowKeyProcessor extends KeyProcessor {
    public isApplicable(e: KeyboardEvent): boolean {
        const isUpDownArrowKey = this.isUpArrowKey(e) || this.isDownArrowKey(e);

        return super.isApplicable(e) && isUpDownArrowKey;
    }

    public process(e: KeyboardEvent) {
        if (this.isUpArrowKey(e)) {
            commandService.setPreviousCommand();
        }

        if (this.isDownArrowKey(e)) {
            commandService.setNextCommand();
        }
    }

    private isUpArrowKey(e: KeyboardEvent) {
        return e.keyCode === 38;
    }

    private isDownArrowKey(e: KeyboardEvent) {
        return e.keyCode === 40;
    }
}
