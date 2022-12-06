"use strict";
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