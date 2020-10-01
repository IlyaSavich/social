import commandExecutor from './CommandExecutor';
import { ICommandProcessor } from './processors/CommandProcessor';
import { HelpCommandProcessor } from './processors/HelpCommandProcessor';
import { LsCommandProcessor } from './processors/LsCommandProcessor';

const COMMANDS: ICommandProcessor[] = [
    new HelpCommandProcessor(),
    new LsCommandProcessor(),
];

export function register(): void {
    commandExecutor.setCommands(COMMANDS);
}
