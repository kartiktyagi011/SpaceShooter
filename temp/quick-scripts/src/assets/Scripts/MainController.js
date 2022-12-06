"use strict";
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