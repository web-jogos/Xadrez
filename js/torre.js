function Torre(context, brancas_baixo, posicao_inicial, cor_branca, tile, sprite){
  this.sprite = sprite;
  this.context = context;
  this.cor_branca = cor_branca;
  this.posicao_inicial = posicao_inicial;
  this.tile = tile;
  this.x = COLUNAS_LABELS.indexOf(this.posicao_inicial[0]);
  this.y = LINHAS_LABELS.indexOf(this.posicao_inicial[1]);
  this.nome = "torre";
}

Torre.prototype.getNome = function(){
  return this.nome;
}

Torre.prototype.branca = function(){
  return this.cor_branca;
}

Torre.prototype.setX = function(x){
  this.x = COLUNAS_LABELS.indexOf(x);
}

Torre.prototype.setY = function(y){
  this.y = LINHAS_LABELS.indexOf(y);
}

Torre.prototype.setTile = function(tile){
  this.tile = tile;
}

Torre.prototype.desenhaPeca = function(){
  if(this.tile.getLabel() != "00")
    this.context.drawImage(this.sprite, this.tile.getX(), this.tile.getY());
    this.context.closePath();
}

Torre.prototype.calculaMovimentosPossiveis = function(){
  var mov_possiveis = []

  x = this.x;
  y = this.y;

  for(i = x+1; i < 8; i++){
    if(this.tile.getTabuleiro().getTileLabel([COLUNAS_LABELS[i]+LINHAS_LABELS[y]]).esta_ocupada() == false)
  //  || this.tile.getTabuleiro().getTileLabel([COLUNAS_LABELS[i] + LINHAS_LABELS[y]]).getPeca().branca() != this.branca())
      mov_possiveis.push([y, i]);
      else break;
  }

  for(i = x-1; i >= 0; i--){
    if(this.tile.getTabuleiro().getTileLabel([COLUNAS_LABELS[i]+LINHAS_LABELS[y]]).esta_ocupada() == false)
    //|| this.tile.getTabuleiro().getTileLabel([COLUNAS_LABELS[i] + LINHAS_LABELS[y]]).getPeca().branca() != this.branca())
      mov_possiveis.push([y, i]);
      else break;
  }

  for(i = y+1; i < 8; i++){
    if(this.tile.getTabuleiro().getTileLabel([COLUNAS_LABELS[x]+LINHAS_LABELS[i]]).esta_ocupada() == false)
    //|| this.tile.getTabuleiro().getTileLabel([COLUNAS_LABELS[x] + LINHAS_LABELS[i]]).getPeca().branca() != this.branca())
      mov_possiveis.push([i, x]);
      else break;
  }

  for(i = y-1; i >= 0; i--){
    if(this.tile.getTabuleiro().getTileLabel([COLUNAS_LABELS[x]+LINHAS_LABELS[i]]).esta_ocupada() == false)
    //|| this.tile.getTabuleiro().getTileLabel([COLUNAS_LABELS[x] + LINHAS_LABELS[i]]).getPeca().branca() != this.branca())
      mov_possiveis.push([i, x]);
      else break;
  }

  return mov_possiveis;
}

Torre.prototype.movimentosPossiveis = function(){
  var mov_possiveis = this.calculaMovimentosPossiveis();
  var mov_possiveis_L = [];

  for(i = 0; i < mov_possiveis.length; i++){
    mov_possiveis_L.push([COLUNAS_LABELS[mov_possiveis[i][1]]+ LINHAS_LABELS[mov_possiveis[i][0]]]);
  }

  for(i = 0; i < mov_possiveis_L.length; i++){
    console.log(mov_possiveis_L[i]);
  }
  return mov_possiveis_L;
}
