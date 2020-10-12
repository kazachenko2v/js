// model

function BallModel(){
    this.ball = document.getElementById('ball');
    this.field = document.getElementById('field');
    this.leftRaq = document.getElementById('leftraq');
    this.rightRaq = document.getElementById('rightraq');
    this.leftScore = document.getElementById('left-score');
    this.rightScore = document.getElementById('right-score');

    this.ballWidth = this.ball.getBoundingClientRect().width;
    this.ballHeight = this.ball.getBoundingClientRect().height;

    this.posX = 300 - this.ball.getBoundingClientRect().width/2;
    this.posY = 150 - this.ball.getBoundingClientRect().height/2;
    this.posRaqLeft = 150 - this.leftRaq.getBoundingClientRect().height/2;
    this.posRaqRight = 150 - this.rightRaq.getBoundingClientRect().height/2;
    
    let randomNumber = (min, max) => Math.random() * (max - min) + min;

    let speedX = -5;
    let speedY = -2;

    let myView = null;

    this.init = function(view) {
        myView = view;
    };

    this.updateView = function() {
        if (myView)
            myView.update();
    };

    this.leftScoreAdd = function(){
        this.leftScore.innerHTML++;
    }

    this.rightScoreAdd = function(){
        this.rightScore.innerHTML++;
    }

    this.tick = function() {

        this.posX += speedX;
        this.posY += speedY;

        if (this.posX + this.ball.offsetWidth > this.field.offsetWidth) {
            speedX = 0;
            speedY = 0;
            this.posX = this.field.offsetWidth - this.ball.offsetWidth;
            this.leftScoreAdd();
        }
        if (this.posX + this.ball.offsetWidth === this.field.offsetWidth && this.posY > this.posRaqRight && this.posY - this.ball.offsetWidth < this.posRaqRight + this.rightRaq.getBoundingClientRect().height) {
            speedX = -speedX;
            this.posX = this.field.offsetWidth - this.ball.offsetWidth;
        }
        if (this.posX === 0 && this.posY > this.posRaqLeft && this.posY - this.ball.offsetWidth < this.posRaqLeft + this.leftRaq.getBoundingClientRect().height) {
            speedX = -speedX;
            this.posX = 0;
        }
        if (this.posX < 0) {
            speedX = 0;
            speedY = 0;
            this.posX = 0;
            this.rightScoreAdd();
        }
        if (this.posY + this.ball.offsetHeight > this.field.offsetHeight) {
            speedY = -speedY;
            this.posY = this.field.offsetHeight - this.ball.offsetHeight;
        }
        if (this.posY < 0) {
            speedY = -speedY;
            this.posY = 0;
        }

        this.updateView();
        requestAnimationFrame(this.tick.bind(this));
    };

    this.start = function() {
        requestAnimationFrame(this.tick.bind(this));
    };

    this.leftUp = function() {
        this.posRaqLeft -= 7;
        if (this.posRaqLeft < 0) {
            this.posRaqLeft = 0;
        }
        this.updateView();
    };

    this.leftDown = function() {
        this.posRaqLeft += 7;
        if (this.posRaqLeft + this.leftRaq.offsetHeight > this.field.offsetHeight) {
            this.posRaqLeft = this.field.offsetHeight - this.leftRaq.offsetHeight;
        }
        this.updateView();
    };

    this.rightUp = function() {
        this.posRaqRight -= 7;
        if (this.posRaqRight < 0) {
            this.posRaqRight = 0;
        }
        this.updateView();
    };

    this.rightDown = function() {
        this.posRaqRight += 7;
        if (this.posRaqRight + this.rightRaq.offsetHeight > this.field.offsetHeight) {
            this.posRaqRight = this.field.offsetHeight - this.rightRaq.offsetHeight;
        }
        this.updateView();
    };
}

// view

function BallView(){

    let myModel = null;

    this.init = function(model){
        myModel = model;
    };

    this.update = function(){
        myModel.ball.style.left = `${myModel.posX}px`;
        myModel.ball.style.top = `${myModel.posY}px`;
        myModel.leftRaq.style.top = `${myModel.posRaqLeft}px`;
        myModel.rightRaq.style.top = `${myModel.posRaqRight}px`;
    };
}

// Controller

function RaqController(){

    let myModel = null;

    this.init = function(model){
        myModel = model;

        document.addEventListener('keydown', this.move);
    };

    this.move = function(event){
        if (event.code === 'ShiftLeft'){
            myModel.leftUp();
        }
        if (event.code === 'ControlLeft'){
            myModel.leftDown();
        }
        if (event.code === 'ArrowUp'){
            myModel.rightUp();
        }
        if (event.code === 'ArrowDown'){
            myModel.rightDown();
        }
    };
};


let startButton = document.getElementById('start');
startButton.onclick = function() {
    let model = new BallModel();
    let view = new BallView();
    let controllers = new RaqController();

    model.init(view);
    view.init(model);
    controllers.init(model);

    model.start();
};