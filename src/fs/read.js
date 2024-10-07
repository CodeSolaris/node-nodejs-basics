import fs from "fs/promises";

const fileToRead = "./src/fs/files/fileToRead.txt";
const read = async () => {
    // Write your code here
    try {
        const content = await fs.readFile(fileToRead, "utf-8");
        console.log(content);
    } catch (error) {
        throw new Error("FS operation failed");
    }
};

await read();
