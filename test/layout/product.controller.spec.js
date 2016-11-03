'use strict';

describe('productController', function() {
    var vm,sce;
    beforeEach(module('myRetail'));

    beforeEach(function () {
        inject(function($injector,$sce) {
            vm = $injector.get('$controller')('productController', {});
            sce = $sce;
        });
    });

    it('should have vm defined', function() {
        expect(vm).toBeDefined();
        expect(vm.quantity).toEqual(0);
    });

    it('should increase the quantity by 1',function(){
        var original=vm.quantity;
        expect(vm.increment).toBeDefined();
        vm.increment();
        expect(vm.quantity).toBe(original+1);
    });

    it('should decrease the quantity by 1',function(){
        var original=vm.quantity+1;
        expect(vm.decrement).toBeDefined();
        vm.decrement();
        expect(vm.quantity).toBe(original-1);
    });

    it('should have trustAsHtml defined', function() {
        expect(vm.trustAsHtml).toBeDefined();
        expect(vm.trustAsHtml).toEqual(sce.trustAsHtml);
    });
});