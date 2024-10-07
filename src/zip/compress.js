import fs from "fs";
import zlib from "zlib";

const fileToCompress = "./src/zip/files/fileToCompress.txt";
const archiveName = "./src/zip/files/archive.gz";

const compress = async () => {
    const readStream = fs.createReadStream(fileToCompress);
    const writeStream = fs.createWriteStream(archiveName);
    const gzip = zlib.createGzip();
    readStream.pipe(gzip).pipe(writeStream);
};
await compress();
