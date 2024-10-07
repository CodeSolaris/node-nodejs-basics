import fs from "fs/promises";

const srcFolder = "./src/fs/files";
const destFolder = "./src/fs/files_copy";

const copy = async () => {
    try {
        // Check if the source folder exists
        await fs.access(srcFolder);

        try {
            // Check if the destination folder already exists
            await fs.access(destFolder);
            throw new Error("FS operation failed");
        } catch (error) {
            if (error.code === "ENOENT") {
                await fs.cp(srcFolder, destFolder, { recursive: true });
            } else {
                throw error;
            }
        }
    } catch (error) {
        // If the source folder doesn't exist (ENOENT), throw an error
        if (error.code === "ENOENT") {
            throw new Error("FS operation failed");
        } else {
            throw error;
        }
    }
};

await copy();
