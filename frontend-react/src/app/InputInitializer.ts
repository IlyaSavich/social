import * as keyService from '../services/keys/KeyService';

export function init() {
    document.addEventListener('keydown', (e: KeyboardEvent) => {
        keyService.processKey(e);
        console.log(e);
    });
}
