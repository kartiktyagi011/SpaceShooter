
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