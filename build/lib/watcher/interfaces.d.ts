/// <reference types="node" />
export interface IWatcherOptions {
    expireTime?: number;
}
export interface IWatcher {
    watchAndGetFile(filePath: string): Promise<Buffer | null>;
    watchAndGetFiles(dirPath: string, watchTimeMs: number, cb: (file: Buffer) => any): Promise<void>;
    closeWatcher(): void;
    setOptions(options: IWatcherOptions): void;
    getOptions(): IWatcherOptions;
    getOption(key: string): any;
}
