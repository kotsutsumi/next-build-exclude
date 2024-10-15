# next-build-exclude

Exclude the target at build time with Next.js

When `npm run build`, move the excluded target to `.next-build-exclude` and build,
then run `npm run dev` to restore the target from `.next-build-exclude` in reverse order.

## Add package

```bash
npm install @kotsutsumi/next-build-exclude
```

## Usage

```ts
/** @type {import('next').NextConfig} */
import nextBuildExclude from '@kotsutsumi/next-build-exclude'
const nextConfig = {
    buildExclude: {
        // evacuationDir: '.next-build-exclude' // optional

        // exclude target directories or files
        exclude: ['src/app/exclude-page']
    }
}

export default nextBuildExclude(nextConfig)

```
