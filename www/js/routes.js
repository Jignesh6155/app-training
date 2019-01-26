angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('programmingLanguages', {
    url: '/page1',
    templateUrl: 'templates/programmingLanguages.html',
    controller: 'programmingLanguagesCtrl'
  })

  .state('hTML', {
    url: '/page2',
    templateUrl: 'templates/hTML.html',
    controller: 'hTMLCtrl'
  })

  .state('javascript', {
    url: '/page3',
    templateUrl: 'templates/javascript.html',
    controller: 'javascriptCtrl'
  })

  .state('contactPage', {
    url: '/page5',
    templateUrl: 'templates/contactPage.html',
    controller: 'contactPageCtrl'
  })

  .state('welcomePage', {
    url: '/page7',
    templateUrl: 'templates/welcomePage.html',
    controller: 'welcomePageCtrl'
  })

$urlRouterProvider.otherwise('/page7')


});