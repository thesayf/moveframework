app.config(function($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider

        .when('/', {
            templateUrl : 'app/components/home/home-view.html',
            controller  : 'HomeCtrl'
        })

        .when('/dash', {
            templateUrl : 'app/components/dash/dash-view.html',
            controller  : 'DashHomeCtrl',
            action: "dash-home"
        })

        .when('/instant', {
            templateUrl : 'app/components/dash/dash-view.html',
            controller  : 'DashInstantCtrl',
            action: "dash-instant"
        })

        .when('/schedule', {
            templateUrl : 'app/components/dash/dash-view.html',
            controller  : 'DashScheduleCtrl',
            action: "dash-schedule"
        })

        .when('/recurring', {
            templateUrl : 'app/components/dash/dash-view.html',
            controller  : 'DashRecurringCtrl',
            action: "dash-recurring"
        })

        .when('/project', {
            templateUrl : 'app/components/dash/dash-view.html',
            controller  : 'DashProjectCtrl',
            action: "dash-project"
        })

        .when('/address-book', {
            templateUrl : 'app/components/dash/dash-view.html',
            controller  : 'DashAddressBookCtrl',
            action: "dash-addressbook"
        })

        .when('/add-address', {
            templateUrl : 'app/components/dash/dash-view.html',
            controller  : 'DashAddAddressCtrl',
            action: "dash-addaddress"
        })

        .when('/job-complete', {
            templateUrl : 'app/components/dash/dash-view.html',
            controller  : 'DashAddAddressCtrl',
            action: "dash-jobcomplete"
        })

        .when('/payment-details', {
            templateUrl : 'app/components/dash/dash-view.html',
            controller  : 'DashAddAddressCtrl',
            action: "dash-paymentdetails"
        })

        .when('/profile', {
            templateUrl : 'app/components/dash/dash-view.html',
            controller  : 'DashAddAddressCtrl',
            action: "dash-profile"
        })

        .when('/project-job', {
            templateUrl : 'app/components/dash/dash-view.html',
            controller  : 'DashAddAddressCtrl',
            action: "dash-projectjob"
        })

        .when('/saved-quotes', {
            templateUrl : 'app/components/dash/dash-view.html',
            controller  : 'DashAddAddressCtrl',
            action: "dash-savedquotes"
        })

        .when('/pending-jobs', {
            templateUrl : 'app/components/dash/dash-view.html',
            controller  : 'DashAddAddressCtrl',
            action: "dash-pendingjobs"
        })

        .when('/all-messages', {
            templateUrl : 'app/components/dash/dash-view.html',
            controller  : 'DashAddAddressCtrl',
            action: "dash-allmessages"
        })

        .when('/signup', {
            templateUrl : 'app/components/home/signup.html',
            controller  : 'DashSignupCtrl'
            //action: "dash-allmessages"
        })

        .when('/login', {
            templateUrl : 'app/components/home/login.html',
            controller  : 'DashLoginCtrl'
            //action: "dash-allmessages"
        })


        .otherwise({
            redirectTo: '/'
        });


        $locationProvider.html5Mode(true);

});
