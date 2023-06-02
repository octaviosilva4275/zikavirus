
//variáveis
var fundo;
var jogador;
var obstaculos = [];
var pontos = 0;
var bomba;
var maximo = 5;
var imgAbertura;
var controleTela = "INICIO";
var imgFim;
var vidas =3;





//carrega as imagens
function preload() {
  imgFundo = loadImage("jogo/imgJogo/fundo.png");
  imgJogador = loadImage("jogo/imgJogo/mario.png");
  imgEstrela = loadImage("jogo/imgJogo/estrela.png");
  imgCogumelo = loadImage("jogo/imgJogo/cogumelo.png");
  imgFlor = loadImage("jogo/imgJogo/flor.png");
  imgBomba = loadImage("jogo/imgJogo/bomba.png");
  som_explosao = loadSound("jogo/audio/sombomba.mp3");
  som = loadSound("jogo/audio/som_fruta.wav");
  imgAbertura = loadImage("imgSite/mariofundo.png")
  imgFim = loadImage("imgSite/fim.png");
}

//configura o fundo
function setup() {
  createCanvas(600, 400).parent("jogo");

  jogador = new Jogador();

  for (let i = 0; i < 4; i++) {
    obstaculos.push(new Obstaculo(getRandomObstaculoImage()));
  }

  bomba = new Bomba();

  setInterval(function () {
    obstaculos.push(new Obstaculo(getRandomObstaculoImage()));
  }, 3000);
}
function keyPressed(){
  if(keyCode==13){
    controleTela = "JOGO";
  }
}

//carrega o fundo
function draw() {
  if(controleTela == "INICIO"){
    mostraAbertura()
  }
  else{
    executarJogo()
  }
  if(controleTela == "FIM"){
    mostraFim()
  }
}
