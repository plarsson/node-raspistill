/// <reference types="node" />
export declare type TCameraFileEncoding = 'jpg' | 'bpm' | 'gif' | 'png';
export interface ICameraOptions {
    noFileSave?: boolean;
    verticalFlip?: boolean;
    horizontalFlip?: boolean;
    rotation?: number;
    noPreview?: boolean;
    outputDir?: string;
    fileName?: string;
    encoding?: TCameraFileEncoding;
    width?: number;
    height?: number;
    time?: number;
    iso?: number;
    shutterspeed?: number;
    contrast?: number;
    brightness?: number;
    saturation?: number;
    awb?: string;
    awbg?: string;
}
export interface IInnerExecCameraOptions extends ICameraOptions {
    timelapse?: number;
}
export interface ICamera {
    takePhoto(fileName?: string): Promise<Buffer>;
    timelapse(fileName: string, intervalMs: number, execTimeMs: number, cb: (image: Buffer) => any): Promise<void>;
    timelapse(intervalMs: number, execTimeMs: number, cb: (image: Buffer) => any): Promise<void>;
    stop(): void;
    setOptions(options: ICameraOptions): void;
    setDefaultOptions(): void;
    getOptions(): ICameraOptions;
    getOption(key: string): any;
}
