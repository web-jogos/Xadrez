COLUNAS_LABELS = "ABCDEFGH";
LINHAS_LABELS = "87654321";


function Coordenada(label){
  this.label = label;
  this.x = COLUNAS_LABELS.indexOf(label[0]);
  this.y = LINHAS_LABELS.indexOf(label[1]);
}

Coordenada.prototype.eh_valida() = function(){
  return this.x >= 0 && this.x < 8 &&
         this.y >= 0 && this.y < 8;
}

Coordenada.prototype.toString = function(){
  return this.label;
}


Coordenada.prototype.getTipoTile = function(){
  if((this.x + this.y) % 2 == 0){
    return TileBranco;
  }
  else {
    return TilePreto;
  }
}

Coordenada.prototype.mesma_linha = function(outra){
  return this.y == outra.y;
}

Coordenada.prototype.mesma_coluna = function(outra){
  return this.x == outra.x;
}

Coordenada.prototype.primeira_linha = function(){
  return this.y == 0;
}

Coordenada.prototype.ultima_linha = function(){
  return this.y == 7;
}

Coordenada.prototype.primeira_coluna = function(){
  return this.x == 0;
}


Coordenada.prototype.ultima_coluna = function(){
  return this.x == 7;
}


Coordenada.prototype.diagonal_esquerda = function(){

}

Coordenada.prototype.diagonal_direita = function(){

}

Coordenada.prototype.horizontal = function(){

}

Coordenada.prototype.vertical = function(){

}
