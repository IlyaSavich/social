import canvas from '../services/Canvas';
import caret from '../services/Caret';
import textConfigs from '../configs/text';
import caretConfigs from '../configs/caret';

const CARET_COLOR = textConfigs.color;
const SIZE = caretConfigs.size;

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
    canvas.context.fillStyle = CARET_COLOR;
    const start = { x: caret.x, y: caret.y };
    const size = SIZE;

    canvas.context.fillRect(start.x, start.y, size.x, -size.y);
}

function clearCaret() {
    const start = { x: caret.x - 1, y: caret.y + 1 };
    const size = { x: SIZE.x + 2, y: SIZE.y + 2 };

    canvas.context.clearRect(start.x, start.y, size.x, -size.y);
}
