COLUNAS_LABELS = "ABCDEFGH";
LINHAS_LABELS = "87654321";
function Rainha(context, brancas_baixo, posicao_inicial, cor_branca, tile, sprite){
  this.sprite = sprite;
  this.context = context;
  this.cor_branca = cor_branca;
  this.posicao_inicial = posicao_inicial;
  this.tile = tile;
  this.x = COLUNAS_LABELS.indexOf(this.posicao_inicial[0]);
  this.y = LINHAS_LABELS.indexOf(this.posicao_inicial[1]);
  this.nome = "rainha";
}

Rainha.prototype.getNome = function(){
  return this.nome;
}

Rainha.prototype.branca = function(){
  return this.cor_branca;
}

Rainha.prototype.setX = function(x){
  this.x = COLUNAS_LABELS.indexOf(x);
}

Rainha.prototype.setY = function(y){
  this.y = LINHAS_LABELS.indexOf(y);
}

Rainha.prototype.setTile = function(tile){
  this.tile = tile;
}

Rainha.prototype.desenhaPeca = function(){
  if(this.tile.getLabel() != "00")
    this.context.drawImage(this.sprite, this.tile.getX(), this.tile.getY());
    this.context.closePath();
}

Rainha.prototype.calculaMovimentosPossiveis = function(){
  mov_possiveis = [];

  x = this.x;
  y = this.y;

  i = 1;
  while (x+i < 8){
    if(this.tile.getTabuleiro().getTileLabel([COLUNAS_LABELS[x+i] + LINHAS_LABELS[y]]).esta_ocupada() == false){
     //|| this.tile.getTabuleiro().getTileLabel([COLUNAS_LABELS[x+i] + LINHAS_LABELS[y]]).getPeca().branca() != this.branca()){
      mov_possiveis.push([y,x+i]);
      i++;
    }
    else break;
  }
  i = 1;
  while (x+i < 8 && y+i < 8){
    if(this.tile.getTabuleiro().getTileLabel([COLUNAS_LABELS[x+i] + LINHAS_LABELS[y+i]]).esta_ocupada() == false){
    // || this.tile.getTabuleiro().getTileLabel([COLUNAS_LABELS[x+i] + LINHAS_LABELS[y+i]]).getPeca().branca() != this.branca()){
      mov_possiveis.push([y+i, x+i]);
      i++;
    }
    else break;
  }
  i = 1;
  while (y+i < 8){
    if(this.tile.getTabuleiro().getTileLabel([COLUNAS_LABELS[x] + LINHAS_LABELS[y+i]]).esta_ocupada() == false){
     //|| this.tile.getTabuleiro().getTileLabel([COLUNAS_LABELS[x] + LINHAS_LABELS[y+i]]).getPeca().branca() != this.branca()){
      mov_possiveis.push([y+i, x]);
      i++;
    }
    else break;
  }
  i = 1;
  while (x-i >= 0 && y+i < 8){
    if(this.tile.getTabuleiro().getTileLabel([COLUNAS_LABELS[x-i] + LINHAS_LABELS[y+i]]).esta_ocupada() == false){
     //|| this.tile.getTabuleiro().getTileLabel([COLUNAS_LABELS[x-i] + LINHAS_LABELS[y+i]]).getPeca().branca() != this.branca()){
      mov_possiveis.push([y+i, x-i]);
      i++;
    }
    else break;
  }
  i = 1;
  while (x-i >= 0){
    if(this.tile.getTabuleiro().getTileLabel([COLUNAS_LABELS[x-i] + LINHAS_LABELS[y]]).esta_ocupada() == false){
     //|| this.tile.getTabuleiro().getTileLabel([COLUNAS_LABELS[x-i] + LINHAS_LABELS[y]]).getPeca().branca() != this.branca()){
      mov_possiveis.push([y, x-i]);
      i++;
    }
    else break;
  }
  i = 1;
  while (x-i >= 0 && y-i >= 0){
    if(this.tile.getTabuleiro().getTileLabel([COLUNAS_LABELS[x-i] + LINHAS_LABELS[y-i]]).esta_ocupada() == false){
    // || this.tile.getTabuleiro().getTileLabel([COLUNAS_LABELS[x-i] + LINHAS_LABELS[y-i]]).getPeca().branca() != this.branca()){
      mov_possiveis.push([y-i, x-i]);
      i++;
    }
    else break;
  }
  i = 1;
  while (y-i >= 0){
    if(this.tile.getTabuleiro().getTileLabel([COLUNAS_LABELS[x] + LINHAS_LABELS[y-i]]).esta_ocupada() == false){
    // || this.tile.getTabuleiro().getTileLabel([COLUNAS_LABELS[x] + LINHAS_LABELS[y-i]]).getPeca().branca() != this.branca()){
      mov_possiveis.push([y-i, x]);
      i++;
    }
    else break;
  }
  i = 1;
  while (x+i < 8 && y-i >= 0){
    if(this.tile.getTabuleiro().getTileLabel([COLUNAS_LABELS[x+i] + LINHAS_LABELS[y-i]]).esta_ocupada() == false){
    // || this.tile.getTabuleiro().getTileLabel([COLUNAS_LABELS[x+i] + LINHAS_LABELS[y-i]]).getPeca().branca() != this.branca()){
      mov_possiveis.push([y-i, x+i]);
      i++;
    }
    else break;
  }


  return mov_possiveis;
}

