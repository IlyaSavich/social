import { ICommandOptions } from './processors/CommandProcessor';
import { TerminalError } from '../../errors/TerminalError';

export interface IParsedCommand {
    name: string;
    args: string[];
    options: ICommandOptions;
}

export function parse(command: string): IParsedCommand {
    const words = command.split(' ').filter(Boolean);
    const name = words.shift();

    if (!name) {
        throw new TerminalError(`Invalid command '${name}'`);
    }

    const [args, options] = words.reduce((acc, word) => {
        if (word.startsWith('-')) {
            const parsedOption = parseOption(word);

            return [acc[0], { ...acc[1], ...parsedOption }];
        }

        return [[...acc[0], word], acc[1]];
    }, [[], {}] as [string[], ICommandOptions]);

    return { name, args, options };
}

function parseOption(option: string): ICommandOptions {
    const match = option.match(/-([a-zA-Z0-9]+)=([a-zA-Z0-9]+)/)!;

    if (!match[1]) {
        throw new TerminalError(`Invalid option name '${match[1]}'`);
    }

    if (!match[2]) {
        throw new TerminalError(`Invalid option value '${match[2]}'`);
    }

    return { [match[1]]: match[2] };
}
