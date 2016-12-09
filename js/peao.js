function Peao(context, brancas_baixo, posicao_inicial, cor_branca, tile, sprite){
  this.sprite = sprite;
  this.context = context;
  this.cor_branca = cor_branca;
  this.posicao_inicial = posicao_inicial;
  this.tile = tile;
  this.original_tile = tile;
  this.x = COLUNAS_LABELS.indexOf(this.posicao_inicial[0]);
  this.y = LINHAS_LABELS.indexOf(this.posicao_inicial[1]);
  this.brancas_baixo = brancas_baixo;
  this.nome = "peao";
}

Peao.prototype.getNome = function(){
  return this.nome;
}

Peao.prototype.branca = function(){
  return this.cor_branca;
}

Peao.prototype.setX = function(x){
  this.x = COLUNAS_LABELS.indexOf(x);
}

Peao.prototype.setY = function(y){
  this.y = LINHAS_LABELS.indexOf(y);
}

Peao.prototype.setTile = function(tile){
  this.tile = tile;
}

Peao.prototype.desenhaPeca = function(){
  if(this.tile.getLabel() != "00")
    this.context.drawImage(this.sprite, this.tile.getX(), this.tile.getY());
    this.context.closePath();
}

Peao.prototype.calculaMovimentosPossiveis = function(){
  var mov_possiveis = []

  x = this.x;
  y = this.y;

  if(this.brancas_baixo == true){
    if(this.cor_branca == true && y-1 >= 0 && (this.tile.getTabuleiro().getTileLabel([COLUNAS_LABELS[x]+LINHAS_LABELS[y-1]]).esta_ocupada() == false)){
    //|| this.tile.getTabuleiro().getTileLabel([COLUNAS_LABELS[x] + LINHAS_LABELS[y-1]]).getPeca().branca() != this.branca())){
      mov_possiveis.push([y-1, x]);
      if(this.tile == this.original_tile && y-2 >= 0 && (this.tile.getTabuleiro().getTileLabel([COLUNAS_LABELS[x]+LINHAS_LABELS[y-2]]).esta_ocupada() == false)){
      //|| this.tile.getTabuleiro().getTileLabel([COLUNAS_LABELS[x] + LINHAS_LABELS[y-2]]).getPeca().branca() != this.branca())){
        mov_possiveis.push([y-2, x]);
      }
    }
    if(this.cor_branca == false && y+1 < 8 && (this.tile.getTabuleiro().getTileLabel([COLUNAS_LABELS[x]+LINHAS_LABELS[y+1]]).esta_ocupada() == false)){
    //|| this.tile.getTabuleiro().getTileLabel([COLUNAS_LABELS[x] + LINHAS_LABELS[y+1]]).getPeca().branca() != this.branca())){
      mov_possiveis.push([y+1, x])
      if(this.tile == this.original_tile && y+2 < 8 && (this.tile.getTabuleiro().getTileLabel([COLUNAS_LABELS[x]+LINHAS_LABELS[y+2]]).esta_ocupada() == false)){
      //|| this.tile.getTabuleiro().getTileLabel([COLUNAS_LABELS[x] + LINHAS_LABELS[y+2]]).getPeca().branca() != this.branca())){
        mov_possiveis.push([y+2, x]);
      }
    }
  }
  return mov_possiveis;
}

Peao.prototype.movimentosPossiveis = function(){
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
