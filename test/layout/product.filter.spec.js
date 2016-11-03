describe('The test filter', function () {
    'use strict';

    var $filter;

    beforeEach(function () {
        module('myRetail');

        inject(function (_$filter_) {
            $filter = _$filter_;
        });
    });

    it('should change the date format', function () {
        // Arrange.
        var foo = 'Mon Mar 11 13:13:55 UTC 2013', result;

        // Act.
        result = $filter('utcToLocal')(foo, 'longDate');

        // Assert.
        expect(result).toEqual('March 11, 2013');
    });
});