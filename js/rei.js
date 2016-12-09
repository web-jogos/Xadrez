COLUNAS_LABELS = "ABCDEFGH";
LINHAS_LABELS = "87654321";

//COR_MOVIMENTOS_POSSIVEIS = "rgb(64,224,208)";


function Rei(context, brancas_baixo, posicao_inicial, cor_branca, tile, sprite){
  this.sprite = sprite;
  this.context = context;
  this.cor_branca = cor_branca;
  this.posicao_inicial = posicao_inicial;
  this.tile = tile;
  this.x = COLUNAS_LABELS.indexOf(this.posicao_inicial[0]);
  this.y = LINHAS_LABELS.indexOf(this.posicao_inicial[1]);
  this.nome = "rei";
  //this.desenhaPeca();
}

Rei.prototype.getNome = function(){
  return this.nome;
}

Rei.prototype.getCor = function(){
  if(this.cor_branca == true)
  return branca;
  else return preta;
}

Rei.prototype.branca = function(){
  return this.cor_branca;
}

Rei.prototype.setY = function(y){
  this.y = LINHAS_LABELS.indexOf(y);
}

Rei.prototype.setTile = function(tile){
  this.tile = tile;
}

Rei.prototype.desenhaPeca = function(){
  if(this.tile.getLabel() != "00")
    this.context.drawImage(this.sprite, this.tile.getX(), this.tile.getY());
    this.context.closePath();
}

Rei.prototype.calculaMovimentosPossiveis = function(){
  var mov_possiveis = []

  x = this.x;
  y = this.y;

  if (x+1 < 8){
    mov_possiveis.push([y,x+1]);
  }
  if (x+1 < 8 && y+1 < 8){
    mov_possiveis.push([y+1, x+1]);
  }
  if (y+1 < 8){
    mov_possiveis.push([y+1, x]);
  }
  if (x-1 >= 0 && y+1 < 8){
    mov_possiveis.push([y+1, x-1]);
  }
  if (x-1 >= 0){
    mov_possiveis.push([y, x-1]);
  }
  if (x-1 >= 0 && y-1 >= 0){
    mov_possiveis.push([y-1, x-1]);
  }
  if (y-1 >= 0){
    mov_possiveis.push([y-1, x]);
  }
  if (x+1 < 8 && y-1 >= 0){
    mov_possiveis.push([y-1, x+1]);
  }

  return mov_possiveis;
}

Rei.prototype.movimentosPossiveis = function(){
  var mov_possiveis = this.calculaMovimentosPossiveis();
  var mov_possiveis_L = [];

  for(i = 0; i < mov_possiveis.length; i++){
    if(this.tile.getTabuleiro().getTileLabel([COLUNAS_LABELS[mov_possiveis[i][1]]+ LINHAS_LABELS[mov_possiveis[i][0]]]).esta_ocupada() == false)
    //|| this.tile.getTabuleiro().getTileLabel([COLUNAS_LABELS[mov_possiveis[i][1]]+ LINHAS_LABELS[mov_possiveis[i][0]]]).getPeca().branca() != this.branca())
      mov_possiveis_L.push([COLUNAS_LABELS[mov_possiveis[i][1]]+ LINHAS_LABELS[mov_possiveis[i][0]]]);
  }

  for(i = 0; i < mov_possiveis_L.length; i++){
    console.log(mov_possiveis_L[i]);
  }
  return mov_possiveis_L;
}
