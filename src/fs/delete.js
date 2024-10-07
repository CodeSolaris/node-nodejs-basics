import fs from "fs/promises";

const fileToRemove = "./src/fs/files/fileToRemove.txt";
const remove = async () => {
    // Write your code here
    try {
        await fs.unlink(fileToRemove);
    } catch (error) {
        if (error.code === "ENOENT") {
            throw new Error("FS operation failed");
        } else {
            throw error;
        }
    }
};

await remove();
