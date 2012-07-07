require.config({
    paths: {
        jquery: '/resources/lib/jquery-1.7.2.min',
        underscore: 'resources/lib/underscore-min',
        backbone: '/resources/lib/backbone-min'
    }
});

require(['jquery', 'underscore', 'backbone'], function ($, _, Backbone) {
    console.log('Libraries loaded ...');
});