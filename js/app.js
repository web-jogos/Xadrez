/* Everaldo Gomes - everaldo.gomes@ifpr.edu.br
                    everaldo.gomes@gmail.com
  22/09/2016 - Tabuleiro de Xadrez

  Baseado na versão escrita por Raphael (RpxZero)
  https://github.com/RpxZero/Tabuleiro-Xadrez
*/

function createImage(path) {
    var elem = document.createElement("img");
    elem["src"] = path;
    return elem;
}

var torre_branca_imagem = createImage("res/images/pecas/brancas/torre.png");
var cavalo_branca_imagem = createImage("res/images/pecas/brancas/cavalo.png");
var bispo_branca_imagem = createImage("res/images/pecas/brancas/bispo.png");
var rainha_branca_imagem = createImage("res/images/pecas/brancas/rainha.png");
var rei_branca_imagem = createImage("res/images/pecas/brancas/rei.png");
var peao_branca_imagem = createImage("res/images/pecas/brancas/peao.png");

var torre_preta_imagem = createImage("res/images/pecas/pretas/torre.png");
var cavalo_preta_imagem = createImage("res/images/pecas/pretas/cavalo.png");
var bispo_preta_imagem = createImage("res/images/pecas/pretas/bispo.png");
var rainha_preta_imagem = createImage("res/images/pecas/pretas/rainha.png");
var rei_preta_imagem = createImage("res/images/pecas/pretas/rei.png");
var peao_preta_imagem = createImage("res/images/pecas/pretas/peao.png");



$(window).load(function(){
  var NUM_COLUNAS = 8;
  var LARGURA_CANVAS = 512;
  var ALTURA_CANVAS = 512;
  var LARGURA_BORDA = 5;


  var torre_branca_sprite = new Sprite(torre_branca_imagem, 0, 0, 64, 64);
  var cavalo_branca_sprite = new Sprite(cavalo_branca_imagem, 0, 0, 64, 64);
  var bispo_branca_sprite = new Sprite(bispo_branca_imagem, 0, 0, 64, 64);
  var rainha_branca_sprite = new Sprite(rainha_branca_imagem, 0, 0, 64, 64);
  var rei_branca_sprite = new Sprite(rei_branca_imagem, 0, 0, 64, 64);
  var peao_branca_sprite = new Sprite(peao_branca_imagem, 0, 0, 64, 64);
  var torre_preta_sprite = new Sprite(torre_preta_imagem, 0, 0, 64, 64);
  var cavalo_preta_sprite = new Sprite(cavalo_preta_imagem, 0, 0, 64, 64);
  var bispo_preta_sprite = new Sprite(bispo_preta_imagem, 0, 0, 64, 64);
  var rainha_preta_sprite = new Sprite(rainha_preta_imagem, 0, 0, 64, 64);
  var rei_preta_sprite = new Sprite(rei_preta_imagem, 0, 0, 64, 64);
  var peao_preta_sprite = new Sprite(peao_preta_imagem, 0, 0, 64, 64);

  var pecas_sprites = {
    brancas: {
      torre: torre_branca_sprite,
      cavalo: cavalo_branca_sprite,
      bispo: bispo_branca_sprite,
      rainha: rainha_branca_sprite,
      rei: rei_branca_sprite,
      peao: peao_branca_sprite
    },
    pretas: {
      torre: torre_preta_sprite,
      cavalo: cavalo_preta_sprite,
      bispo: bispo_preta_sprite,
      rainha: rainha_preta_sprite,
      rei: rei_preta_sprite,
      peao: peao_preta_sprite
    }
  };



  var canvas = document.createElement("canvas");
  canvas.width = LARGURA_CANVAS + 2 * LARGURA_BORDA;
  canvas.height = ALTURA_CANVAS + 2 * LARGURA_BORDA;
  var context = canvas.getContext("2d");
  document.body.appendChild(canvas);

  var tabuleiro = new Tabuleiro(context, 0, 0,
    LARGURA_CANVAS, ALTURA_CANVAS, NUM_COLUNAS,
    LARGURA_BORDA, pecas_sprites);

  tabuleiro.desenhar();

  $(tabuleiro).on('tabuleiro:click', function(event){
    console.log(event.clickData.tile);
  });
});
