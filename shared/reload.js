"use strict";

console.info('LiveReload enabled. Watching...');

document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>');