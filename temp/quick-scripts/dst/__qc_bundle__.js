
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Scripts/Bullet');
require('./assets/Scripts/BulletController');
require('./assets/Scripts/Enemy');
require('./assets/Scripts/EnemyController');
require('./assets/Scripts/MainController');
require('./assets/Scripts/PlayerController');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Enemy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5dbecpAzIFDW45/BeBSJZ3z', 'Enemy');
// Scripts/Enemy.ts

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
// enum MoveState {
//     MovingLeft = 0,
//     MovingRight = 1,
// }
var Enemy = /** @class */ (function (_super) {
    __extends(Enemy, _super);
    function Enemy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = -5;
        _this.speedX = -10;
        return _this;
    }
    // state: MoveState = MoveState.MovingLeft;
    Enemy.prototype.onLoad = function () {
        this.mainController = cc.Canvas.instance.node.getComponent("MainController");
        this.speed = MainController_1.SPEED + Math.random() * MainController_1.SPEED;
    };
    Enemy.prototype.update = function (dt) {
        if (this.mainController.gameStatus !== MainController_1.GameStatus.Game_Playing) {
            return;
        }
        this.node.y += this.speed;
        if (this.node.x > 540 || this.node.x < -540) {
            this.speedX = -this.speedX;
        }
        this.node.x += this.speedX;
    };
    //this.node.x += this.speed;
    // if (this.node.x < -540) {
    // //     // this.node.x -= this.speed;
    // //     this.state = MoveState.MovingRight;
    // // }
    // switch(this.state){
    //     case MoveState.MovingLeft:
    //     this.node.x += this.speed;
    //     break;
    // // case MoveState.MovingRight:
    // //     this.node.x -= this.speed;
    //     // }
    // // if (this.node.x > 540) {
    // //  // this.node.x -= this.speed;
    // //     this.state = MoveState.MovingRight;
    // //     }
    // //     switch(this.state){
    // // case MoveState.MovingLeft:
    // //     this.node.x += this.speed;
    // //   if  (this.node.x > 540){
    // //     case MoveState.MovingLeft:
    // //     this.node.x += this.speed;
    // //     break;}
    // }}
    Enemy.prototype.onCollisionEnter = function (other, self) {
        if (other.tag === 1) {
            this.mainController.addScore();
            this.node.destroy();
            // this.mainController.scoreHigh();
        }
    };
    Enemy = __decorate([
        ccclass
    ], Enemy);
    return Enemy;
}(cc.Component));
exports.default = Enemy;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcRW5lbXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQXFFO0FBRS9ELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLG1CQUFtQjtBQUNuQixzQkFBc0I7QUFDdEIsdUJBQXVCO0FBQ3ZCLElBQUk7QUFFSjtJQUFtQyx5QkFBWTtJQUEvQztRQUFBLHFFQTBEQztRQXZERyxXQUFLLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDbEIsWUFBTSxHQUFTLENBQUMsRUFBRSxDQUFDOztJQXNEeEIsQ0FBQztJQXBERywyQ0FBMkM7SUFDM0Msc0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxLQUFLLEdBQUcsc0JBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsc0JBQUssQ0FBQztJQUMvQyxDQUFDO0lBRUQsc0JBQU0sR0FBTixVQUFPLEVBQVU7UUFDYixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxLQUFLLDJCQUFVLENBQUMsWUFBWSxFQUFFO1lBQzVELE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFMUIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7WUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDOUI7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQy9CLENBQUM7SUFDRyw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLHVDQUF1QztJQUN2Qyw2Q0FBNkM7SUFDN0MsT0FBTztJQUNQLHNCQUFzQjtJQUN0QixpQ0FBaUM7SUFDakMsaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYixpQ0FBaUM7SUFDakMsb0NBQW9DO0lBQ3BDLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsb0NBQW9DO0lBQ3BDLDZDQUE2QztJQUM3QyxXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLGdDQUFnQztJQUNoQyxvQ0FBb0M7SUFDcEMsZ0NBQWdDO0lBQ2hDLG9DQUFvQztJQUNwQyxvQ0FBb0M7SUFDcEMsaUJBQWlCO0lBQ2pCLEtBQUs7SUFLVCxnQ0FBZ0IsR0FBaEIsVUFBaUIsS0FBa0IsRUFBRSxJQUFpQjtRQUNsRCxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNwQixtQ0FBbUM7U0FDdEM7SUFDTCxDQUFDO0lBekRnQixLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBMER6QjtJQUFELFlBQUM7Q0ExREQsQUEwREMsQ0ExRGtDLEVBQUUsQ0FBQyxTQUFTLEdBMEQ5QztrQkExRG9CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWFpbkNvbnRyb2xsZXIsIHsgR2FtZVN0YXR1cywgU1BFRUQgfSBmcm9tIFwiLi9NYWluQ29udHJvbGxlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuLy8gZW51bSBNb3ZlU3RhdGUge1xyXG4vLyAgICAgTW92aW5nTGVmdCA9IDAsXHJcbi8vICAgICBNb3ZpbmdSaWdodCA9IDEsXHJcbi8vIH1cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5lbXkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuXHJcbiAgICBzcGVlZDogbnVtYmVyID0gLTU7XHJcbiAgICAgc3BlZWRYOm51bWJlciA9LTEwO1xyXG4gICAgbWFpbkNvbnRyb2xsZXI6IE1haW5Db250cm9sbGVyO1xyXG4gICAgLy8gc3RhdGU6IE1vdmVTdGF0ZSA9IE1vdmVTdGF0ZS5Nb3ZpbmdMZWZ0O1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMubWFpbkNvbnRyb2xsZXIgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZS5nZXRDb21wb25lbnQoXCJNYWluQ29udHJvbGxlclwiKTtcclxuICAgICAgICB0aGlzLnNwZWVkID0gU1BFRUQgKyBNYXRoLnJhbmRvbSgpICogU1BFRUQ7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5tYWluQ29udHJvbGxlci5nYW1lU3RhdHVzICE9PSBHYW1lU3RhdHVzLkdhbWVfUGxheWluZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubm9kZS55ICs9IHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS54ID4gNTQwIHx8IHRoaXMubm9kZS54IDwgLTU0MCkge1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVkWCA9IC10aGlzLnNwZWVkWDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy5zcGVlZFg7XHJcbiAgICB9XHJcbiAgICAgICAgLy90aGlzLm5vZGUueCArPSB0aGlzLnNwZWVkO1xyXG4gICAgICAgIC8vIGlmICh0aGlzLm5vZGUueCA8IC01NDApIHtcclxuICAgICAgICAvLyAvLyAgICAgLy8gdGhpcy5ub2RlLnggLT0gdGhpcy5zcGVlZDtcclxuICAgICAgICAvLyAvLyAgICAgdGhpcy5zdGF0ZSA9IE1vdmVTdGF0ZS5Nb3ZpbmdSaWdodDtcclxuICAgICAgICAvLyAvLyB9XHJcbiAgICAgICAgLy8gc3dpdGNoKHRoaXMuc3RhdGUpe1xyXG4gICAgICAgIC8vICAgICBjYXNlIE1vdmVTdGF0ZS5Nb3ZpbmdMZWZ0OlxyXG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUueCArPSB0aGlzLnNwZWVkO1xyXG4gICAgICAgIC8vICAgICBicmVhaztcclxuICAgICAgICAvLyAvLyBjYXNlIE1vdmVTdGF0ZS5Nb3ZpbmdSaWdodDpcclxuICAgICAgICAvLyAvLyAgICAgdGhpcy5ub2RlLnggLT0gdGhpcy5zcGVlZDtcclxuICAgICAgICAvLyAgICAgLy8gfVxyXG4gICAgICAgIC8vIC8vIGlmICh0aGlzLm5vZGUueCA+IDU0MCkge1xyXG4gICAgICAgIC8vIC8vICAvLyB0aGlzLm5vZGUueCAtPSB0aGlzLnNwZWVkO1xyXG4gICAgICAgIC8vIC8vICAgICB0aGlzLnN0YXRlID0gTW92ZVN0YXRlLk1vdmluZ1JpZ2h0O1xyXG4gICAgICAgIC8vIC8vICAgICB9XHJcbiAgICAgICAgLy8gLy8gICAgIHN3aXRjaCh0aGlzLnN0YXRlKXtcclxuICAgICAgICAvLyAvLyBjYXNlIE1vdmVTdGF0ZS5Nb3ZpbmdMZWZ0OlxyXG4gICAgICAgIC8vIC8vICAgICB0aGlzLm5vZGUueCArPSB0aGlzLnNwZWVkO1xyXG4gICAgICAgIC8vIC8vICAgaWYgICh0aGlzLm5vZGUueCA+IDU0MCl7XHJcbiAgICAgICAgLy8gLy8gICAgIGNhc2UgTW92ZVN0YXRlLk1vdmluZ0xlZnQ6XHJcbiAgICAgICAgLy8gLy8gICAgIHRoaXMubm9kZS54ICs9IHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgLy8gLy8gICAgIGJyZWFrO31cclxuICAgICAgICAvLyB9fVxyXG5cclxuICAgIFxyXG5cclxuXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyOiBjYy5Db2xsaWRlciwgc2VsZjogY2MuQ29sbGlkZXIpIHtcclxuICAgICAgICBpZiAob3RoZXIudGFnID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbkNvbnRyb2xsZXIuYWRkU2NvcmUoKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5tYWluQ29udHJvbGxlci5zY29yZUhpZ2goKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/MainController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c1754yIncRLS42TWtbOc3Sf', 'MainController');
// Scripts/MainController.ts

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
exports.SPEED = exports.GameStatus = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameStatus;
(function (GameStatus) {
    GameStatus[GameStatus["Game_Ready"] = 0] = "Game_Ready";
    GameStatus[GameStatus["Game_Playing"] = 1] = "Game_Playing";
    GameStatus[GameStatus["Game_Over"] = 2] = "Game_Over";
})(GameStatus = exports.GameStatus || (exports.GameStatus = {}));
exports.SPEED = -5;
var MainController = /** @class */ (function (_super) {
    __extends(MainController, _super);
    function MainController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spBg = [null, null];
        _this.spGameOver = null;
        _this.congrates = null;
        _this.tryNextTime = null;
        _this.labelScore = null;
        _this.labletimeleft = null;
        _this.btnStart = null;
        // @property(cc.Button)
        // Replay:cc.Button = null;
        _this.labelhighScore = null;
        _this.score = 0;
        _this.timeLeft = 20;
        _this.highScore = 0;
        _this.gameStatus = GameStatus.Game_Ready;
        return _this;
    }
    MainController.prototype.onLoad = function () {
        //open Collision Systems
        var collisionManager = cc.director.getCollisionManager();
        collisionManager.enabled = true;
        collisionManager.enabledDebugDraw = true;
        this.spGameOver = this.node.getChildByName("GameOver").getComponent(cc.Sprite);
        this.spGameOver.node.active = false;
        this.congrates.node.active = false;
        this.tryNextTime.node.active = false;
        // cc.sys.localStorage.setItem("highScore");
        // this.labelhighScore.string=this.score.toString();
    };
    MainController.prototype.touchStarBtn = function () {
        this.btnStart.node.active = false;
        // this.Replay.node.active = true;
        this.gameStatus = GameStatus.Game_Playing;
        this.spGameOver.node.active = false;
        this.congrates.node.active = false;
        this.tryNextTime.node.active = false;
        this.score = 0;
        this.labelScore.string = this.score.toString();
        // console.log("highScore",cc.sys.localStorage.getItem("highScore"));
    };
    MainController.prototype.gameOver = function () {
        this.spGameOver.node.active = true;
        this.gameStatus = GameStatus.Game_Over;
        //var highScore ;
        //cc.sys.localStorage.setItem("highScore",1);
        // this.labelhighScore.string=this.highScore.toString();
        if (+cc.sys.localStorage.getItem("highScore") < this.score) {
            this.highScore = this.score;
            cc.sys.localStorage.setItem("highScore", this.score);
            this.congrates.node.active = true;
            console.log(this.score);
        }
        else {
            this.tryNextTime.node.active = true;
        }
        this.highScore = cc.sys.localStorage.getItem("highScore");
        //this.tryNextTime.node.active = true;
        //  this.labelhighScore.string=this.highScore.toString();
        // var highScore =Math.max(+(cc.sys.localStorage.getItem("highScore")),(this.score));
        // cc.sys.localStorage.setItem("highScore",highScore);
        this.scoreHigh();
        //this.replay();
    };
    MainController.prototype.replay = function () {
        //this.btnStart.node.active = true;
        cc.director.loadScene("ShipCc");
        //}
    };
    MainController.prototype.addScore = function () {
        this.score++;
        this.labelScore.string = this.score.toString();
    };
    MainController.prototype.scoreHigh = function () {
        this.labelhighScore.string = "highScore :" + this.highScore.toString();
    };
    MainController.prototype.update = function (dt) {
        if (this.gameStatus !== GameStatus.Game_Playing) {
            return;
        }
        for (var i = 0; i < this.spBg.length; i++) {
            this.spBg[i].node.y -= 2.0;
            if (this.spBg[i].node.y <= -1920) {
                this.spBg[i].node.y = 1920;
            }
        }
        this.timeLeft -= dt;
        this.labletimeleft.string = Math.round(this.timeLeft).toString();
        if (this.timeLeft < 0) {
            this.gameOver();
        }
    };
    __decorate([
        property(cc.Sprite)
    ], MainController.prototype, "spBg", void 0);
    __decorate([
        property(cc.Sprite)
    ], MainController.prototype, "spGameOver", void 0);
    __decorate([
        property(cc.Sprite)
    ], MainController.prototype, "congrates", void 0);
    __decorate([
        property(cc.Sprite)
    ], MainController.prototype, "tryNextTime", void 0);
    __decorate([
        property(cc.Label)
    ], MainController.prototype, "labelScore", void 0);
    __decorate([
        property(cc.Label)
    ], MainController.prototype, "labletimeleft", void 0);
    __decorate([
        property(cc.Button)
    ], MainController.prototype, "btnStart", void 0);
    __decorate([
        property(cc.Label)
    ], MainController.prototype, "labelhighScore", void 0);
    MainController = __decorate([
        ccclass
    ], MainController);
    return MainController;
}(cc.Component));
exports.default = MainController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcTWFpbkNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDLElBQVksVUFJWDtBQUpELFdBQVksVUFBVTtJQUNsQix1REFBVSxDQUFBO0lBQ1YsMkRBQVksQ0FBQTtJQUNaLHFEQUFTLENBQUE7QUFDYixDQUFDLEVBSlcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFJckI7QUFDWSxRQUFBLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztBQUd4QjtJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQStIQztRQTVIRyxVQUFJLEdBQWdCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBS2pDLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTdCLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFFNUIsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFHOUIsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFFNUIsbUJBQWEsR0FBVyxJQUFJLENBQUM7UUFHN0IsY0FBUSxHQUFjLElBQUksQ0FBQztRQUMzQix1QkFBdUI7UUFDdkIsMkJBQTJCO1FBRTNCLG9CQUFjLEdBQVcsSUFBSSxDQUFDO1FBRTlCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsY0FBUSxHQUFVLEVBQUUsQ0FBQztRQUNyQixlQUFTLEdBQVMsQ0FBQyxDQUFDO1FBRXBCLGdCQUFVLEdBQWUsVUFBVSxDQUFDLFVBQVUsQ0FBQzs7SUFpR25ELENBQUM7SUE5RkcsK0JBQU0sR0FBTjtRQUNJLHdCQUF3QjtRQUN4QixJQUFJLGdCQUFnQixHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUN6RCxnQkFBZ0IsQ0FBQyxPQUFPLEdBQUcsSUFBSSxD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QyxFQUFFLENBQUMsS0FBSyxDQUFDO3NEQUNTO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7eURBQ1U7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztvREFDTztJQUkzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzBEQUNXO0lBeEJiLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0ErSGxDO0lBQUQscUJBQUM7Q0EvSEQsQUErSEMsQ0EvSDJDLEVBQUUsQ0FBQyxTQUFTLEdBK0h2RDtrQkEvSG9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuZXhwb3J0IGVudW0gR2FtZVN0YXR1cyB7XHJcbiAgICBHYW1lX1JlYWR5LFxyXG4gICAgR2FtZV9QbGF5aW5nLFxyXG4gICAgR2FtZV9PdmVyXHJcbn1cclxuZXhwb3J0IGNvbnN0IFNQRUVEID0gLTU7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIHNwQmc6IGNjLlNwcml0ZVtdID0gW251bGwsIG51bGxdO1xyXG5cclxuXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIHNwR2FtZU92ZXI6IGNjLlNwcml0ZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgY29uZ3JhdGVzOiBjYy5TcHJpdGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIHRyeU5leHRUaW1lOiBjYy5TcHJpdGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsU2NvcmU6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmxldGltZWxlZnQ6Y2MuTGFiZWwgPW51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIGJ0blN0YXJ0OiBjYy5CdXR0b24gPSBudWxsO1xyXG4gICAgLy8gQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIC8vIFJlcGxheTpjYy5CdXR0b24gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWxoaWdoU2NvcmU6Y2MuTGFiZWw9IG51bGw7XHJcblxyXG4gICAgc2NvcmU6IG51bWJlciA9IDA7XHJcbiAgICB0aW1lTGVmdDpudW1iZXIgPSAyMDtcclxuICAgIGhpZ2hTY29yZSA6bnVtYmVyPTA7XHJcblxyXG4gICAgZ2FtZVN0YXR1czogR2FtZVN0YXR1cyA9IEdhbWVTdGF0dXMuR2FtZV9SZWFkeTtcclxuICAgIFxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAvL29wZW4gQ29sbGlzaW9uIFN5c3RlbXNcclxuICAgICAgICB2YXIgY29sbGlzaW9uTWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcclxuICAgICAgICBjb2xsaXNpb25NYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGNvbGxpc2lvbk1hbmFnZXIuZW5hYmxlZERlYnVnRHJhdyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zcEdhbWVPdmVyID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiR2FtZU92ZXJcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgdGhpcy5zcEdhbWVPdmVyLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jb25ncmF0ZXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRyeU5leHRUaW1lLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaGlnaFNjb3JlXCIpO1xyXG4gICAgICAgIC8vIHRoaXMubGFiZWxoaWdoU2NvcmUuc3RyaW5nPXRoaXMuc2NvcmUudG9TdHJpbmcoKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICB0b3VjaFN0YXJCdG4oKSB7XHJcbiAgICAgICAgdGhpcy5idG5TdGFydC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vIHRoaXMuUmVwbGF5Lm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmdhbWVTdGF0dXMgPSBHYW1lU3RhdHVzLkdhbWVfUGxheWluZztcclxuICAgICAgICB0aGlzLnNwR2FtZU92ZXIubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNvbmdyYXRlcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudHJ5TmV4dFRpbWUubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgICAgICB0aGlzLmxhYmVsU2NvcmUuc3RyaW5nID10aGlzLnNjb3JlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJoaWdoU2NvcmVcIixjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJoaWdoU2NvcmVcIikpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnYW1lT3ZlcigpIHtcclxuICAgICAgICB0aGlzLnNwR2FtZU92ZXIubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZ2FtZVN0YXR1cyA9IEdhbWVTdGF0dXMuR2FtZV9PdmVyO1xyXG4gICAgICAgIC8vdmFyIGhpZ2hTY29yZSA7XHJcbiAgICAgICAgLy9jYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJoaWdoU2NvcmVcIiwxKTtcclxuICAgICAgICAvLyB0aGlzLmxhYmVsaGlnaFNjb3JlLnN0cmluZz10aGlzLmhpZ2hTY29yZS50b1N0cmluZygpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICBpZiAoK2NjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhpZ2hTY29yZVwiKTx0aGlzLnNjb3JlKXtcclxuICAgICAgICAgICAgIHRoaXMuaGlnaFNjb3JlID0gdGhpcy5zY29yZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImhpZ2hTY29yZVwiLHRoaXMuc2NvcmUpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbmdyYXRlcy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zY29yZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMudHJ5TmV4dFRpbWUubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5oaWdoU2NvcmUgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJoaWdoU2NvcmVcIik7XHJcbiAgICAgICAgLy90aGlzLnRyeU5leHRUaW1lLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgICAgIC8vICB0aGlzLmxhYmVsaGlnaFNjb3JlLnN0cmluZz10aGlzLmhpZ2hTY29yZS50b1N0cmluZygpO1xyXG4gICAgICAgIC8vIHZhciBoaWdoU2NvcmUgPU1hdGgubWF4KCsoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaGlnaFNjb3JlXCIpKSwodGhpcy5zY29yZSkpO1xyXG4gICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImhpZ2hTY29yZVwiLGhpZ2hTY29yZSk7XHJcbiAgICAgICAgdGhpcy5zY29yZUhpZ2goKTtcclxuICAgICAgICAvL3RoaXMucmVwbGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVwbGF5KCl7XHJcbiAgICAgICAgLy90aGlzLmJ0blN0YXJ0Lm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJTaGlwQ2NcIik7XHJcbiAgICAgICAgIC8vfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhZGRTY29yZSgpe1xyXG4gICAgICAgIHRoaXMuc2NvcmUrKztcclxuICAgICAgICB0aGlzLmxhYmVsU2NvcmUuc3RyaW5nID0gdGhpcy5zY29yZS50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgc2NvcmVIaWdoKCl7XHJcbiAgICBcclxuICAgICAgICB0aGlzLmxhYmVsaGlnaFNjb3JlLnN0cmluZz1cImhpZ2hTY29yZSA6XCIgKyB0aGlzLmhpZ2hTY29yZS50b1N0cmluZygpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXR1cyAhPT0gR2FtZVN0YXR1cy5HYW1lX1BsYXlpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3BCZy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnNwQmdbaV0ubm9kZS55IC09IDIuMDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3BCZ1tpXS5ub2RlLnkgPD0gLTE5MjApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BCZ1tpXS5ub2RlLnkgPSAxOTIwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGltZUxlZnQtPWR0O1xyXG4gICAgICAgIHRoaXMubGFibGV0aW1lbGVmdC5zdHJpbmcgPSBNYXRoLnJvdW5kKHRoaXMudGltZUxlZnQpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgaWYodGhpcy50aW1lTGVmdCA8IDApe1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgIFxyXG4gICAgXHJcbn1cclxuXHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/PlayerController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '91007oSzJJIXbyhi34nO4/9', 'PlayerController');
// Scripts/PlayerController.ts

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
var PlayerController = /** @class */ (function (_super) {
    __extends(PlayerController, _super);
    function PlayerController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mainControl = null;
        return _this;
    }
    PlayerController.prototype.onLoad = function () {
        cc.Canvas.instance.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.mainControl = cc.Canvas.instance.node.getComponent("MainController");
    };
    PlayerController.prototype.onCollisionEnter = function (other, self) {
        // game over
        cc.log("game over");
        if (other.tag === 0) {
            cc.log("game over");
            this.mainControl.gameOver();
        }
    };
    PlayerController.prototype.onTouchMove = function (event) {
        if (this.mainControl.gameStatus === MainController_1.GameStatus.Game_Playing) {
            this.node.x = event.getLocationX() - 540;
            //this.node.y = event.getLocationY() - 960;
        }
        else {
            this.node.activeInHierarchy = false;
        }
    };
    __decorate([
        property(MainController_1.default)
    ], PlayerController.prototype, "mainControl", void 0);
    PlayerController = __decorate([
        ccclass
    ], PlayerController);
    return PlayerController;
}(cc.Component));
exports.default = PlayerController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUGxheWVyQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBOEQ7QUFFeEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBOEMsb0NBQVk7SUFBMUQ7UUFBQSxxRUE2QkM7UUEzQkcsaUJBQVcsR0FBbUIsSUFBSSxDQUFDOztJQTJCdkMsQ0FBQztJQXhCRyxpQ0FBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUU5RSxDQUFDO0lBRUQsMkNBQWdCLEdBQWhCLFVBQWlCLEtBQWtCLEVBQUUsSUFBaUI7UUFDbEQsWUFBWTtRQUNaLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDcEIsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRTtZQUNqQixFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDL0I7SUFDTCxDQUFDO0lBRUQsc0NBQVcsR0FBWCxVQUFZLEtBQTBCO1FBQ2xDLElBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEtBQUssMkJBQVUsQ0FBQyxZQUFZLEVBQUM7WUFDM0QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxHQUFHLEdBQUcsQ0FBQztZQUN6QywyQ0FBMkM7U0FDOUM7YUFDTztZQUNBLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1NBQ3ZDO0lBQ0wsQ0FBQztJQTFCRDtRQURDLFFBQVEsQ0FBQyx3QkFBYyxDQUFDO3lEQUNVO0lBRmxCLGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBNkJwQztJQUFELHVCQUFDO0NBN0JELEFBNkJDLENBN0I2QyxFQUFFLENBQUMsU0FBUyxHQTZCekQ7a0JBN0JvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWFpbkNvbnRyb2xsZXIsIHsgR2FtZVN0YXR1cyB9IGZyb20gXCIuL01haW5Db250cm9sbGVyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoTWFpbkNvbnRyb2xsZXIpXHJcbiAgICBtYWluQ29udHJvbDogTWFpbkNvbnRyb2xsZXIgPSBudWxsO1xyXG5cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5tYWluQ29udHJvbCA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENvbXBvbmVudChcIk1haW5Db250cm9sbGVyXCIpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyOiBjYy5Db2xsaWRlciwgc2VsZjogY2MuQ29sbGlkZXIpIHtcclxuICAgICAgICAvLyBnYW1lIG92ZXJcclxuICAgICAgICBjYy5sb2coXCJnYW1lIG92ZXJcIik7XHJcbiAgICAgICAgaWYgKG90aGVyLnRhZyA9PT0gMCkge1xyXG4gICAgICAgICAgICBjYy5sb2coXCJnYW1lIG92ZXJcIik7XHJcbiAgICAgICAgICAgIHRoaXMubWFpbkNvbnRyb2wuZ2FtZU92ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Ub3VjaE1vdmUoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBpZih0aGlzLm1haW5Db250cm9sLmdhbWVTdGF0dXMgPT09IEdhbWVTdGF0dXMuR2FtZV9QbGF5aW5nKXtcclxuICAgICAgICB0aGlzLm5vZGUueCA9IGV2ZW50LmdldExvY2F0aW9uWCgpIC0gNTQwO1xyXG4gICAgICAgIC8vdGhpcy5ub2RlLnkgPSBldmVudC5nZXRMb2NhdGlvblkoKSAtIDk2MDtcclxuICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlSW5IaWVyYXJjaHkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/BulletController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8f88dWo4bJFUpqGiWnK78uM', 'BulletController');
// Scripts/BulletController.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BulletController = /** @class */ (function (_super) {
    __extends(BulletController, _super);
    function BulletController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // @property(cc.Label)
        // label: cc.Label = null;
        //    @property(MainController)
        //    mainControl : MainController;
        // @property
        // text: string = 'hello';
        _this.speed = 5;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    BulletController.prototype.start = function () {
    };
    BulletController.prototype.update = function (dt) {
        this.node.y += this.speed;
    };
    BulletController = __decorate([
        ccclass
    ], BulletController);
    return BulletController;
}(cc.Component));
exports.default = BulletController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQnVsbGV0Q29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE4QyxvQ0FBWTtJQUExRDtRQUFBLHFFQXFCQztRQW5CRyxzQkFBc0I7UUFDdEIsMEJBQTBCO1FBQzFCLCtCQUErQjtRQUMvQixtQ0FBbUM7UUFDbkMsWUFBWTtRQUNaLDBCQUEwQjtRQUMxQixXQUFLLEdBQWEsQ0FBQyxDQUFDOztJQWF4QixDQUFDO0lBWEcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZixnQ0FBSyxHQUFMO0lBRUEsQ0FBQztJQUVBLGlDQUFNLEdBQU4sVUFBUSxFQUFTO1FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBcEJlLGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBcUJwQztJQUFELHVCQUFDO0NBckJELEFBcUJDLENBckI2QyxFQUFFLENBQUMsU0FBUyxHQXFCekQ7a0JBckJvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWFpbkNvbnRyb2xsZXIgZnJvbSBcIi4vTWFpbkNvbnRyb2xsZXJcIjtcclxuXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1bGxldENvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8vIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIC8vIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICAvLyAgICBAcHJvcGVydHkoTWFpbkNvbnRyb2xsZXIpXHJcbiAgICAvLyAgICBtYWluQ29udHJvbCA6IE1haW5Db250cm9sbGVyO1xyXG4gICAgLy8gQHByb3BlcnR5XHJcbiAgICAvLyB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xyXG4gICAgc3BlZWQgOiBudW1iZXIgPSAgNTtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgICB1cGRhdGUgKGR0Om51bWJlcikge1xyXG4gICAgICAgIHRoaXMubm9kZS55Kz10aGlzLnNwZWVkO1xyXG4gICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Bullet.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd835bPsue5CCL7shgNQ+kyD', 'Bullet');
// Scripts/Bullet.ts

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
var Bullet = /** @class */ (function (_super) {
    __extends(Bullet, _super);
    function Bullet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.BulletPrefab = null;
        _this.bulletParent = null;
        //gameStatus: GameStatus = GameStatus.Game_Ready;
        _this.time = 0;
        return _this;
        // onLoad() {
        //     cc.Canvas.instance.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        //     this.mainControl = cc.Canvas.instance.node.getComponent("MainController");
        // }
        // onCollisionEnter(other: cc.Collider, self: cc.Collider) {
        //     this.mainControl.gameOver();
        // }
        // onTouchMove(event: cc.Event.EventTouch) {
        //     this.node.y = event.getLocationX()  ;
        // }
    }
    // gameStatus: GameStatus;
    //  gameStatus: GameStatus ;
    //gameStatus: GameStatus = GameStatus.Game_Playing;
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    Bullet.prototype.start = function () {
    };
    Bullet.prototype.generateBullet = function () {
        var bullet = cc.instantiate(this.BulletPrefab);
        console.log("bullet generate");
        this.bulletParent.addChild(bullet);
        bullet.x = this.node.x;
        bullet.y = this.node.y + 100;
    };
    Bullet.prototype.update = function (dt) {
        if (this.mainControl.gameStatus !== MainController_1.GameStatus.Game_Playing) {
            return;
        }
        console.log("work done");
        this.time += dt;
        if (this.time > .5) {
            console.log("bullet generated");
            this.generateBullet();
            this.time = 0;
        }
    };
    __decorate([
        property(cc.Prefab)
    ], Bullet.prototype, "BulletPrefab", void 0);
    __decorate([
        property(MainController_1.default)
    ], Bullet.prototype, "mainControl", void 0);
    __decorate([
        property(cc.Node)
    ], Bullet.prototype, "bulletParent", void 0);
    Bullet = __decorate([
        ccclass
    ], Bullet);
    return Bullet;
}(cc.Component));
exports.default = Bullet;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcQnVsbGV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUE4RDtBQUN4RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQXlEQztRQXRERyxrQkFBWSxHQUFjLElBQUksQ0FBQztRQUkvQixrQkFBWSxHQUFXLElBQUksQ0FBQztRQUc1QixpREFBaUQ7UUFDakQsVUFBSSxHQUFXLENBQUMsQ0FBQzs7UUFpQ2pCLGFBQWE7UUFDYix3RkFBd0Y7UUFDeEYsaUZBQWlGO1FBQ2pGLElBQUk7UUFDSiw0REFBNEQ7UUFFNUQsbUNBQW1DO1FBRW5DLElBQUk7UUFFSiw0Q0FBNEM7UUFDNUMsNENBQTRDO1FBQzVDLElBQUk7SUFDUixDQUFDO0lBN0NHLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsbURBQW1EO0lBQ25ELHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsc0JBQUssR0FBTDtJQUVBLENBQUM7SUFFRCwrQkFBYyxHQUFkO1FBQ0ksSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDdkIsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUU7SUFDbEMsQ0FBQztJQUVELHVCQUFNLEdBQU4sVUFBTyxFQUFVO1FBRWIsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsS0FBSywyQkFBVSxDQUFDLFlBQVksRUFBRTtZQUN6RCxPQUFPO1NBQ1Y7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ2hCLElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLEVBQUU7WUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztTQUNqQjtJQUNMLENBQUM7SUF4Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztnREFDVztJQUUvQjtRQURDLFFBQVEsQ0FBQyx3QkFBYyxDQUFDOytDQUNHO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1U7SUFQWCxNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBeUQxQjtJQUFELGFBQUM7Q0F6REQsQUF5REMsQ0F6RG1DLEVBQUUsQ0FBQyxTQUFTLEdBeUQvQztrQkF6RG9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWFpbkNvbnRyb2xsZXIsIHsgR2FtZVN0YXR1cyB9IGZyb20gXCIuL01haW5Db250cm9sbGVyXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdWxsZXQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gIFxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIEJ1bGxldFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShNYWluQ29udHJvbGxlcilcclxuICAgIG1haW5Db250cm9sOiBNYWluQ29udHJvbGxlcjtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnVsbGV0UGFyZW50OmNjLk5vZGUgPSBudWxsO1xyXG4gICBcclxuXHJcbiAgICAvL2dhbWVTdGF0dXM6IEdhbWVTdGF0dXMgPSBHYW1lU3RhdHVzLkdhbWVfUmVhZHk7XHJcbiAgICB0aW1lOiBudW1iZXIgPSAwO1xyXG4gICAgLy8gZ2FtZVN0YXR1czogR2FtZVN0YXR1cztcclxuICAgIC8vICBnYW1lU3RhdHVzOiBHYW1lU3RhdHVzIDtcclxuICAgIC8vZ2FtZVN0YXR1czogR2FtZVN0YXR1cyA9IEdhbWVTdGF0dXMuR2FtZV9QbGF5aW5nO1xyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlQnVsbGV0KCkge1xyXG4gICAgICAgIGxldCBidWxsZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLkJ1bGxldFByZWZhYik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJidWxsZXQgZ2VuZXJhdGVcIik7XHJcbiAgICAgICAgdGhpcy5idWxsZXRQYXJlbnQuYWRkQ2hpbGQoYnVsbGV0KTtcclxuICAgICAgICBidWxsZXQueCA9IHRoaXMubm9kZS54O1xyXG4gICAgICAgIGJ1bGxldC55ID0gdGhpcy5ub2RlLnkgKyAxMDAgO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLm1haW5Db250cm9sLmdhbWVTdGF0dXMgIT09IEdhbWVTdGF0dXMuR2FtZV9QbGF5aW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ3b3JrIGRvbmVcIik7XHJcbiAgICAgICAgdGhpcy50aW1lICs9IGR0O1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWUgPiAuNSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImJ1bGxldCBnZW5lcmF0ZWRcIik7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVCdWxsZXQoKTtcclxuICAgICAgICAgICAgdGhpcy50aW1lID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBvbkxvYWQoKSB7XHJcbiAgICAvLyAgICAgY2MuQ2FudmFzLmluc3RhbmNlLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICAvLyAgICAgdGhpcy5tYWluQ29udHJvbCA9IGNjLkNhbnZhcy5pbnN0YW5jZS5ub2RlLmdldENvbXBvbmVudChcIk1haW5Db250cm9sbGVyXCIpO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gb25Db2xsaXNpb25FbnRlcihvdGhlcjogY2MuQ29sbGlkZXIsIHNlbGY6IGNjLkNvbGxpZGVyKSB7XHJcblxyXG4gICAgLy8gICAgIHRoaXMubWFpbkNvbnRyb2wuZ2FtZU92ZXIoKTtcclxuXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gb25Ub3VjaE1vdmUoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgIC8vICAgICB0aGlzLm5vZGUueSA9IGV2ZW50LmdldExvY2F0aW9uWCgpICA7XHJcbiAgICAvLyB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------
