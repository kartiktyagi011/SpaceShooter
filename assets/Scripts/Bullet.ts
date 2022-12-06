import MainController, { GameStatus } from "./MainController";
const { ccclass, property } = cc._decorator;

@ccclass
export default class Bullet extends cc.Component {
  
    @property(cc.Prefab)
    BulletPrefab: cc.Prefab = null;
    @property(MainController)
    mainControl: MainController;
    @property(cc.Node)
    bulletParent:cc.Node = null;
   

    //gameStatus: GameStatus = GameStatus.Game_Ready;
    time: number = 0;
    // gameStatus: GameStatus;
    //  gameStatus: GameStatus ;
    //gameStatus: GameStatus = GameStatus.Game_Playing;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }

    generateBullet() {
        let bullet = cc.instantiate(this.BulletPrefab);
        console.log("bullet generate");
        this.bulletParent.addChild(bullet);
        bullet.x = this.node.x;
        bullet.y = this.node.y + 100 ;
    }

    update(dt: number) {
         
        if (this.mainControl.gameStatus !== GameStatus.Game_Playing) {
            return;
        }
        console.log("work done");
        this.time += dt;
        if (this.time > .5) {
            console.log("bullet generated");
            this.generateBullet();
            this.time = 0;
        }
    }
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
