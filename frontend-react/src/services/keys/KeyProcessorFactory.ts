import TreeSearcher from '../TreeSearcher';
import { IKeyProcessor, KeyProcessor } from './processors/KeyProcessor';
import { InputKeyProcessor } from './processors/InputKeyProcessor';
import { SideArrowKeyProcessor } from './processors/SideArrowKeyProcessor';
import { BackspaceKeyProcessor } from './processors/BackspaceKeyProcessor';
import { DeleteKeyProcessor } from './processors/DeleteKeyProcessor';

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
        {
            node: new DeleteKeyProcessor(),
        },
    ],
});

export function getKeyProcessor(e: KeyboardEvent): IKeyProcessor {
    return keyProcessorSearcher.getNode(e);
}
