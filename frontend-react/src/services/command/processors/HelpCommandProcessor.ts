import { ICommandProcessor } from './CommandProcessor';
import * as textService from '../../text/TextService';
import caret from '../../caret/Caret';
import commandExecutor from '../CommandExecutor';

export class HelpCommandProcessor implements ICommandProcessor {
    public getCommandName(): string {
        return 'help';
    }

    public getDescription(): string {
        return 'Prints all available commands.';
    }

    public process(): void {
        caret.hide();

        commandExecutor.getCommands().forEach((command) => {
            textService.appendText(command.getCommandName() + ' ' + command.getDescription());
            textService.newLine();
        });

        caret.show();
    }
}
