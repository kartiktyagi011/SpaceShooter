import MainController, { GameStatus, SPEED } from "./MainController";

const { ccclass, property } = cc._decorator;
// enum MoveState {
//     MovingLeft = 0,
//     MovingRight = 1,
// }
@ccclass
export default class Enemy extends cc.Component {


    speed: number = -5;
     speedX:number =-10;
    mainController: MainController;
    // state: MoveState = MoveState.MovingLeft;
    onLoad() {
        this.mainController = cc.Canvas.instance.node.getComponent("MainController");
        this.speed = SPEED + Math.random() * SPEED;
    }

    update(dt: number) {
        if (this.mainController.gameStatus !== GameStatus.Game_Playing) {
            return;
        }
        this.node.y += this.speed;
        
        if (this.node.x > 540 || this.node.x < -540) {
            this.speedX = -this.speedX;
        }
        this.node.x += this.speedX;
    }
        //this.node.x += this.speed;
        // if (this.node.x < -540) {
        // //     // this.node.x -= this.speed;
        // //     this.state = MoveState.MovingRight;
        // // }
        // switch(this.state){
        //     case MoveState.MovingLeft:
        //     this.node.x += this.speed;
        //     break;
        // // case MoveState.MovingRight:
        // //     this.node.x -= this.speed;
        //     // }
        // // if (this.node.x > 540) {
        // //  // this.node.x -= this.speed;
        // //     this.state = MoveState.MovingRight;
        // //     }
        // //     switch(this.state){
        // // case MoveState.MovingLeft:
        // //     this.node.x += this.speed;
        // //   if  (this.node.x > 540){
        // //     case MoveState.MovingLeft:
        // //     this.node.x += this.speed;
        // //     break;}
        // }}

    


    onCollisionEnter(other: cc.Collider, self: cc.Collider) {
        if (other.tag === 1) {
            this.mainController.addScore();
            this.node.destroy();
            // this.mainController.scoreHigh();
        }
    }
}

