const { ccclass, property } = cc._decorator;

export enum GameStatus {
    Game_Ready,
    Game_Playing,
    Game_Over
}
export const SPEED = -5;

@ccclass
export default class MainController extends cc.Component {

    @property(cc.Sprite)
    spBg: cc.Sprite[] = [null, null];



    @property(cc.Sprite)
    spGameOver: cc.Sprite = null;
    @property(cc.Sprite)
    congrates: cc.Sprite = null;
    @property(cc.Sprite)
    tryNextTime: cc.Sprite = null;

    @property(cc.Label)
    labelScore: cc.Label = null;
    @property(cc.Label)
    labletimeleft:cc.Label =null;

    @property(cc.Button)
    btnStart: cc.Button = null;
    // @property(cc.Button)
    // Replay:cc.Button = null;
    @property(cc.Label)
    labelhighScore:cc.Label= null;

    score: number = 0;
    timeLeft:number = 20;
    highScore :number=0;

    gameStatus: GameStatus = GameStatus.Game_Ready;
    

    onLoad() {
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
        
    }

    touchStarBtn() {
        this.btnStart.node.active = false;
        // this.Replay.node.active = true;
        this.gameStatus = GameStatus.Game_Playing;
        this.spGameOver.node.active = false;
        this.congrates.node.active = false;
        this.tryNextTime.node.active = false;
        this.score = 0;
        this.labelScore.string =this.score.toString();
        // console.log("highScore",cc.sys.localStorage.getItem("highScore"));

    }

    gameOver() {
        this.spGameOver.node.active = true;
        this.gameStatus = GameStatus.Game_Over;
        //var highScore ;
        //cc.sys.localStorage.setItem("highScore",1);
        // this.labelhighScore.string=this.highScore.toString();
        
         if (+cc.sys.localStorage.getItem("highScore")<this.score){
             this.highScore = this.score;
            
            cc.sys.localStorage.setItem("highScore",this.score);
            this.congrates.node.active = true;
            

            console.log(this.score);
        }
        else{
            this.tryNextTime.node.active = true;

        }
        this.highScore = cc.sys.localStorage.getItem("highScore");
        //this.tryNextTime.node.active = true;


        //  this.labelhighScore.string=this.highScore.toString();
        // var highScore =Math.max(+(cc.sys.localStorage.getItem("highScore")),(this.score));
        // cc.sys.localStorage.setItem("highScore",highScore);
        this.scoreHigh();
        //this.replay();
    }

    replay(){
        //this.btnStart.node.active = true;
        cc.director.loadScene("ShipCc");
         //}
    }


    addScore(){
        this.score++;
        this.labelScore.string = this.score.toString();
    }
    scoreHigh(){
    
        this.labelhighScore.string="highScore :" + this.highScore.toString();
        
    }

    update(dt: number) {
        if (this.gameStatus !== GameStatus.Game_Playing) {
            return;
        }
        for (let i = 0; i < this.spBg.length; i++) {
            this.spBg[i].node.y -= 2.0;
            if (this.spBg[i].node.y <= -1920) {
                this.spBg[i].node.y = 1920;
            }
        }
        this.timeLeft-=dt;
        this.labletimeleft.string = Math.round(this.timeLeft).toString();
        if(this.timeLeft < 0){
           
            this.gameOver();
        }
    }
     
    
}

