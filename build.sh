rm -r -f build
mkdir build

# move pages
buildId=$(cat dist/BUILD_ID)
mkdir build/${buildId}
mv dist/bundles/pages/* build/${buildId}
rm -r dist/bundles

# move app.js
appHash=$(cat dist/build-stats.json)
appHash=${appHash#*hash\":\"}
appHash=${appHash%\"*}
mv dist/app.js build/app.${appHash}.js