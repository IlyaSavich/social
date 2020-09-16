import { ITreeSearcherNode } from '../../TreeSearcher';

export interface IKeyProcessor extends ITreeSearcherNode {
    isApplicable(e: KeyboardEvent): boolean;
    process(e: KeyboardEvent): void;
}

export class KeyProcessor implements IKeyProcessor {
    public isApplicable(e: KeyboardEvent) {
        return true;
    }

    public process(e: KeyboardEvent) {
    }
}
