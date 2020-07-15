/* eslint-disable @typescript-eslint/no-explicit-any */

type ImageInfo = {
    path: string
    width: number
    height: number
}

type ImageAsset = {
    images: Array<ImageInfo>
    placeholder?: string
    src: string
    srcSet?: string
    width: number
    height: number
    toString(): string
}

declare module '*.png' {
    const value: ImageAsset
    export = value
}

declare module '*.jpg' {
    const value: ImageAsset
    export = value
}

declare module '*.svg' {
    const value: ImageAsset
    export = value
}

declare module '*.gif' {
    const value: ImageAsset
    export = value
}

declare module '*&ts-asset' {
    const value: ImageAsset
    export = value
}

declare module '*.ttf' {
    const value: any
    export default value
}

declare module '*.otf' {
    const value: any
    export default value
}
