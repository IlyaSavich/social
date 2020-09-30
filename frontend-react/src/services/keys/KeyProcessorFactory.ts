import TreeSearcher from '../TreeSearcher';
import { IKeyProcessor, KeyProcessor } from './processors/KeyProcessor';
import { InputKeyProcessor } from './processors/InputKeyProcessor';
import { SideArrowKeyProcessor } from './processors/SideArrowKeyProcessor';
import { BackspaceKeyProcessor } from './processors/BackspaceKeyProcessor';
import { DeleteKeyProcessor } from './processors/DeleteKeyProcessor';
import { EnterKeyProcessor } from './processors/EnterKeyProcessor';
import { ReloadKeyProcessor } from './processors/ReloadKeyProcessor';
import { ResetKeyProcessor } from './processors/ResetKeyProcessor';

const keyProcessorSearcher = new TreeSearcher<IKeyProcessor>({
    node: new KeyProcessor(),
    children: [
        {
            node: new InputKeyProcessor(),
            children: [
                {
                    node: new ReloadKeyProcessor(),
                },
                {
                    node: new ResetKeyProcessor(),
                },
            ],
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
        {
            node: new EnterKeyProcessor(),
        },
    ],
});

export function getKeyProcessor(e: KeyboardEvent): IKeyProcessor {
    return keyProcessorSearcher.getNode(e);
}
