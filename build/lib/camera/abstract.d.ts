/// <reference types="node" />
import { ICamera, ICameraOptions, IInnerExecCameraOptions } from './interfaces';
export declare abstract class AbstractCamera implements ICamera {
    static readonly DEFAULT_OPTIONS: ICameraOptions;
    protected options: ICameraOptions;
    protected optionsMap: {
        [key: string]: string;
    };
    constructor(options?: ICameraOptions);
    abstract takePhoto(fileName?: string): Promise<Buffer>;
    abstract timelapse(fileName: string, intervalMs: number, execTimeMs: number, cb: (image: Buffer) => any): Promise<void>;
    abstract timelapse(intervalMs: number, execTimeMs: number, cb: (image: Buffer) => any): Promise<void>;
    abstract stop(): void;
    setOptions(options: ICameraOptions): void;
    setDefaultOptions(): void;
    getOption(key: string): any;
    getOptions(): ICameraOptions;
    protected processOptions(newOptions?: IInnerExecCameraOptions): string[];
}
