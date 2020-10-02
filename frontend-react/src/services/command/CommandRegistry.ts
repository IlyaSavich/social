import commandExecutor from './CommandExecutor';
import { ICommandProcessor } from './processors/CommandProcessor';
import { HelpCommandProcessor } from './processors/HelpCommandProcessor';
import { LsCommandProcessor } from './processors/LsCommandProcessor';
import { RunCommandProcessor } from './processors/RunCommandProcessor';

const COMMANDS: ICommandProcessor[] = [
    new HelpCommandProcessor(),
    new LsCommandProcessor(),
    new RunCommandProcessor(),
];

export function register(): void {
    commandExecutor.setCommands(COMMANDS);
}