/*
Rainha.prototype.calculaMovimentosPossiveis = function(){
  mov_possiveis = [];
  var col_labels = COLUNAS_LABELS;
  var lin_labels = LINHAS_LABELS;
  var label = this.posicao_inicial;
  var c = col_labels.indexOf(label[0]);
  var l = lin_labels.indexOf(label[1]);

  //CIMA
  for(l -= 1; l >= 0; l -= 1){
    if(this.tile.getTabuleiro().getTileLabel([col_labels[c]+lin_labels[l]]).esta_ocupada() == false)
      mov_possiveis.push([col_labels[c] + lin_labels[l]]);
    else break;
  }

  //CIMADIREITA
  //paths += "\n";
  c = col_labels.indexOf(label[0]) +1;
  l = lin_labels.indexOf(label[1]) -1;
  while(c < col_labels.length && l >= 0){
    if(this.tile.getTabuleiro().getTileLabel([col_labels[c]+lin_labels[l]]).esta_ocupada() == false){
      mov_possiveis.push([col_labels[c] + lin_labels[l]]);
      c++;
      l--;
    }
    else break;
  }

  //DIREITA
  //paths += "\n";
  c = col_labels.indexOf(label[0]);
  l = lin_labels.indexOf(label[1]);
  for(c += 1; c < col_labels.length; c += 1){
    if(this.tile.getTabuleiro().getTileLabel([col_labels[c]+lin_labels[l]]).esta_ocupada() == false)
      mov_possiveis.push([col_labels[c] + lin_labels[l]]);
    else break;
  }

  //BAIXODIREITA
  //paths += "\n";
  c = col_labels.indexOf(label[0]) +1;
  l = lin_labels.indexOf(label[1]) +1;
  while(c < col_labels.length && l < lin_labels.length){
    if(this.tile.getTabuleiro().getTileLabel([col_labels[c]+lin_labels[l]]).esta_ocupada() == false){
      mov_possiveis.push([col_labels[c] + lin_labels[l]]);
      c++;
      l++;
    }
    else break;
  }

  //BAIXO
  //paths += "\n";
  c = col_labels.indexOf(label[0]);
  l = lin_labels.indexOf(label[1]);
  for(l += 1; l < lin_labels.length; l += 1){
    if(this.tile.getTabuleiro().getTileLabel([col_labels[c]+lin_labels[l]]).esta_ocupada() == false)
      mov_possiveis.push([col_labels[c] + lin_labels[l]]);
    else break;
  }

  //BAIXOESQUERDA
  //paths += "\n";
  c = col_labels.indexOf(label[0]) -1;
  l = lin_labels.indexOf(label[1]) +1;
  while(c >= 0 && l < lin_labels.length){
    if(this.tile.getTabuleiro().getTileLabel([col_labels[c]+lin_labels[l]]).esta_ocupada() == false){
      mov_possiveis.push([col_labels[c] + lin_labels[l]]);
      c--;
      l++;
    }
    else break;
  }

  //ESQUERDA
  //paths += "\n";
  c = col_labels.indexOf(label[0]);
  l = lin_labels.indexOf(label[1]);
  for(c -= 1; c >= 0; c -= 1){
    if(this.tile.getTabuleiro().getTileLabel([col_labels[c]+lin_labels[l]]).esta_ocupada() == false)
      mov_possiveis.push([col_labels[c] + lin_labels[l]]);
    else break;
  }

  //CIMAESQUERDA
  //paths += "\n";
  c = col_labels.indexOf(label[0]) -1;
  l = lin_labels.indexOf(label[1]) -1;
  while(c >= 0 && l >= 0){
    if(this.tile.getTabuleiro().getTileLabel([col_labels[c]+lin_labels[l]]).esta_ocupada() == false){
      mov_possiveis.push([col_labels[c] + lin_labels[l]]);
      c--;
      l--;
    }
    else break;
  }

  for(i = 0; i < mov_possiveis.length; i++){
    console.log(mov_possiveis[i]);
  }

  return mov_possiveis;
}*/

Rainha.prototype.movimentosPossiveis = function(){
  var mov_possiveis = this.calculaMovimentosPossiveis();
  var mov_possiveis_L = [];

  for(i = 0; i < mov_possiveis.length; i++){
    if(this.tile.getTabuleiro().getTileLabel([COLUNAS_LABELS[mov_possiveis[i][1]]+ LINHAS_LABELS[mov_possiveis[i][0]]]).esta_ocupada() == false)
      mov_possiveis_L.push([COLUNAS_LABELS[mov_possiveis[i][1]]+ LINHAS_LABELS[mov_possiveis[i][0]]]);
  }

  for(i = 0; i < mov_possiveis_L.length; i++){
    console.log(mov_possiveis_L[i]);
  }
  return mov_possiveis_L;
}
