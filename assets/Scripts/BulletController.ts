import MainController from "./MainController";


const {ccclass, property} = cc._decorator;

@ccclass
export default class BulletController extends cc.Component {

    // @property(cc.Label)
    // label: cc.Label = null;
    //    @property(MainController)
    //    mainControl : MainController;
    // @property
    // text: string = 'hello';
    speed : number =  5;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

     update (dt:number) {
        this.node.y+=this.speed;
     }
}
