angular
    .module('myRetail', ['mockApi', 'ngAria'])
    .controller('productController', ProductController)
    .filter('utcToLocal', utcToLocal)
    .directive('starDirective', StarDirective);

ProductController.$inject = ['$sce', 'productService'];

function ProductController($sce, productService) {
    var vm = this;
    vm.quantity = 0;
    vm.increment = function () {
        vm.quantity++;
    };
    vm.decrement = function () {
        if (vm.quantity > 0) {
            vm.quantity--;
        }
    };
    vm.trustAsHtml = $sce.trustAsHtml;
    productService.get()
        .success(function (data) {
            vm.title = data["0"].title;
            vm.primaryImage = data["0"].Images["0"].PrimaryImage["0"].image;
            vm.alternateImages = data["0"].Images["0"].AlternateImages;
            vm.offers = data["0"].Offers["0"].OfferPrice["0"];
            vm.features = data["0"].ItemDescription["0"].features;
            vm.promotions = data["0"].Promotions;
            vm.returns = data["0"].ReturnPolicy["0"];
            vm.purchasingChannel = data["0"].purchasingChannelCode;
            vm.reviews = data[0].CustomerReview;
        })
        .catch(function (error) {

        });
}

function utcToLocal($filter) {
    return function (utcDateString) {
        if (!utcDateString) {
            return;
        }
        var newDate = new Date(utcDateString);
        return $filter('date')(newDate, 'longDate');
    };
}

function StarDirective() {
    return {
        restrict: 'A',
        template: '<ul class="rating">' +
        '<li ng-repeat="star in stars" ng-class="star">' +
        '\u2605' +
        '</li>' +
        '</ul>',
        scope: {
            rating: '=ngModel',
            max: '='
        },
        link: function (scope, elem, attrs) {
            scope.stars = [];
            for (var i = 0; i < scope.max; i++) {
                scope.stars.push({
                    filled: i < scope.rating
                });
            }
        }
    }
}