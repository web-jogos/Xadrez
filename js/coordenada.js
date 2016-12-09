COLUNAS_LABELS = "ABCDEFGH";
LINHAS_LABELS = "87654321";

function Coordenada(label){
  this.x = COLUNAS_LABELS.indexOf(label[0]);
  this.y = LINHAS_LABELS.indexOf(label[1]);
}

//por prototype em tudo
function cor(){
  if((x+y)%2 == 0){
    this.cor_branca = true;
  }
  else
    this.cor_branca = false;
}

ocupada = false;
