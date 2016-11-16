angular.module('quoteBook').controller('mainCtrl', function($scope, mainServ) {

  $scope.quotes = mainServ.getQuotes();

  $scope.addQuote = function (addText, addAuthor) {
    var newQuote = {
      text : addText,
      author : addAuthor
    }
    mainServ.addQuote(newQuote);
    $scope.addText = '';
    $scope.addAuthor = '';
  }

  $scope.removeQuote = function (index) {
    console.log(index);
    mainServ.removeQuote(index);
  }

})
