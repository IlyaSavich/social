import { SignInScript } from '../files/scripts/SignInScript';
import { SignUpScript } from '../files/scripts/SignUpScript';
import { Directory } from '../files/directories/Directory';
import { FileStorage } from './FileStorage';

class AnonymousFileStorage extends FileStorage {
    public initRoot(): Directory {
        return new Directory('', [
            new SignInScript(),
            new SignUpScript(),
        ]);
    }
}

export default new AnonymousFileStorage();
