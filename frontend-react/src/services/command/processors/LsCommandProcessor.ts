import { ICommandProcessor } from './CommandProcessor';
import stepTree from '../../steps/StepTree';
import * as textService from '../../text/TextService';
import caret from '../../caret/Caret';

export class LsCommandProcessor implements ICommandProcessor {
    public getCommandName(): string {
        return 'ls';
    }

    public getDescription(): string {
        return 'Lists all available steps.';
    }

    public process(): void {
        caret.hide();

        stepTree.getCurrentSteps().forEach((step) => {
            textService.appendText(step);
            textService.newLine();
        });

        caret.show();
    }
}
