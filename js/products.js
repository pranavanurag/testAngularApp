(function() {
	var app = angular.module('store-directives', []);

	app.directive('productDescription', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/product-description.html'
        };
    });

    app.directive('productSpecs', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/product-specs.html'
        }
    });

    app.directive('productReviews', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/product-reviews.html'
        }
    });

    app.directive('productGallery', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/product-gallery.html',
            controller: function() {
                this.current = 0;

                this.setCurrent = function(imageNumber) {
                    this.current = imageNumber || 0;
                };
            },
            controllerAs: 'gallery'
        };
    });

    app.directive('productTabs', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/product-tabs.html',
            controller: function() {
                this.tab = 1,

                this.setTab = function(activeTab) {
                    this.tab = activeTab;
                };

                this.isSet = function(checkTab) {
                    return checkTab === this.tab;
                };
            },
            controllerAs: 'panel'
        };
    });
})();