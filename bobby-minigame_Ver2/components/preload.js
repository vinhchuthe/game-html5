class Preload extends Phaser.Scene {
    constructor() {
        super({
            key: 'Preload'
        })
    }
    preload() {
        this.load.image('title', 'assets/logo.png');
        this.load.image('platform', 'assets/sf2floor.png');
        this.load.image('game-bg', 'assets/Background.png');
        this.load.image('heart', 'assets/heart.png');
        this.load.image('heart-bg', 'assets/Heart-bg.png');
        this.load.image('clock-bg', 'assets/Clock-bg.png');
        this.load.image('score-bg', 'assets/Score-bg.png');
        this.load.image('instruction', 'assets/instruction.png');
        this.load.image('gameover', 'assets/gameover.png');
        this.load.image('result-bg', 'assets/result-bg.png');
        this.load.image('reset-btn', 'assets/reset_btn.png');
        this.load.image('finish-btn', 'assets/finish_btn.png');

        this.load.image('object1', 'assets/object1.png');
        this.load.image('object2', 'assets/object2.png');
        this.load.image('object3', 'assets/object3.png');

        this.load.image('people1', 'assets/people1.png');
        this.load.image('people2', 'assets/people2.png');
        this.load.image('people3', 'assets/people3.png');
        this.load.image('people4', 'assets/people4.png');
        this.load.image('people5', 'assets/people5.png');

        this.load.image('highItem', 'assets/highItems.png');
        this.load.image('midItem', 'assets/midItems.png');
        this.load.image('lowItem1', 'assets/lowItem1.png');
        this.load.image('lowItem2', 'assets/lowItem2.png');
        this.load.image('lowItem3', 'assets/lowItem3.png');

        this.load.image('btn-bg', 'assets/button-bg.png');
        this.load.image('btn-text', 'assets/button-text.png');

        this.load.audio('jump-sound', 'assets/sound/jump-sound.wav');
        this.load.audio('collect-item', 'assets/sound/collect-item.wav');
        this.load.audio('over-sound', 'assets/sound/game-over.wav');
        this.load.audio('bg-music', 'assets/sound/background.wav');
        this.load.audio('click-sound', 'assets/sound/click-sound.wav');
        this.load.audio('hit-player', 'assets/sound/hit-player.wav');

        this.load.atlas('bobby', 'assets/player.png', 'assets/player.json');
    }
    create() {
        this.scene.start('titleScreen');
        // this.scene.start('gameOver');
    }
}