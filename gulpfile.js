const { series, src, dest, watch, parallel } = require("gulp");
const sass = require("gulp-sass");
const imagemin = require("gulp-imagemin");
const notify = require("gulp-notify");
const webp = require("gulp-webp");

//función que compila sass

function css() {
  return src("src/scss/app.scss")
    .pipe(
      sass({
        outputStyle: "expanded",
      })
    )
    .pipe(dest("./build/css"));
}

function images() {
  return (
    src("src/img/**/*")
      //lee todas las imágenes de todos los formatos de todos los files
      .pipe(imagemin())
      // esta es la función que hemos importado con npm i --save-dev gulp-imagemin
      .pipe(dest("./build/img"))
      .pipe(notify({ message: "Img minified" }))
  );
}

function versionWebp() {
  return (
    src("src/img/**/*")
      //busca otra vez todas las img de la carpeta
      .pipe(webp())
      .pipe(dest("./build/img"))
      .pipe(notify({ message: "version Webp" }))
  );
}

function watchFiles() {
  watch("src/scss/**/*.scss", css);
}
// ** va a leer todas las carpetas dentro de scss
// * va a leer todos los archivos con extensión scss

exports.css = css;
exports.watchFiles = watchFiles;
exports.images = series(images, versionWebp);

exports.default = series(watchFiles);
/**

require: busca e importa Gulp desde node_modules
REQUIRE nos va a traer las dependencias que nosotros queramos.
 */

//función de src indica dónde vamos a encontrar los archivos de sass
