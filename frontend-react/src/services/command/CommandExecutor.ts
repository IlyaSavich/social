import { ICommandProcessor } from './processors/CommandProcessor';
import { CommandNotFoundError } from '../../errors/CommandNotFoundError';

class CommandExecutor {
    private commandsMap: { [key: string]: ICommandProcessor } = {};

    public getCommands(): ICommandProcessor[] {
        return Object.values(this.commandsMap);
    }

    public setCommands(commands: ICommandProcessor[]): void {
        commands.forEach((command) => {
            this.commandsMap[command.getCommandName()] = command;
        });
    }

    public execute(command: string): void {
        if (!this.commandsMap.hasOwnProperty(command)) {
            throw new CommandNotFoundError(command);
        }

        const commandProcessor = this.commandsMap[command];

        commandProcessor.process();
    }
}

export default new CommandExecutor();
