var app=angular.module('myRetail',['mockApi']);

app.controller('myController',function($scope,$http,$sce){
    $http.get('api/products/entry')
        .success(function(data){
            $scope.title =  data["0"].title;
            $scope.primaryImage = data["0"].Images["0"].PrimaryImage["0"].image;
            $scope.alternateImages = data["0"].Images["0"].AlternateImages;
            $scope.offers = data["0"].Offers["0"].OfferPrice["0"];
            $scope.features = data["0"].ItemDescription["0"].features;
            $scope.promotions = data["0"].Promotions;
            $scope.returns = data["0"].ReturnPolicy["0"];
            $scope.purchasingChannel = data["0"].purchasingChannelCode;
            $scope.trustAsHtml = $sce.trustAsHtml;
        });
});