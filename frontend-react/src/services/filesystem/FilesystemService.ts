import { FileStorage } from './storage/FileStorage';
import anonymousFileStorage from './storage/AnonymousFileStorage';
import authorizedFileStorage from './storage/AuthorizedFileStorage';

const isAnonymous = true; // TODO

export function getStorage(): FileStorage {
    return isAnonymous ? anonymousFileStorage : authorizedFileStorage;
}
