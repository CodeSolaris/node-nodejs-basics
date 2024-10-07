import { createReadStream } from "fs";
import { createHash } from "crypto";

const fileToCalculateHash = "./src/hash/files/fileToCalculateHashFor.txt";

export const calculateHash = async () => {
    const fileStream = createReadStream(fileToCalculateHash);
    const hash = createHash("sha256");

    for await (const chunk of fileStream) {
        hash.update(chunk);
    }

    const fileHash = hash.digest("hex");
    console.log(fileHash);
    return fileHash;
};
await calculateHash();
