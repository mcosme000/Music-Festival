const { series, src, dest, watch } = require("gulp");
const sass = require("gulp-sass");

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

function watchFiles() {
  watch("src/scss/**/*.scss", css);
}
// ** va a leer todas las carpetas dentro de scss
// * va a leer todos los archivos con extensión scss

exports.css = css;
exports.watchFiles = watchFiles;

/**

require: busca e importa Gulp desde node_modules
REQUIRE nos va a traer las dependencias que nosotros queramos. 
 */

//función de src indica dónde vamos a encontrar los archivos de sass
