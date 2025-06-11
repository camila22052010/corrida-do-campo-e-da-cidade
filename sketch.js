function setup() {
  createCanvas(400, 400);
}

let xJogador = [0, 0, 0, 0, 0, 0];
let yJogador = [40, 100, 160, 220, 280, 340];
let jogador = ["🚗", "👩🏻‍🌾", "🏙", "🌾","💻","🌱"];
let teclas = ["q", "w", "e", "r","t", "y"];
let quantidade = jogador.length;

function draw() {
  ativaJogo();
  desenhaJogadores();
  desenhaLinhaDeChegada();
  verificaVencedor();
  textSize(20);
  text("vá até a linha de chegada!",60,20);
}

function ativaJogo() {
  if (focused == true) {
    background("#849F65");
  } else {
    background("rgb(134,47,47)");
  }
}

function desenhaJogadores() {
  textSize(40);
  for (let i = 0; i < quantidade; i++) {
    text(jogador[i], xJogador[i], yJogador[i]);
  }
}

function desenhaLinhaDeChegada() {
  fill("white"); 
  rect(350, 0, 10, 400)
  fill("black");
  for (let yAtual = 0; yAtual < 400; yAtual += 20) {
    rect(350, yAtual, 10, 10);
  }
}

function verificaVencedor() {
  for (let i = 0; i < quantidade; i++) {
    if (xJogador[i] > 350) {
      text(jogador[i] + " ganhou!", 50, 200);
      noLoop();
    }
  }
}

function keyReleased() {
  for (let i = 0; i < quantidade; i++) {
    if (key == teclas[i]) {
      xJogador[i] += random(20);
    }
  }
}
// referências: alura

