describe('Testing productService', function() {
    var productService, $httpBackend;

    beforeEach(module('myRetail'));

    beforeEach(inject(function(_productService_, _$httpBackend_) {
        productService = _productService_;
        $httpBackend = _$httpBackend_;
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingRequest();
        $httpBackend.verifyNoOutstandingExpectation();
    });

    it('It should get a response', function () {
        $httpBackend.whenGET('api/products/entry').respond({ id: 123 });
        productService.get()
            .then(function(response) {
                expect(response).toBe({ id: 123 });
        });
    });
});