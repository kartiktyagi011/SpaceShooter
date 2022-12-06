"use strict";
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