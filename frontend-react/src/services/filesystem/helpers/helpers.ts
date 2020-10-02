import { File, FileType } from '../files/File';
import { Directory } from '../files/directories/Directory';
import { Script } from '../files/scripts/Script';

export function isDirectory(file: File): file is Directory {
    return file.is(FileType.Directory);
}

export function isScript(file: File): file is Script {
    return file.is(FileType.Script);
}
