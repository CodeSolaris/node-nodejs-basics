import fs from "fs/promises";

const dirToFiles = "./src/fs/files/";
const fileToRename = dirToFiles + "wrongFilename.txt";
const newFileName = dirToFiles + "properFilename.md";

const rename = async () => {
    try {
        await fs.access(fileToRename);
    } catch (error) {
        if (error.code === "ENOENT") {
            throw new Error("FS operation failed");
        } else {
            throw error;
        }
    }

    try {
        await fs.access(newFileName);
        throw new Error("FS operation failed");
    } catch (error) {
        if (error.code === "ENOENT") {
            await fs.rename(fileToRename, newFileName);
        } else {
            throw error;
        }
    }
};

await rename();
