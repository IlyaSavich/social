import canvas from '../services/canvas/Canvas';
import caret from '../services/caret/Caret';
import textConfigs from '../configs/text';
import caretConfigs from '../configs/caret';
import * as commandService from '../services/command/CommandService';
import * as textRenderer from './TextRenderer';

class CaretRenderer {
    public initTimer() {
        let shouldBeDrawn = true;

        setInterval(() => {
            canvas.context.save();

            if (shouldBeDrawn || caret.isForcedShow) {
                this.renderCaret();
            } else {
                this.clearCaret();
            }

            canvas.context.restore();

            shouldBeDrawn = !shouldBeDrawn;
        }, 700);
    }

    public renderCaret() {
        canvas.context.fillStyle = textConfigs.color;
        const start = { x: caret.x, y: caret.y };
        const size = caretConfigs.size;

        canvas.context.fillRect(start.x, start.y + caretConfigs.yOffset, size.x, -size.y);

        this.renderBackgroundLetter(textConfigs.backgroundColor);
    }

    private clearCaret(): void {
        const start = { x: caret.x - 1, y: caret.y + 1 };
        const size = { x: caretConfigs.size.x + 2, y: caretConfigs.size.y + 2 };

        canvas.context.clearRect(start.x, start.y + caretConfigs.yOffset, size.x, -size.y);

        this.renderBackgroundLetter(textConfigs.color);
    }

    private renderBackgroundLetter(color: string): void {
        const letter = commandService.getLetterForActiveCommand(caret.textPositionX);

        textRenderer.render(letter, caret.x, caret.y, color);
    }
}

export default new CaretRenderer();
