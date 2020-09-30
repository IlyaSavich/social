import { KeyProcessor } from './KeyProcessor';
import * as commandService from '../../command/CommandService';

export class DownArrowKeyProcessor extends KeyProcessor {
    public isApplicable(e: KeyboardEvent): boolean {
        return super.isApplicable(e) && this.isDownArrowKey(e);
    }

    public process(e: KeyboardEvent) {
        commandService.setNextCommand();
    }

    private isDownArrowKey(e: KeyboardEvent) {
        return e.keyCode === 40;
    }
}
