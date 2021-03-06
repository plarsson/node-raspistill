/// <reference types="node" />
export interface IRaspistillExecutor {
    exec(args: string[]): Promise<Buffer>;
    spawnAndGetImage(args: string[]): Promise<Buffer>;
    spawnAndGetImages(args: string[], cb: (image: Buffer) => any): Promise<void>;
    killProcess(): void;
}
