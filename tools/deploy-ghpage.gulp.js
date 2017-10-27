/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   27-10-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 27-10-2017
 */

 var gulp = require('gulp');
 var ghPages = require('gulp-gh-pages');
 const path = require('path');

 var build = path.resolve()+'/www';

 gulp.task('deploy', function() {
   return gulp.src(build+'/**/*')
     .pipe(ghPages());
 });
