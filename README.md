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

As `unpkg.com` reflects the `npm` content, where the coverage usually is not included,
it can be done by publishing either test project with coverage results or the coverage content alone.

The good example would be a [test project](https://github.com/EPA-WG/custom-element-dist)
for `custom-element`.

# [![coverage][coverage-image]][coverage-url] explainer

Often there is a need to generate the coverage not only for essential sources but also for complimentary code
like mocks, StoryBook, etc. That impacts the total stats and do not have the interest to the consumer.
The `coverage-svg` generates the SVG on each module and folder which you can refer individually.
In this case the coverage for [test-proj/coverage/src/package2](test-proj/coverage/src/package2) is published on

https://unpkg.com/coverage-svg@0.0.3
and the generated image is

https://unpkg.com/coverage-svg@0.0.3/test-proj/coverage/src/package2/coverage.svg

# change on release/ npm publish
The `unpkg.com` keeps each version of released package. You would need to update the URLs before release.

[git-url]:        https://github.com/sashafirsov/coverage-svg
[github-image]:   https://cdnjs.cloudflare.com/ajax/libs/octicons/8.5.0/svg/mark-github.svg
[npm-image]:      https://img.shields.io/npm/v/coverage-svg
[npm-url]:        https://npmjs.org/package/coverage-svg
[coverage-image]: https://unpkg.com/coverage-svg@0.0.3/test-proj/coverage/src/package2/coverage.svg
[coverage-url]:   https://unpkg.com/coverage-svg@0.0.3/test-proj/coverage/src/package2/index.html
