import caretRenderer from '../renderer/CaretRenderer'
import * as textService from '../services/text/TextService'
import * as commandService from '../services/command/CommandService'
import canvas from '../services/canvas/Canvas'

const CANVAS_HEIGHT = window.innerHeight;
const CANVAS_WIDTH = 1000;

export function init() {
    canvas.init();

    canvas.canvas.height = CANVAS_HEIGHT;
    canvas.canvas.width = CANVAS_WIDTH;

    textService.appendText(commandService.pathInfo()); // TODO

    caretRenderer.render();
}
