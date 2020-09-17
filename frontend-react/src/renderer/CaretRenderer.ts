import canvas from '../services/canvas/Canvas';
import caret from '../services/caret/Caret';
import textConfigs from '../configs/text';
import caretConfigs from '../configs/caret';
import * as commandService from '../services/command/CommandService';
import * as textRenderer from './TextRenderer';

export function render() {
    let shouldBeDrawn = true;

    setInterval(() => {
        if (shouldBeDrawn && caret.isHidden) {
            return;
        }

        canvas.context.save();

        if (shouldBeDrawn) {
            renderCaret();
        } else {
            clearCaret();
        }

        canvas.context.restore();

        shouldBeDrawn = !shouldBeDrawn;
    }, 700);
}

function renderCaret() {
    canvas.context.fillStyle = textConfigs.color;
    const start = { x: caret.x, y: caret.y };
    const size = caretConfigs.size;

    canvas.context.fillRect(start.x, start.y + caretConfigs.yOffset, size.x, -size.y);

    renderBackgroundLetter(textConfigs.backgroundColor);
}

function clearCaret() {
    const start = { x: caret.x - 1, y: caret.y + 1 };
    const size = { x: caretConfigs.size.x + 2, y: caretConfigs.size.y + 2 };

    canvas.context.clearRect(start.x, start.y + caretConfigs.yOffset, size.x, -size.y);

    renderBackgroundLetter(textConfigs.color);
}

function renderBackgroundLetter(color: string) {
    const letter = commandService.getLetterForActiveCommand(caret.textPosition);

    textRenderer.render(letter, caret.x, caret.y, color);
}
