import { KeyProcessor } from './KeyProcessor';
import * as textService from '../../text/TextService';
import * as commandService from '../../command/CommandService';

export class ResetKeyProcessor extends KeyProcessor {
    public isApplicable(e: KeyboardEvent): boolean {
        return super.isApplicable(e) && this.isResetKey(e);
    }

    public process(e: KeyboardEvent) {
        textService.writeText('^C');
        textService.newLine();
        commandService.resetCommand();
    }

    private isResetKey(e: KeyboardEvent) {
        return e.keyCode === 67 && e.ctrlKey;
    }
}
