angular.module('myRetail')
    .factory('productService', ProductService);

ProductService.$inject = ['$http'];

function ProductService($http) {
    return{
        get : function() {
            return $http({
                url: 'api/products/entry',
                method: 'GET'
            })
        }
    }
}