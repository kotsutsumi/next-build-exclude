/**
 * index.js
 */
const fs = require("fs");
const path = require('path');
const fse = require('fs-extra');

module.exports = function (nextConfig = {}) {

    const buildExclude = nextConfig.buildExclude || {}
    const exclude = buildExclude.exclude || []
    const evacuationDir = buildExclude.evacuationDir || '.next-build-exclude'

    if (!fs.existsSync(evacuationDir)) {
        console.log("Creating evacuation directory: " + evacuationDir);
        fs.mkdirSync(evacuationDir);
    }

    if (process.env.NODE_ENV != 'development') {
        for (const t of exclude) {

            const evacuationPath = path.join(evacuationDir, t)

            if (fs.existsSync(t)) {
                if (fs.statSync(t).isDirectory()) {
                    if (!fs.existsSync(evacuationPath)) {
                        fse.mkdirpSync(evacuationPath);
                    }

                    if (fs.existsSync(t)) {
                        fs.renameSync(t, evacuationPath);
                    }
                } else {
                    const dirName = path.dirname(t)

                    if (!fs.existsSync(path.join(evacuationDir, dirName))) {
                        fse.mkdirpSync(path.join(evacuationDir, dirName));
                    }

                    if (fs.existsSync(t)) {
                        fs.renameSync(t, path.join(evacuationDir, t));
                    }
                }
            }
        }
    } else {
        for (const t of exclude) {

            const evacuationPath = path.join(evacuationDir, t)

            if (fs.existsSync(evacuationPath)) {
                if (fs.statSync(evacuationPath).isDirectory()) {
                    if (fs.existsSync(evacuationPath)) {
                        fs.renameSync(evacuationPath, t);
                    }
                } else {
                    if (fs.existsSync(evacuationPath)) {
                        fs.renameSync(evacuationPath, t);
                    }
                }
            }
        }
    }

    delete nextConfig.buildExclude

    return nextConfig
};


// EOF