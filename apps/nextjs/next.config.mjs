/** @type {import('next').NextConfig} */
import nextBuildExclude from 'next-build-exclude'
const nextConfig = {
    buildExclude: {
        // evacuationDir: '.next-build-exclude' // optional

        // exclude target directories or files
        exclude: ['src/app/exclude-page']
    }
}

export default nextBuildExclude(nextConfig)
