function Bispo(cor, posicao_inicial){
  this.cor = cor;
  this.posicao_inicial = posicao_inicial;
  this.col_labels = "ABCDEFGH";
  this.lin_labels = "87654321";
}

Bispo.prototype.movimentos_possiveis = function(){
  var lin = this.posicao_inicial.y;
  var col = this.posicao_inicial.x;
  posicoes = [];
  for(var i = 0; i < 8; i++){
    for(var j = 0; j < 8; j++){
      for(x=1; x<=8; x++){
        if((i == lin+x && j == col+x)||
              (i == lin+x && j == col-x)||
              (i == lin-x && j == col+x)||
              (i == lin-x && j == col-x)){
          if((i>=0 && i<=7) && (j>=0 && j<=7)){
            posicoes.push(this.col_labels[j] + this.lin_labels[i]);
          }
        }
      }
    }
  }
  console.log(posicoes);
  return posicoes;
}
