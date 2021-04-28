const { series, src, dest, watch, parallel } = require("gulp");
const sass = require("gulp-sass");
const imagemin = require("gulp-imagemin");
const notify = require("gulp-notify");
const webp = require("gulp-webp");
const concat = require("gulp-concat");

//función que compila sass

const paths = {
  img: "src/img/**/*",
  scss: "src/scss/**/*.scss",
  javascript: "src/js/**/*.js",
};

// **Va a leer todas las carpetas dentro de scss
// * va a leer todos los archivos con extensión scss

function css() {
  return src("src/scss/app.scss")
    .pipe(
      sass({
        outputStyle: "expanded",
      })
    )
    .pipe(dest("./build/css"));
}

function javascript() {
  return (
    src(paths.javascript)
      .pipe(concat("bundle.js"))
      //el nombre del archivo principal se llama bundle.js??
      .pipe(dest("./build/js"))
  );
}

function images() {
  return (
    src(paths.img)
      //lee todas las imágenes de todos los formatos de todos los files
      .pipe(imagemin())
      // esta es la función que hemos importado con npm i --save-dev gulp-imagemin
      .pipe(dest("./build/img"))
      .pipe(notify({ message: "Img minified" }))
  );
}

function versionWebp() {
  return (
    src(paths.img)
      //busca otra vez todas las img de la carpeta
      .pipe(webp())
      .pipe(dest("./build/img"))
      .pipe(notify({ message: "version Webp" }))
  );
}

function watchFiles() {
  watch(paths.scss, css);
  watch(paths.javascript, javascript);
}
// watchFiles:
// cada vez que hay cambios en las carpetas scss y javascript,
// va a ejecutar las funciones css y javascript.

exports.css = css;
exports.images = series(images, versionWebp);
exports.javascript = javascript;

exports.default = series(watchFiles);

/**
require: busca e importa Gulp desde node_modules
REQUIRE nos va a traer las dependencias que nosotros queramos.
 */
