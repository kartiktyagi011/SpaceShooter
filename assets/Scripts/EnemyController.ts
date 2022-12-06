import MainController , { GameStatus  } from "./MainController";
const { ccclass, property } = cc._decorator;

@ccclass
export default class EnemyController extends cc.Component {

    @property(cc.Prefab)
    EnemyPrefab: cc.Prefab = null;

    @property(MainController)
    mainController: MainController = null;

    timer: number = 0;
   

    generateEnemy(){
        console.log('generate enemy');
        let enemy = cc.instantiate(this.EnemyPrefab);
        this.node.addChild(enemy);
        enemy.y = 960;
        var minx = -540;
        var maxx = 540;
        enemy.x = minx + Math.random() * (maxx - minx);
    }

    update(dt: number) {
        if (this.mainController.gameStatus !== GameStatus.Game_Playing) {
            return;
        }
        this.timer += dt;
        if (this.timer > 1) {
           this.generateEnemy();
            this.timer = 0;
        }
    }
}