"use strict";
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