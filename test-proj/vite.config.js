/** @type {import('vite').UserConfig} */
export default {
    test     : {
        browser : {
            enabled : true,
            name    : 'chrome', // browser name is required
            headless: true,
        },
        include :
            [ 'src/**/*.{test,spec}.?(c|m)[jt]s?(x)'
            ],
        coverage: {
            reporter: ['text', 'json', 'html', 'coverage-svg'],
            provider: 'istanbul',
            include : [ 'src' ]
        }
    },
    publicDir: 'public'
}