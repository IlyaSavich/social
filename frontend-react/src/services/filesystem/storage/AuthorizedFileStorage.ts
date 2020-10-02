import { Directory } from '../files/directories/Directory';
import { FileStorage } from './FileStorage';

class AuthorizedFileStorage extends FileStorage {
    public initRoot(): Directory {
        return new Directory('', [
        ]);
    }
}

export default new AuthorizedFileStorage();
