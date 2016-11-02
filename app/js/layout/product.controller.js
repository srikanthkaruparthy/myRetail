angular
    .module('myRetail', ['mockApi'])
    .controller('productController', ProductController);

ProductController.$inject = ['$http', '$sce'];

function ProductController($http, $sce) {
    var vm = this;
    vm.quantity = 0;
    $http.get('api/products/entry')
        .success(function (data) {
            vm.title = data["0"].title;
            vm.primaryImage = data["0"].Images["0"].PrimaryImage["0"].image;
            vm.alternateImages = data["0"].Images["0"].AlternateImages;
            vm.offers = data["0"].Offers["0"].OfferPrice["0"];
            vm.features = data["0"].ItemDescription["0"].features;
            vm.promotions = data["0"].Promotions;
            vm.returns = data["0"].ReturnPolicy["0"];
            vm.purchasingChannel = data["0"].purchasingChannelCode;
            vm.trustAsHtml = $sce.trustAsHtml;
            vm.increment = function () {
                vm.quantity++;
            };
            vm.decrement = function () {
                if (vm.quantity > 0) {
                    vm.quantity--;
                }
            };
        })
        .catch(function (error) {

        });
}