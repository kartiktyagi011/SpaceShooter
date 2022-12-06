
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