(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var repository = (function () {
    'use strict';

    var products = [{
        id: 1,
        name: 'Final Fantasy XV',
        price: 55.99,
        description: 'Final Fantasy finally makes a come back!',
        category: 'Gaming'
    }, {
        id: 2,
        name: 'Captain America: Civil War',
        price: 19.99,
        description: 'Even more Avengers!',
        category: 'Movies'
    }, {
        id: 3,
        name: 'The Good, The Bad and The Ugly',
        price: 9.99,
        description: 'This timeless classic needs no description.',
        category: 'Movies'
    }, {
        id: 4,
        name: 'J.K. Rowling - Fantastic Beasts and Where to Find Them',
        price: 19.99,
        description: 'Not Harry Potter.',
        category: 'Books'
    }, {
        id: 5,
        name: 'Fantastic Four',
        price: 11.99,
        description: 'Supposedly, a very bad movie.',
        category: 'Movies'
    }];
    
    return {
        getTopProducts: function () {
            return [products[1], products[2], products[3]];
        },
        getProduct: function (id) {
            return products.filter(p => p.id === id)[0];
        },
        search: function (q) {
            if (q == null) {
                return [];
            } else {
                return products.filter(p => p.name.toLowerCase().indexOf(q.toLowerCase()) >= 0);
            }
        }
    };
})();
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzY3JpcHRzL3JlcG9zaXRvcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJ2YXIgcmVwb3NpdG9yeSA9IChmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIHByb2R1Y3RzID0gW3tcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIG5hbWU6ICdGaW5hbCBGYW50YXN5IFhWJyxcbiAgICAgICAgcHJpY2U6IDU1Ljk5LFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0ZpbmFsIEZhbnRhc3kgZmluYWxseSBtYWtlcyBhIGNvbWUgYmFjayEnLFxuICAgICAgICBjYXRlZ29yeTogJ0dhbWluZydcbiAgICB9LCB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBuYW1lOiAnQ2FwdGFpbiBBbWVyaWNhOiBDaXZpbCBXYXInLFxuICAgICAgICBwcmljZTogMTkuOTksXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnRXZlbiBtb3JlIEF2ZW5nZXJzIScsXG4gICAgICAgIGNhdGVnb3J5OiAnTW92aWVzJ1xuICAgIH0sIHtcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIG5hbWU6ICdUaGUgR29vZCwgVGhlIEJhZCBhbmQgVGhlIFVnbHknLFxuICAgICAgICBwcmljZTogOS45OSxcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGlzIHRpbWVsZXNzIGNsYXNzaWMgbmVlZHMgbm8gZGVzY3JpcHRpb24uJyxcbiAgICAgICAgY2F0ZWdvcnk6ICdNb3ZpZXMnXG4gICAgfSwge1xuICAgICAgICBpZDogNCxcbiAgICAgICAgbmFtZTogJ0ouSy4gUm93bGluZyAtIEZhbnRhc3RpYyBCZWFzdHMgYW5kIFdoZXJlIHRvIEZpbmQgVGhlbScsXG4gICAgICAgIHByaWNlOiAxOS45OSxcbiAgICAgICAgZGVzY3JpcHRpb246ICdOb3QgSGFycnkgUG90dGVyLicsXG4gICAgICAgIGNhdGVnb3J5OiAnQm9va3MnXG4gICAgfSwge1xuICAgICAgICBpZDogNSxcbiAgICAgICAgbmFtZTogJ0ZhbnRhc3RpYyBGb3VyJyxcbiAgICAgICAgcHJpY2U6IDExLjk5LFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1N1cHBvc2VkbHksIGEgdmVyeSBiYWQgbW92aWUuJyxcbiAgICAgICAgY2F0ZWdvcnk6ICdNb3ZpZXMnXG4gICAgfV07XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0VG9wUHJvZHVjdHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBbcHJvZHVjdHNbMV0sIHByb2R1Y3RzWzJdLCBwcm9kdWN0c1szXV07XG4gICAgICAgIH0sXG4gICAgICAgIGdldFByb2R1Y3Q6IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb2R1Y3RzLmZpbHRlcihwID0+IHAuaWQgPT09IGlkKVswXTtcbiAgICAgICAgfSxcbiAgICAgICAgc2VhcmNoOiBmdW5jdGlvbiAocSkge1xuICAgICAgICAgICAgaWYgKHEgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2R1Y3RzLmZpbHRlcihwID0+IHAubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YocS50b0xvd2VyQ2FzZSgpKSA+PSAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59KSgpOyJdfQ==
