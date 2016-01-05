// Ctrl For Home
app.controller('HomeCtrl', function($scope) {

})

// Ctrl For Signup
app.controller('DashSignupCtrl', function($scope) {

})

// Ctrl For Signup
app.controller('DashLoginCtrl', function($scope) {

})

// Ctrl For Dash
app.controller('DashHomeCtrl', function($scope, dash) {
    $scope.dash = dash;
})

// Ctrl For Dash
app.controller('DashInstantCtrl', function($scope, dash, $location, dashInstant, dashVans, dashPorters) {
    $scope.dashInstant = dashInstant;
    $scope.dashVans = dashVans;
    $scope.dashPorters = dashPorters;

    // Set up autocomplete
    $scope.pickup1 = null;
    $scope.dropoff1 = null;
    $scope.pickup2 = null;
    $scope.dropoff2 = null;
    $scope.pickup3 = null;
    $scope.dropoff3 = null;
    $scope.pickup4 = null;
    $scope.dropoff4 = null;
    $scope.autocompleteOptions = {
        componentRestrictions: { country: 'uk' },
        types: ['geocode']
    }

    $scope.chooseVans = function(vanType, $event) {
        $scope.dashInstant.vanType = vanType;
        // Mark Chosen Van Box
        $('.van-choose').removeClass('bord-picked');
        $.each($('.van-choose'), function(i,v) {
            if($(v).attr('data-van') == vanType) {
                $(v).addClass('bord-picked');
            }
        });
    }

    $scope.choosePorters = function(porterQty, $event) {
        $scope.dashInstant.porterQty = porterQty;
        // Mark Chosen Van Box
        $('.porter-qty').removeClass('bord-picked');
        $.each($('.porter-qty'), function(i,v) {
            if($(v).attr('data-porter') == porterQty) {
                $(v).addClass('bord-picked');
            }
        });
        console.log($scope.dashInstant.porterQty);
    }
})

app.controller('DashScheduleCtrl', function($scope, dash, $location, dashInstant) {
    //
})

app.controller('DashRecurringCtrl', function($scope, dash, $location, dashInstant) {
    //
})

app.controller('DashProjectCtrl', function($scope, dash, $location, dashInstant) {
    //
})

app.controller('DashAddressBookCtrl', function($scope, dash, $location, dashInstant) {
    //
})

app.controller('DashAddAddressCtrl', function($scope, dash, $location, dashInstant) {
    //
})

app.controller('DashJobCompleteCtrl', function($scope, dash, $location, dashInstant) {
    //
})

// Ctrl For Navigation
app.controller('NaviCtrl', function($scope, dash, $route) {
    $scope.dash = dash;
    // Grab appRoute.js Action Param
    dash.currentView = $route.current.action;
})
