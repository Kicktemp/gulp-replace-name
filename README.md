# gulp-repostfix
To change file name postfix.

## Install

```bash
$ npm install -g gulp-repostfix
```

## Usage

```javascript
var repostfix = require('gulp-repostfix');

gulp.task('default', function() {
  return gulp.src('./mocks/**/*.js')
    .pipe(repostfix({
      newPostFix: 'json'
    }))
    .pipe(gulp.dest('./dist'));
});
```
