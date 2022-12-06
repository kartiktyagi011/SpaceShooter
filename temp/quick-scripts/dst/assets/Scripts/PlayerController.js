
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