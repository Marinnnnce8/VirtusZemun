const gulp = require('gulp');
const	tap = require('gulp-tap');
const	path = require('path');
const	fs = require('fs');
const	runSequence = require('run-sequence');
const	globalVars = require('./_global-vars');
const imagemin = require("gulp-imagemin");

/*----------------------------------------------------------------------------------------------
	Assets Files
 ----------------------------------------------------------------------------------------------*/
gulp.task('assets', function() {
	runSequence('assets-img','assets-fonts');
});

// copy fonts
gulp.task('assets-fonts', function() {
	const distAssetsPath = 'dist/assets/fonts';
	const srcAssetsPath = 'src/assets/fonts';
	const distAssets = fs.existsSync(distAssetsPath) ? fs.readdirSync(distAssetsPath) : [];

	if (!fs.existsSync('dist/assets/fonts')) {
		fs.mkdirSync('./dist/assets/fonts');
	}

	if (fs.existsSync(srcAssetsPath)) {
		fs.readdirSync(srcAssetsPath).forEach(cur => {
			if (!distAssets.includes(cur)) {
				fs.copyFileSync(`${srcAssetsPath}/${cur}`, `${distAssetsPath}/${cur}`);
			}
		});
	}
});

// prepare images
gulp.task("assets-img", function(){
	gulp.src('src/assets/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/assets/images'))
});