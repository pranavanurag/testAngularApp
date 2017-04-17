(function() {
    var app = angular.module('gemStore', ['store-directives']);

    app.controller('StoreController', ['$http', function ($http){
        var store = this;
        store.products = [];
        $http.get('estAngularApp/json/gems.json').then(function successful(response) {
            store.products = response.data;
        });
        console.log(store.products);
    }]);

    app.controller('ReviewController', function() {
        this.review = {};

        this.addReview = function(product){
            product.reviews.push(this.review);
            this.review = {};
        };
    });
})();
