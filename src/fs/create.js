import fs from "fs/promises";

const filePath = "./src/fs/files/fresh.txt";
const fileContent = "I am fresh and young";

const create = async () => {
    try {
        await fs.access(filePath);
        throw new Error("FS operation failed");
    } catch (error) {
        if (error.code === "ENOENT") {
            await fs.writeFile(filePath, fileContent);
        } else {
            throw error;
        }
    }
};

await create();
