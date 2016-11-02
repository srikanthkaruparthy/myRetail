angular.module('myRetail')
    .factory('productService', ProductService);
ProductService.$inject = ['$resource'];
function ProductService($resource) {
    return $resource('api/products/entry');
}