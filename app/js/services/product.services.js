angular.module('myRetail')
    .service('productService', ['$resource', function ($resource) {
        $resource('api/products/entry');
    }])
;