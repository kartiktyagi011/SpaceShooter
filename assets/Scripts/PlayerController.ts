import MainController, { GameStatus } from "./MainController";

const { ccclass, property } = cc._decorator;

@ccclass
export default class PlayerController extends cc.Component {
    @property(MainController)
    mainControl: MainController = null;


    onLoad() {
        cc.Canvas.instance.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.mainControl = cc.Canvas.instance.node.getComponent("MainController");

    }

    onCollisionEnter(other: cc.Collider, self: cc.Collider) {
        // game over
        cc.log("game over");
        if (other.tag === 0) {
            cc.log("game over");
            this.mainControl.gameOver();
        }
    }

    onTouchMove(event: cc.Event.EventTouch) {
        if(this.mainControl.gameStatus === GameStatus.Game_Playing){
        this.node.x = event.getLocationX() - 540;
        //this.node.y = event.getLocationY() - 960;
    }
        else{
            this.node.activeInHierarchy = false;
        }
    }
}
