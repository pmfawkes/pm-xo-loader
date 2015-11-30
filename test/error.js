'use strict';
var test = require('tape');
var webpack = require('webpack');
var assign = require('object-assign');
var conf = require('./utils/conf');

test('xo-loader can return error if file is bad', function (t) {
	webpack(assign({},
		conf,
		{
			entry: './test/fixtures/error.js'
		}
	),
	function (err, stats) {
		if (err) {
			throw err;
		}

		// console.log(stats.compilation.errors);
		t.ok(
			stats.hasErrors(),
			'a file that contains eslint errors should return error'
		);
		t.end();
	});
});
