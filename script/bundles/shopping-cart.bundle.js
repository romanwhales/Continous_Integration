(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
angular.module('shopApp', [])
    .controller('shoppingCartController', function ($scope) {
        var Line = function (options) {
            this.product = options.product,
            this.number = options.number
        };
        Line.prototype.subTotal = function () {
            return +(this.product.price * this.number).toFixed(2);
        }
        
        $scope.lines = [new Line({
            product: repository.getProduct(1),
            number: 1
        }), new Line({
            product: repository.getProduct(3),
            number: 2
        })];
        
        $scope.total = function () {
            var sum = 0;
            $scope.lines.forEach(function (l) {
                sum += +l.subTotal();
            });
            return +sum.toFixed(2);
        };
        
        $scope.removeLine = function (line) {
            $scope.lines.splice($scope.lines.indexOf(line), 1);
        }
    });
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzY3JpcHRzL3Nob3BwaW5nLWNhcnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJhbmd1bGFyLm1vZHVsZSgnc2hvcEFwcCcsIFtdKVxuICAgIC5jb250cm9sbGVyKCdzaG9wcGluZ0NhcnRDb250cm9sbGVyJywgZnVuY3Rpb24gKCRzY29wZSkge1xuICAgICAgICB2YXIgTGluZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3QgPSBvcHRpb25zLnByb2R1Y3QsXG4gICAgICAgICAgICB0aGlzLm51bWJlciA9IG9wdGlvbnMubnVtYmVyXG4gICAgICAgIH07XG4gICAgICAgIExpbmUucHJvdG90eXBlLnN1YlRvdGFsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICsodGhpcy5wcm9kdWN0LnByaWNlICogdGhpcy5udW1iZXIpLnRvRml4ZWQoMik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICRzY29wZS5saW5lcyA9IFtuZXcgTGluZSh7XG4gICAgICAgICAgICBwcm9kdWN0OiByZXBvc2l0b3J5LmdldFByb2R1Y3QoMSksXG4gICAgICAgICAgICBudW1iZXI6IDFcbiAgICAgICAgfSksIG5ldyBMaW5lKHtcbiAgICAgICAgICAgIHByb2R1Y3Q6IHJlcG9zaXRvcnkuZ2V0UHJvZHVjdCgzKSxcbiAgICAgICAgICAgIG51bWJlcjogMlxuICAgICAgICB9KV07XG4gICAgICAgIFxuICAgICAgICAkc2NvcGUudG90YWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc3VtID0gMDtcbiAgICAgICAgICAgICRzY29wZS5saW5lcy5mb3JFYWNoKGZ1bmN0aW9uIChsKSB7XG4gICAgICAgICAgICAgICAgc3VtICs9ICtsLnN1YlRvdGFsKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiArc3VtLnRvRml4ZWQoMik7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICAkc2NvcGUucmVtb3ZlTGluZSA9IGZ1bmN0aW9uIChsaW5lKSB7XG4gICAgICAgICAgICAkc2NvcGUubGluZXMuc3BsaWNlKCRzY29wZS5saW5lcy5pbmRleE9mKGxpbmUpLCAxKTtcbiAgICAgICAgfVxuICAgIH0pOyJdfQ==
