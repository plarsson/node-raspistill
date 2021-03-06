/// <reference types="node" />
import { ICamera, ICameraOptions } from './interfaces';
import { AbstractCamera } from './abstract';
import { IWatcher } from '../watcher/interfaces';
import { IRaspistillExecutor } from '../executor/interfaces';
export declare class DefaultCamera extends AbstractCamera implements ICamera {
    protected watcher: IWatcher;
    protected executor: IRaspistillExecutor;
    constructor(options?: ICameraOptions, watcher?: IWatcher, executor?: IRaspistillExecutor);
    timelapse(fileName: string, intervalMs: number, execTimeMs: number, cb: (image: Buffer) => any): Promise<void>;
    timelapse(intervalMs: number, execTimeMs: number, cb: (image: Buffer) => any): Promise<void>;
    takePhoto(fileName?: string): Promise<Buffer>;
    stop(): void;
    private processError(error);
}
