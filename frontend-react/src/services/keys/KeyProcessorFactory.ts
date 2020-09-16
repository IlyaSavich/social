import TreeSearcher from '../TreeSearcher';
import { IKeyProcessor, KeyProcessor } from './processors/KeyProcessor';
import { InputKeyProcessor } from './processors/InputKeyProcessor';

const keyProcessorSearcher = new TreeSearcher<IKeyProcessor>({
    node: new KeyProcessor(),
    children: [
        {
            node: new InputKeyProcessor(),
        }
    ],
});

export function getKeyProcessor(e: KeyboardEvent): IKeyProcessor {
    return keyProcessorSearcher.getNode(e);
}
