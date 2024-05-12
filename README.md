# coverage-svg reporter for istambul provider
Coverage % tag as svg generated for istambul unit test coverage provider.
[![git][github-image] GitHub][git-url]
[![NPM version][npm-image]][npm-url]
[![coverage][coverage-image]][coverage-url]

This reporter generates the `coverage.svg` file in directories next to index.html with least % from
* Statement
* Branch
* Functions
* Lines

# vitest config sample
```js
export default {
    test: {
        coverage: {
            reporter: ['text', 'json', 'html','coverage-svg'],
            provider: 'istanbul'
        }
    }
}
```

# Use in README.md
The SVG should be available either in the repo or on CDN in order to be shown in GitHub page.

[git-url]:        https://github.com/sashafirsov/coverage-svg
[github-image]:   https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/mark-github.svg
[npm-image]:      https://img.shields.io/npm/v/coverage-svg
[npm-url]:        https://npmjs.org/package/coverage-svg
[coverage-image]: https://unpkg.com/sashafirsov/coverage-svg@0.0.2/coverage/src/package1/coverage.svg
[coverage-url]:   https://unpkg.com/sashafirsov/coverage-svg@0.0.2/coverage/src/package1/index.html
