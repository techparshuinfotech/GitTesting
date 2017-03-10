angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.search', {
    url: '/search',
    views: {
      'side-menu21': {
        templateUrl: 'templates/search.html',
        controller: 'searchCtrl'
      }
    }
  })

  .state('menu.addFamilyMember', {
    url: '/addFamilyMember',
    views: {
      'side-menu21': {
        templateUrl: 'templates/addFamilyMember.html',
        controller: 'addFamilyMemberCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('gramsabhaDates', {
    url: '/gramsabha',
    templateUrl: 'templates/gramsabhaDates.html',
    controller: 'gramsabhaDatesCtrl'
  })

  .state('askForHelp', {
    url: '/askforHelp',
    templateUrl: 'templates/askForHelp.html',
    controller: 'askForHelpCtrl'
  })

  .state('needBlood', {
    url: '/bloodRequire',
    templateUrl: 'templates/needBlood.html',
    controller: 'needBloodCtrl'
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});