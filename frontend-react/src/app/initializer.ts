import * as canvasInitializer from './CanvasInitializer';
import * as inputInitializer from './InputInitializer';
import * as commandInitializer from './CommandInitializer';
import * as textService from '../services/text/TextService';
import * as commandService from '../services/command/CommandService';
import caretRenderer from '../renderer/CaretRenderer';

export function init () {
    canvasInitializer.init();
    inputInitializer.init();
    commandInitializer.init();

    textService.appendText(commandService.pathInfo()); // TODO

    caretRenderer.initTimer();
}
