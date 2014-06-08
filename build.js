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
                'contrib/text',
                'backbone',
                'views/Base',
                'models/Base',
                'collections/Base',
                'routers/Base'
            ]
        }
    ],
    stubModules: [
        'contrib/text'
    ],
    preserveLicenseComments: false,
})
