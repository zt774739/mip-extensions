/**
 * @file mip-ajax 组件
 * @author
 */

define(function (require) {
    'use strict';

    var customElement = require('customElement').create();
	
    /**
     * 第一次进入可视区回调，只会执行一次
     */
    customElement.prototype.firstInviewCallback = function () {
		console.log('呵呵');
        // TODO
    };

    return customElement;
});
