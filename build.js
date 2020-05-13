const StyleDictionary = require("style-dictionary").extend({
    source: ["src/**/*.json"],
    platforms: {
        scss: {
            transformGroup: "css",
            buildPath: "build/web/",
            files: [
                {
                    destination: "_colors.css",
                    format: "css/variables",
                    filter: {
                        type: "color"
                    }
                },
                {
                    destination: "_typography.css",
                    format: "css/variables",
                    filter: {
                        type: "typography"
                    }
                },
                {
                    destination: "_grids.css",
                    format: "css/variables",
                    filter: {
                        type: "grids"
                    }
                },
                {
                    destination: "_spacers.css",
                    format: "css/variables",
                    filter: {
                        type: "spacers"
                    }
                }
            ]
        }
    }
});

StyleDictionary.buildAllPlatforms();

console.log("done!");
