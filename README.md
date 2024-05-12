# coverage-svg reporter for istambul provider
Coverage % tag as svg generated for istambul unit test coverage provider.

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

