import fs from "fs";
import zlib from "zlib";

const archiveToDecompress = "./src/zip/files/archive.gz";
const fileTowrite = "./src/zip/files/fileToCompress.txt";

const decompress = async () => {
    const readStream = fs.createReadStream(archiveToDecompress);
    const writeStream = fs.createWriteStream(fileTowrite);
    const gunzip = zlib.createGunzip();
    readStream.pipe(gunzip).pipe(writeStream);
};

await decompress();
