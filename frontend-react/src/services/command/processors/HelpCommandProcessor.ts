import { ICommandProcessor } from './CommandProcessor';
import * as textService from '../../text/TextService';
import commandExecutor from '../CommandExecutor';
import { TerminalError } from '../../../errors/TerminalError';

export class HelpCommandProcessor implements ICommandProcessor {
    public getName(): string {
        return 'help';
    }

    public getPossibleArgumentsCount(): number[] {
        return [0, 1];
    }

    public getOptions(): string[] {
        return [];
    }

    public getDescription(): string {
        return 'Lists all available commands.';
    }

    public process(args: string[]): void {
        if (args.length) {
            this.printCommand(args[0]);
        } else {
            this.printCommandList();
        }
    }

    private printCommand(commandName: string): void {
        const command = commandExecutor.getCommand(commandName);

        if (!command) {
            throw new TerminalError(`Command '${commandName}' not found.`);
        }

        textService.writeText(command.getName() + ' ' + command.getDescription());
        textService.newLine();
    }

    private printCommandList(): void {
        commandExecutor.getCommands().forEach((command) => {
            textService.writeText(command.getName() + ' ' + command.getDescription());
            textService.newLine();
        });
    }
}
