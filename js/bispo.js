COLUNAS_LABELS = "ABCDEFGH";
LINHAS_LABELS = "87654321";

function Bispo(context, brancas_baixo, posicao_inicial, cor_branca, tile, sprite){
  this.sprite = sprite;
  this.context = context;
  this.cor_branca = cor_branca;
  this.posicao_inicial = posicao_inicial;
  this.tile = tile;
  this.x = COLUNAS_LABELS.indexOf(this.posicao_inicial[0]);
  this.y = LINHAS_LABELS.indexOf(this.posicao_inicial[1]);
  this.nome = "bispo";
}

Bispo.prototype.getNome = function(){
  return this.nome;
}

Bispo.prototype.branca = function(){
  return this.cor_branca;
}

Bispo.prototype.setX = function(x){
  this.x = COLUNAS_LABELS.indexOf(x);
}

Bispo.prototype.setY = function(y){
  this.y = LINHAS_LABELS.indexOf(y);
}

Bispo.prototype.setTile = function(tile){
  this.tile = tile;
}

Bispo.prototype.desenhaPeca = function(){
  if(this.tile.getLabel() != "00")
    this.context.drawImage(this.sprite, this.tile.getX(), this.tile.getY());
    this.context.closePath();
}

Bispo.prototype.calculaMovimentosPossiveis = function(){
  var mov_possiveis = [];

  x = this.x;
  y = this.y;

  j = x+1;
  i = y+1;
  while(i < 8 && j < 8){
    if(this.tile.getTabuleiro().getTileLabel([COLUNAS_LABELS[j] + LINHAS_LABELS[i]]).esta_ocupada() == false){
    //|| this.tile.getTabuleiro().getTileLabel([COLUNAS_LABELS[j] + LINHAS_LABELS[i]]).getPeca().branca() != this.branca()){
      mov_possiveis.push([COLUNAS_LABELS[j] + LINHAS_LABELS[i]]);
      i++;
      j++;
    }
    else break;
  }

  j = x+1;
  i = y-1;
  while(j < 8 && i >= 0){
    if(this.tile.getTabuleiro().getTileLabel([COLUNAS_LABELS[j] + LINHAS_LABELS[i]]).esta_ocupada() == false){
    //|| this.tile.getTabuleiro().getTileLabel([COLUNAS_LABELS[j] + LINHAS_LABELS[i]]).getPeca().branca() != this.branca()){
      mov_possiveis.push([COLUNAS_LABELS[j] + LINHAS_LABELS[i]]);
      i--;
      j++;
    }
    else break;
  }

  j = x-1;
  i = y+1;
  while(j >= 0 && i < 8){
    if(this.tile.getTabuleiro().getTileLabel([COLUNAS_LABELS[j] + LINHAS_LABELS[i]]).esta_ocupada() == false){
    //|| this.tile.getTabuleiro().getTileLabel([COLUNAS_LABELS[j] + LINHAS_LABELS[i]]).getPeca().branca() != this.branca()){
      mov_possiveis.push([COLUNAS_LABELS[j] + LINHAS_LABELS[i]]);
      i++;
      j--;
    }
    else break;
  }

  j = x-1;
  i = y-1;
  while(i >= 0 && j >= 0){
    if(this.tile.getTabuleiro().getTileLabel([COLUNAS_LABELS[j] + LINHAS_LABELS[i]]).esta_ocupada() == false){
    //|| this.tile.getTabuleiro().getTileLabel([COLUNAS_LABELS[j] + LINHAS_LABELS[i]]).getPeca().branca() != this.branca()){
      mov_possiveis.push([COLUNAS_LABELS[j] + LINHAS_LABELS[i]]);
      i--;
      j--;
    }
    else break;
  }

/*
  for(var i = 0; i < 8; i++){
    for(var j = 0; j < 8; j++){
      for(x=1; x<=8; x++){
        if((i == lin+x && j == col+x)||
              (i == lin+x && j == col-x)||
              (i == lin-x && j == col+x)||
              (i == lin-x && j == col-x)){
          if((i>=0 && i<=7) && (j>=0 && j<=7) && this.tile.getTabuleiro().getTileLabel([COLUNAS_LABELS[j] + LINHAS_LABELS[i]]).esta_ocupada() == false){
              mov_possiveis.push([COLUNAS_LABELS[j] + LINHAS_LABELS[i]]);
          }
        }
      }
    }
  }
  //console.log(posicoes);
  */
  return mov_possiveis;
}

Bispo.prototype.movimentosPossiveis = function(){
  var mov_possiveis = this.calculaMovimentosPossiveis();

  for(i = 0; i < mov_possiveis.length; i++){
    console.log(mov_possiveis[i]);
  }
  return mov_possiveis;
}
