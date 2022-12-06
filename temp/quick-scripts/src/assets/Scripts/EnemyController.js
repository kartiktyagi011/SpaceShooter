"use strict";
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