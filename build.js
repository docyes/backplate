({
    appDir: 'src',
    baseUrl: 'js',
    dir: './build',
    optimize: 'uglify',
    mainConfigFile: 'src/js/require.config.js',
    removeCombined: true,
    modules: [
        {
            name: 'main',
            include: ['contrib/almond'],
	}
    ],
    stubModules: ['contrib/text'],
    wrap: true,
    preserveLicenseComments: false,
    fileExclusionRegExp: /^\.|debug\.html/
})
