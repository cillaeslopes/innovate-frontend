/* eslint-disable @typescript-eslint/no-var-requires */
const sharp = require('sharp')
const imagemin = require('imagemin')
const imageminPngquant = require('imagemin-pngquant')
const imageminMozJpeg = require('imagemin-mozjpeg')
const imageminSvgo = require('imagemin-svgo')
const imageminGifSicle = require('imagemin-gifsicle')

const imageMinOptions = {
    plugins: [
        imageminPngquant(),
        imageminMozJpeg(),
        imageminSvgo(),
        imageminGifSicle(),
    ],
}

/**
 * The responsive-loader webpack doesn't support using other loaders for image optimization with it,
 * so we optimize the images during the resize phase through this adapter.
 * This adapter was based on their default sharp adapter: https://github.com/herrstucki/responsive-loader/blob/e3cf915af312fec7a148cb7d0593e8a1c01bb8f6/src/adapters/sharp.js
 */
const responsiveImagesAdapter = imagePath => {
    const image = sharp(imagePath)

    return {
        metadata: () => image.metadata(),
        resize: async ({ width, mime, options }) => {
            let resized = image.clone().resize(width, null)

            if (options.background) {
                resized = resized.background(options.background).flatten()
            }

            if (mime === 'image/jpeg') {
                resized = resized.jpeg({
                    quality: options.quality,
                })
            }

            const { height } = await resized.metadata()
            const buffer = await resized.toBuffer()

            const data = await imagemin.buffer(buffer, imageMinOptions)

            return {
                data,
                width,
                height,
            }
        },
    }
}

module.exports = responsiveImagesAdapter
