/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins')
const withFonts = require('next-fonts')
const optimizedImages = require('next-optimized-images')
const responsiveImagesAdapter = require('./config/responsiveImagesAdapter')

module.exports = withPlugins([
    [withFonts],
    [
        optimizedImages,
        {
            optimizeImagesInDev: true,
            responsive: {
                steps: 3,
                adapter: responsiveImagesAdapter,
            },
        },
    ],
])
