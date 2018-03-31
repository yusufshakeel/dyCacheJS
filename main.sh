# create a copy of dyCache.js and dyCache.min.js for testing
cp ./src/js/dyCache.js ./src/js/dyCache.forTest.js
cp ./dist/js/dyCache.min.js ./src/js/dyCache.forTest.min.js

# append module.exports line
cat <<EOT >> ./src/js/dyCache.forTest.js

module.exports = dyCache;
EOT

cat <<EOT >> ./src/js/dyCache.forTest.min.js

module.exports = dyCache;
EOT