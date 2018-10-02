import gulp from 'gulp';
import del from 'del';

const mainPath = 'src';
const paths = {
    client: {
        assets: `${mainPath}/assets/`,
    }
};

gulp.task('clean:magentacss', () => del([`${paths.client.assets}/magentacss`]));

gulp.task('copy:magentacss', () => gulp.src('node_modules/magentacss/scss/**/*')
  .pipe(gulp.dest(`${paths.client.assets}/magentacss`)));

gulp.task('copy', gulp.series(['clean:magentacss', 'copy:magentacss']));
