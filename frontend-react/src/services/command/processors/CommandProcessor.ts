export interface ICommandProcessor {
    getCommandName(): string;
    getDescription(): string;
    process(): void;
}
