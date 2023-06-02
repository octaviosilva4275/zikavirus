function executarJogo(){
    background(imgFundo);

  // Desenha a bomba
  bomba.atualizar();
  bomba.desenhar();
  

    // Verifica colisão com a bomba
    if (bomba.colisao(jogador)) {
      som_explosao.play();
      bomba = new Bomba();
      maximo = 5;
      vidas --;
      if(vidas == 0){
        controleTela = "FIM";
        mostraFim;
        pontos = 0;
        vidas = 3 
        jogador = new Jogador
      }
    }

    for (let i = obstaculos.length - 1; i >= 0; i--) {
      let obstaculo = obstaculos[i];
      obstaculo.atualizar();
      obstaculo.desenhar();
  
      if (obstaculo.colisao(jogador)) {
        pontos++;
        
        som.play();
        maximo += 1;
        obstaculos.splice(i, 1);
        obstaculos.push(new Obstaculo(getRandomObstaculoImage()));

        if (obstaculos.length > 4) {
          obstaculos.splice(0, 1); // Remova o primeiro obstáculo
        }
      }
      
    }
    jogador.mova();
  
    textSize(20);
    text("Pontos: " + pontos, 10, 30);

    textSize(20);
    text("Vidas: " + vidas, 120, 30)
  }
  //quando o player 1 tocar em algumas dessas imagens ele volta
  function getRandomObstaculoImage() {
    let randomIndex = floor(random(1, 4));
    switch (randomIndex) {
      case 1:
        return imgEstrela;
      case 2:
        return imgCogumelo;
      case 3:
        return imgFlor;
    }
}