'use strict';

/*
We’re not using Webpack loader resolver because its behavior can be changed by user‘s Webpack config (create-react-app
does that for example). This way we can bypass Webpack resolver and just use Node resolver. Should be used like this:
require('!!../../../loaders/style-loader!../../../loaders/css-loader!codemirror/lib/codemirror.css');
 */

module.exports = require('style-loader');
