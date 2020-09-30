import * as keyService from '../services/keys/KeyService';

export function init() {
    document.addEventListener('keydown', (e: KeyboardEvent) => {
        e.preventDefault();

        keyService.processKey(e);
    });
}
