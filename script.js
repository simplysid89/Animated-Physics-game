// size my canvas using js
window.addEventListener('load',function(){
    const canvas=document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width=1280;
    canvas.height=720;

    class player{
        constructor(game){
            this.game=game;
        }

    }

    class Game{
        constructor(canavs){
            this.canvas=canvas;
            this.width=this.canvas.width;
            this.height=this.canvas.height;
            this.player=new player(this);
        }
    }
    const game=new Game(canvas);
    console.log(game);
    function animate(){

    }
})