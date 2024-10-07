import fs from "fs/promises";

const folderToRead = "./src/fs/files";
const list = async () => {
    // Write your code here
    try {
        const files = await fs.readdir(folderToRead);
        console.log(...files);
    } catch (error) {
        throw new Error("FS operation failed");
    }
};

await list();
