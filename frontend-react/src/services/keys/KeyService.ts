import * as keyProcessorFactory from './KeyProcessorFactory';

export function processKey(e: KeyboardEvent) {
    const keyProcessor = keyProcessorFactory.getKeyProcessor(e);

    keyProcessor.process(e);
}
