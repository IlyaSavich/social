import TreeSearcher from '../TreeSearcher';
import { IKeyProcessor, KeyProcessor } from './processors/KeyProcessor';
import { InputKeyProcessor } from './processors/InputKeyProcessor';
import { SideArrowKeyProcessor } from './processors/SideArrowKeyProcessor';
import { BackspaceKeyProcessor } from './processors/BackspaceKeyProcessor';

const keyProcessorSearcher = new TreeSearcher<IKeyProcessor>({
    node: new KeyProcessor(),
    children: [
        {
            node: new InputKeyProcessor(),
        },
        {
            node: new SideArrowKeyProcessor(),
        },
        {
            node: new BackspaceKeyProcessor(),
        },
    ],
});

export function getKeyProcessor(e: KeyboardEvent): IKeyProcessor {
    return keyProcessorSearcher.getNode(e);
}
