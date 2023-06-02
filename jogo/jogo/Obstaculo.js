//atributos dos obstaculos(velocidade,tamanho,posição)
class Obstaculo {
    constructor(imagem) {
      this.imagem = imagem;
      this.posX = random(0, 530);
      this.posY = 0;
      this.velocidade = random(1, maximo);
      this.altura = 30;
      this.largura = 30;
    }
  
    atualizar() {
      this.posY += this.velocidade;
  
      // Reset position if it reaches the bottom
      if (this.posY > height) {
        this.posY = 0;
        this.posX = random(0, 530);
        this.velocidade = random(1, 5);
      }
    }
  
    desenhar() {
      image(this.imagem, this.posX, this.posY, this.largura, this.altura);
    }
  
    //quando o jogador tocar no obstaculo ele aumenta a velocidade
    colisao(jogador) {
      if (
        this.posY + this.altura >= jogador.yInicial &&
        this.posY <= jogador.yFinal &&
        this.posX + this.largura >= jogador.xInicial &&
        this.posX <= jogador.xFinal
      ) {
        this.velocidade += 1; // Aumenta o valor aleatório de velocidade
        return true;
      } else {
        return false;
      }
    }
  }