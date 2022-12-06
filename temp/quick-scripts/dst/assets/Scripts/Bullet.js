
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