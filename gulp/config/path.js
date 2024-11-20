import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
    build: {
        js: `${buildFolder}/js/`,
        images: `${buildFolder}/images/`,
        fonts: `${buildFolder}/fonts/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
    },
    src: {
        js: `${srcFolder}/assets/js/app.js`,
        images: `${srcFolder}/assets/images/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/assets/images/**/*.svg`,
        scss: `${srcFolder}/assets/scss/style.scss`,
        html: `${srcFolder}/*.html`, //.html
    },
    watch: {
        js: `${srcFolder}/assets/js/**/*.js`,
        images: `${srcFolder}/assets/images/**/*.{jpg,jpeg,png,gif,webp,svg, ico}`,
        scss: `${srcFolder}/assets/scss/**/*.scss`,
        html: `${srcFolder}/**/*.html`, //.html
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    // ftp: ``,
};
