'use strict';
angular.module('portfolioApp')
  .controller('MainCtrl', function ($scope) {
    $scope.projects = {
      hbo: {
        mainImg: '/images/work.png',
        tools: 'html5, css3, javascript, jQuery',
        images: [ '/images/work.png', '/images/work.png', '/images/work.png' ],
        description: 'This is the description of HBO',
        link: 'http://google.com'
      },
      cmt: {
        mainImg: '/images/work.png',
        tools: 'cmt html5, css3, javascript, jQuery',
        images: [ '/images/work.png', '/images/work.png', '/images/work.png' ],
        description: 'This is the description of CMT',
        link: 'http://cnn.com'
      },
      cox: {
        mainImg: '/images/work.png',
        tools: 'cox html5, css3, javascript, jQuery',
        images: [ '/images/work.png', '/images/work.png', '/images/work.png' ],
        description: 'This is the description of COX',
        link: 'http://cox.com'
      }
    };
  });