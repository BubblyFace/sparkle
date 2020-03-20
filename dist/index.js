(function () {
    'use strict';

    var EventBus = /** @class */ (function () {
        function EventBus() {
        }
        EventBus.prototype.register = function (dom, type) {
            console.log(dom, type);
        };
        EventBus.prototype.unregister = function (dom, type) {
            console.log(dom, type);
        };
        EventBus.prototype.registerList = function (nodeList, type) {
            var _this = this;
            nodeList.forEach(function (element) {
                _this.register(element, type);
            });
        };
        EventBus.prototype.unregisterList = function (nodeList, type) {
            var _this = this;
            nodeList.forEach(function (element) {
                _this.unregister(element, type);
            });
        };
        return EventBus;
    }());
    //# sourceMappingURL=event-bus.js.map

    function domObserver(bus) {
        var observer = new MutationObserver(domChangeHandler);
        return observer;
        function domChangeHandler(mutationsList) {
            for (var _i = 0, mutationsList_1 = mutationsList; _i < mutationsList_1.length; _i++) {
                var mutation = mutationsList_1[_i];
                if (mutation.type == 'childList') {
                    var addedNodes = mutation.addedNodes, removedNodes = mutation.removedNodes;
                    addedNodes && addedNodes.length > 0 && bus.registerList(addedNodes, 'transitionend');
                    removedNodes && removedNodes.length > 0 && bus.unregisterList(removedNodes, 'transitionend');
                }
            }
        }
    }
    //# sourceMappingURL=dom-observer.js.map

    var Roulette = /** @class */ (function () {
        function Roulette() {
            this.status = '';
        }
        Roulette.prototype.transitionHanlder = function () {
        };
        Roulette.prototype.create = function () {
            var container = document.createElement('div');
            var numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            container.className = 'roulette-container';
            numberArray.forEach(function (number) {
                var numDom = document.createElement('div');
                numDom.innerText = String(number);
                container.appendChild(numDom);
            });
            return container;
        };
        return Roulette;
    }());

    var Sparkle = /** @class */ (function () {
        function Sparkle(root) {
            this.bus = new EventBus();
            this.observer = domObserver(this.bus);
            this.root = root;
            var observeConfig = {
                subtree: true,
                childList: true
            };
            this.observer.observe(root, observeConfig);
        }
        Sparkle.prototype.create = function (type, parent) {
            if (parent === void 0) { parent = this.root; }
            var model = new Roulette();
            var aDom = model.create();
            parent.appendChild(aDom);
        };
        return Sparkle;
    }());
    //# sourceMappingURL=Sparkle.js.map

    var root = document.getElementById('root');
    var sparkle = new Sparkle(root);
    (function (window) {
        window.sparkle = sparkle;
    })(window);
    // export default sparkle 
    //# sourceMappingURL=index.js.map

}());
//# sourceMappingURL=index.js.map
