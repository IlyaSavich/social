import { ICommandOptions, ICommandProcessor } from './processors/CommandProcessor';
import * as commandParser from './CommandParser';
import { TerminalError } from '../../errors/TerminalError';

class CommandExecutor {
    private commandsMap: { [key: string]: ICommandProcessor } = {};

    public getCommands(): ICommandProcessor[] {
        return Object.values(this.commandsMap);
    }

    public getCommand(command: string): ICommandProcessor {
        return this.commandsMap[command];
    }

    public hasCommand(command: string): boolean {
        return !!this.commandsMap[command];
    }

    public setCommands(commands: ICommandProcessor[]): void {
        commands.forEach((command) => {
            this.commandsMap[command.getName()] = command;
        });
    }

    public execute(command: string): void {
        const parsedCommand = commandParser.parse(command);

        if (!this.hasCommand(parsedCommand.name)) {
            throw new TerminalError(`Command '${parsedCommand.name}' not found.`);
        }

        const commandProcessor = this.getCommand(parsedCommand.name);

        this.validateArguments(commandProcessor, parsedCommand.args);
        this.validateOptions(commandProcessor, parsedCommand.options);

        commandProcessor.process(parsedCommand.args, parsedCommand.options);
    }

    private validateOptions(processor: ICommandProcessor, options: ICommandOptions): void {
        const registeredOptions = processor.getOptions();
        const notRegisteredOptions = Object.keys(options).filter((actualOption) =>
            !registeredOptions.includes(actualOption),
        );

        if (notRegisteredOptions.length) {
            throw new TerminalError(`Options '${notRegisteredOptions.join("','")}' are unknown.`);
        }
    }

    private validateArguments(processor: ICommandProcessor, args: string[]): void {
        const expectedArgumentsCount = processor.getPossibleArgumentsCount();

        if (!expectedArgumentsCount.includes(args.length)) {
            throw new TerminalError(`Expected ${expectedArgumentsCount.join(' or ')} argument(s).`);
        }
    }
}

export default new CommandExecutor();
