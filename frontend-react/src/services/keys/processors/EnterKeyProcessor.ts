import { KeyProcessor } from './KeyProcessor';
import * as commandService from '../../command/CommandService';
import * as textService from '../../text/TextService';

export class EnterKeyProcessor extends KeyProcessor {
    public isApplicable(e: KeyboardEvent): boolean {
        return super.isApplicable(e) && this.isEnterKey(e);
    }

    public process(e: KeyboardEvent) {
        textService.newLine();
        commandService.executeActiveCommand();
        commandService.newCommand();
    }

    private isEnterKey(e: KeyboardEvent) {
        return e.keyCode === 13;
    }
}
