import gulp from 'gulp';

import { path } from './gulp/config/path.js';

import { plugins } from './gulp/config/plugins.js';

global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins,
};

import { copy } from './gulp/tasks/copy.js';
import { html } from './gulp/tasks/html.js';
import { reset } from './gulp/tasks/reset.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';
import { otfToTtf, ttfToWoff, fontsStyle } from './gulp/tasks/fonts.js';
import { svgSprive } from './gulp/tasks/svgSprive.js';
import { zip } from './gulp/tasks/zip.js';
// import { ftp } from "./gulp/tasks/ftp.js";

function watcher() {
    gulp.watch(path.watch.html, html); // gulp.series(html, ftp)
    gulp.watch(path.watch.scss, scss); // gulp.series(html, scss)
    gulp.watch(path.watch.js, js); // gulp.series(html, js)
    gulp.watch(path.watch.images, images); // gulp.series(html, images)
}

export { svgSprive };

const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);
const mainTask = gulp.series(fonts, gulp.parallel(html, scss, js, images));
const dev = gulp.series(reset, mainTask, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTask);
const deployZIP = gulp.series(reset, mainTask, zip);
// const deployFTP = gulp.series(reset, mainTask, ftp);

export { dev };
export { build };
export { deployZIP };
// export { deployFTP }

gulp.task('default', dev);
