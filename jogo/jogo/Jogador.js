//atributos do personagem (posição/altura/largura)
class Jogador {
    constructor() {
      this.imagem = loadImage("jogo/imgJogo/mario.png");
      this.posX = 250;
      this.posY = 315;
      this.velocidade = 4;
      this.altura = 60;
      this.largura = 60;
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altura;
      this.xInicial = this.posX;
      this.xFinal = this.posX + this.largura;
    }
  
    //definição dos movimentos
    mova() {
      image(this.imagem, this.posX, this.posY, this.largura, this.altura);
  
      if (keyIsDown(39) && this.xFinal < 600) {
        this.posX += this.velocidade;
      }
      if (keyIsDown(37) && this.xInicial > 0) {
        this.posX -= this.velocidade;
      }
  
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altura;
      this.xInicial = this.posX;
      this.xFinal = this.posX + this.largura;
    }
  }