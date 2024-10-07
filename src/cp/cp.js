import { spawn } from "child_process";

const scriptPath = "./src/cp/files/script.js";

export const spawnChildProcess = async (args) => {
    const child = spawn("node", [scriptPath, ...args], {
        stdio: ["pipe", "pipe", "pipe", "ipc"],
    });

    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
    child.stdin.write("CLOSE");
};

// Пример использования
spawnChildProcess(["arg1", "arg2"]);
