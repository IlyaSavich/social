import commandExecutor from './CommandExecutor';
import { ICommandProcessor } from './processors/CommandProcessor';
import { HelpCommandProcessor } from './processors/HelpCommandProcessor';

const COMMANDS: ICommandProcessor[] = [
    new HelpCommandProcessor(),
];

export function register(): void {
    commandExecutor.setCommands(COMMANDS);
}
