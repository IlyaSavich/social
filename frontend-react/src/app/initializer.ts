import * as canvasInitializer from './CanvasInitializer';
import * as inputInitializer from './InputInitializer';
import * as commandInitializer from './CommandInitializer';

export function init () {
    canvasInitializer.init();
    inputInitializer.init();
    commandInitializer.init();
}
