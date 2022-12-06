
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/EnemyController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '26721eYP7ZHfLJ8r5Z4ojIe', 'EnemyController');
// Scripts/EnemyController.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var MainController_1 = require("./MainController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var EnemyController = /** @class */ (function (_super) {
    __extends(EnemyController, _super);
    function EnemyController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.EnemyPrefab = null;
        _this.mainController = null;
        _this.timer = 0;
        return _this;
    }
    EnemyController.prototype.generateEnemy = function () {
        console.log('generate enemy');
        var enemy = cc.instantiate(this.EnemyPrefab);
        this.node.addChild(enemy);
        enemy.y = 960;
        var minx = -540;
        var maxx = 540;
        enemy.x = minx + Math.random() * (maxx - minx);
    };
    EnemyController.prototype.update = function (dt) {
        if (this.mainController.gameStatus !== MainController_1.GameStatus.Game_Playing) {
            return;
        }
        this.timer += dt;
        if (this.timer > 1) {
            this.generateEnemy();
            this.timer = 0;
        }
    };
    __decorate([
        property(cc.Prefab)
    ], EnemyController.prototype, "EnemyPrefab", void 0);
    __decorate([
        property(MainController_1.default)
    ], EnemyController.prototype, "mainController", void 0);
    EnemyController = __decorate([
        ccclass
    ], EnemyController);
    return EnemyController;
}(cc.Component));
exports.default = EnemyController;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcRW5lbXlDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUFnRTtBQUMxRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQStCQztRQTVCRyxpQkFBVyxHQUFjLElBQUksQ0FBQztRQUc5QixvQkFBYyxHQUFtQixJQUFJLENBQUM7UUFFdEMsV0FBSyxHQUFXLENBQUMsQ0FBQzs7SUF1QnRCLENBQUM7SUFwQkcsdUNBQWEsR0FBYjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM5QixJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNkLElBQUksSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ2hCLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUNmLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsZ0NBQU0sR0FBTixVQUFPLEVBQVU7UUFDYixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxLQUFLLDJCQUFVLENBQUMsWUFBWSxFQUFFO1lBQzVELE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO1FBQ2pCLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDakIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1NBQ2xCO0lBQ0wsQ0FBQztJQTNCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3dEQUNVO0lBRzlCO1FBREMsUUFBUSxDQUFDLHdCQUFjLENBQUM7MkRBQ2E7SUFOckIsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQStCbkM7SUFBRCxzQkFBQztDQS9CRCxBQStCQyxDQS9CNEMsRUFBRSxDQUFDLFNBQVMsR0ErQnhEO2tCQS9Cb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNYWluQ29udHJvbGxlciAsIHsgR2FtZVN0YXR1cyAgfSBmcm9tIFwiLi9NYWluQ29udHJvbGxlclwiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5lbXlDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgRW5lbXlQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KE1haW5Db250cm9sbGVyKVxyXG4gICAgbWFpbkNvbnRyb2xsZXI6IE1haW5Db250cm9sbGVyID0gbnVsbDtcclxuXHJcbiAgICB0aW1lcjogbnVtYmVyID0gMDtcclxuICAgXHJcblxyXG4gICAgZ2VuZXJhdGVFbmVteSgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdnZW5lcmF0ZSBlbmVteScpO1xyXG4gICAgICAgIGxldCBlbmVteSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuRW5lbXlQcmVmYWIpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChlbmVteSk7XHJcbiAgICAgICAgZW5lbXkueSA9IDk2MDtcclxuICAgICAgICB2YXIgbWlueCA9IC01NDA7XHJcbiAgICAgICAgdmFyIG1heHggPSA1NDA7XHJcbiAgICAgICAgZW5lbXkueCA9IG1pbnggKyBNYXRoLnJhbmRvbSgpICogKG1heHggLSBtaW54KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLm1haW5Db250cm9sbGVyLmdhbWVTdGF0dXMgIT09IEdhbWVTdGF0dXMuR2FtZV9QbGF5aW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50aW1lciArPSBkdDtcclxuICAgICAgICBpZiAodGhpcy50aW1lciA+IDEpIHtcclxuICAgICAgICAgICB0aGlzLmdlbmVyYXRlRW5lbXkoKTtcclxuICAgICAgICAgICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19