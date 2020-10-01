export interface ICommandProcessor {
    getName(): string;
    getOptions(): string[];
    getDescription(): string;
    getPossibleArgumentsCount(): number[];
    process(args: string[], options: ICommandOptions): void;
}

export interface ICommandOptions {
    [key: string]: string;
}
