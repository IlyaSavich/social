import { ICommandProcessor } from './CommandProcessor';
import stepTree from '../../steps/StepTree';
import * as textService from '../../text/TextService';
import caret from '../../caret/Caret';

export class LsCommandProcessor implements ICommandProcessor {
    public getName(): string {
        return 'ls';
    }

    getPossibleArgumentsCount(): number[] {
        return [0];
    }

    public getOptions(): string[] {
        return [];
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
