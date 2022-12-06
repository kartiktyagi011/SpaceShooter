
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