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
            exclude: [
                'common'
            ]
	    },
        {
            name: 'common',
            create: true,
            include: [
                'contrib/almond',
                'backbone',
                'contrib/text'
            ]
        }
    ],
    stubModules: ['contrib/text'],
    preserveLicenseComments: false,
    fileExclusionRegExp: /^\.|debug\.html/
})
