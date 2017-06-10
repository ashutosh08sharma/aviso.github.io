'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [] );
app.controller('mainCtrl',function($scope){
  $scope.orderByHeader = 'bestCase';
  $scope.reverseSort = false;
  $scope.result = [];
  //JSON DATA
  var data = [{
    'Name' : 'USA',
    'Plan' : '$10,00,000',
    'Forecast' :'$12,700,200',
    'Bestcase' : ['$12,700,200',
    '$11,700,400'],
    'Commit' : ['$12,700,200',
    '$11,700,400'],
    'MonthlyPlan' : '$9,00,000',
    'Comments' : 'Good'
  },{
      'Name' : 'India',
      'Plan' : '$13,00,000',
      'Forecast' :'$14,700,200',
      'Bestcase' : ['$14,700,200',
    '$13,700,400'],
      'Commit' : ['$14,700,200',
    '$13,700,400'],
    'MonthlyPlan' : '$12,00,000',
    'Comments' : 'Excellent'},
    {
      'Name' : 'Germany',
      'Plan' : '$4,00,000',
      'Forecast' :'$6,700,200',
      'Bestcase' : ['$6,700,200',
        '$3,700,400'],
      'Commit' : ['$6,700,200',
        '$3,700,400'],
      'MonthlyPlan' : '$3,00,000',
      'Comments' : 'Average'},
    {
      'Name' : 'Finland',
      'Plan' : '$8,00,000',
      'Forecast' :'$9,700,200',
      'Bestcase' : ['$9,700,200',
        '$7,700,400'],
      'Commit' : ['$9,700,200',
        '$7,700,400'],
      'MonthlyPlan' : '$7,00,000',
      'Comments' : 'Value Plan'},
    {
      'Name' : 'Sweden',
      'Plan' : '$3,00,000',
      'Forecast' :'$2,700,200',
      'Bestcase' : ['$2,700,200',
        '$1,700,400'],
      'Commit' : ['$2,700,200',
        '$1,700,400'],
      'MonthlyPlan' : '$2,00,000',
      'Comments' : 'Average'}
  ];

  $scope.results = data;

});