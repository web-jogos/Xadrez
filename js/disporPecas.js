function DisporPecas(context, tabuleiro){
  var bispoB = new Image();
  var bispoP = new Image();
  var cavaloB = new Image();
  var cavaloP = new Image();
  var peaoB = new Image();
  var peaoP = new Image();
  var rainhaB = new Image();
  var rainhaP = new Image();
  var reiB = new Image();
  var reiP = new Image();
  var torreB = new Image();
  var torreP = new Image();

  bispoB.src = "images/Pecas Xadrez/BispoB.png";
  bispoP.src = "images/Pecas Xadrez/BispoP.png";
  cavaloB.src = "images/Pecas Xadrez/CavaloDB.png";
  cavaloP.src = "images/Pecas Xadrez/CavaloDP.png";
  peaoB.src = "images/Pecas Xadrez/PeaoB.png";
  peaoP.src = "images/Pecas Xadrez/PeaoP.png";
  rainhaB.src = "images/Pecas Xadrez/RainhaB.png";
  rainhaP.src = "images/Pecas Xadrez/RainhaP.png";
  reiB.src = "images/Pecas Xadrez/ReiB.png";
  reiP.src = "images/Pecas Xadrez/ReiP.png";
  torreB.src = "images/Pecas Xadrez/TorreB.png";
  torreP.src = "images/Pecas Xadrez/TorreP.png";


  brancas_baixo = true;
  //this.tabuleiro = tabuleiro;
  if (brancas_baixo == true){
    rei_branco = new Rei(context, brancas_baixo, "E1", true, tabuleiro.getTileLabel("E1"), reiB);
    tabuleiro.getTileLabel("E1").setPeca(rei_branco);
    rainha_branco = new Rainha(context, brancas_baixo, "D1", true, tabuleiro.getTileLabel("D1"), rainhaB);
    tabuleiro.getTileLabel("D1").setPeca(rainha_branco);
    bispo_branco_1 = new Bispo(context, brancas_baixo, "C1", true, tabuleiro.getTileLabel("C1"), bispoB);
    tabuleiro.getTileLabel("C1").setPeca(bispo_branco_1);
    bispo_branco_2 = new Bispo(context, brancas_baixo, "F1", true, tabuleiro.getTileLabel("F1"), bispoB);
    tabuleiro.getTileLabel("F1").setPeca(bispo_branco_2);
    cavalo_branco_1 = new Cavalo(context, brancas_baixo, "B1", true, tabuleiro.getTileLabel("B1"), cavaloB);
    tabuleiro.getTileLabel("B1").setPeca(cavalo_branco_1);
    cavalo_branco_2 = new Cavalo(context, brancas_baixo, "G1", true, tabuleiro.getTileLabel("G1"), cavaloB);
    tabuleiro.getTileLabel("G1").setPeca(cavalo_branco_2);
    torre_branco_1 = new Torre(context, brancas_baixo, "A1", true, tabuleiro.getTileLabel("A1"), torreB);
    tabuleiro.getTileLabel("A1").setPeca(torre_branco_1);
    torre_branco_2 = new Torre(context, brancas_baixo, "H1", true, tabuleiro.getTileLabel("H1"), torreB);
    tabuleiro.getTileLabel("H1").setPeca(torre_branco_2);
    peao_branco_1 = new Peao(context, brancas_baixo, "A2", true, tabuleiro.getTileLabel("A2"), peaoB);
    tabuleiro.getTileLabel("A2").setPeca(peao_branco_1);
    peao_branco_2 = new Peao(context, brancas_baixo, "B2", true, tabuleiro.getTileLabel("B2"), peaoB);
    tabuleiro.getTileLabel("B2").setPeca(peao_branco_2);
    peao_branco_3 = new Peao(context, brancas_baixo, "C2", true, tabuleiro.getTileLabel("C2"), peaoB);
    tabuleiro.getTileLabel("C2").setPeca(peao_branco_3);
    peao_branco_4 = new Peao(context, brancas_baixo, "D2", true, tabuleiro.getTileLabel("D2"), peaoB);
    tabuleiro.getTileLabel("D2").setPeca(peao_branco_4);
    peao_branco_5 = new Peao(context, brancas_baixo, "E2", true, tabuleiro.getTileLabel("E2"), peaoB);
    tabuleiro.getTileLabel("E2").setPeca(peao_branco_5);
    peao_branco_6 = new Peao(context, brancas_baixo, "F2", true, tabuleiro.getTileLabel("F2"), peaoB);
    tabuleiro.getTileLabel("F2").setPeca(peao_branco_6);
    peao_branco_7 = new Peao(context, brancas_baixo, "G2", true, tabuleiro.getTileLabel("G2"), peaoB);
    tabuleiro.getTileLabel("G2").setPeca(peao_branco_7);
    peao_branco_8 = new Peao(context, brancas_baixo, "H2", true, tabuleiro.getTileLabel("H2"), peaoB);
    tabuleiro.getTileLabel("H2").setPeca(peao_branco_8);


    rei_preto = new Rei(context, brancas_baixo, "E8", false, tabuleiro.getTileLabel("E8"), reiP);
    tabuleiro.getTileLabel("E8").setPeca(rei_preto);
    rainha_preto = new Rainha(context, brancas_baixo, "D8", false, tabuleiro.getTileLabel("D8"), rainhaP);
    tabuleiro.getTileLabel("D8").setPeca(rainha_preto);
    bispo_preto_1 = new Bispo(context, brancas_baixo, "C8", false, tabuleiro.getTileLabel("C8"), bispoP);
    tabuleiro.getTileLabel("C8").setPeca(bispo_preto_1);
    bispo_preto_2 = new Bispo(context, brancas_baixo, "F8", false, tabuleiro.getTileLabel("F8"), bispoP);
    tabuleiro.getTileLabel("F8").setPeca(bispo_preto_2);
    cavalo_preto_1 = new Cavalo(context, brancas_baixo, "B8", false, tabuleiro.getTileLabel("B8"), cavaloP);
    tabuleiro.getTileLabel("B8").setPeca(cavalo_preto_1);
    cavalo_preto_2 = new Cavalo(context, brancas_baixo, "G8", false, tabuleiro.getTileLabel("G8"), cavaloP);
    tabuleiro.getTileLabel("G8").setPeca(cavalo_preto_2);
    torre_preto_1 = new Torre(context, brancas_baixo, "A8", false, tabuleiro.getTileLabel("A8"), torreP);
    tabuleiro.getTileLabel("A8").setPeca(torre_preto_1);
    torre_preto_2 = new Torre(context, brancas_baixo, "H8", false, tabuleiro.getTileLabel("H8"), torreP);
    tabuleiro.getTileLabel("H8").setPeca(torre_preto_2);
    peao_preto_1 = new Peao(context, brancas_baixo, "A7", false, tabuleiro.getTileLabel("A7"), peaoP);
    tabuleiro.getTileLabel("A7").setPeca(peao_preto_1);
    peao_preto_2 = new Peao(context, brancas_baixo, "B7", false, tabuleiro.getTileLabel("B7"), peaoP);
    tabuleiro.getTileLabel("B7").setPeca(peao_preto_2);
    peao_preto_3 = new Peao(context, brancas_baixo, "C7", false, tabuleiro.getTileLabel("C7"), peaoP);
    tabuleiro.getTileLabel("C7").setPeca(peao_preto_3);
    peao_preto_4 = new Peao(context, brancas_baixo, "D7", false, tabuleiro.getTileLabel("D7"), peaoP);
    tabuleiro.getTileLabel("D7").setPeca(peao_preto_4);
    peao_preto_5 = new Peao(context, brancas_baixo, "E7", false, tabuleiro.getTileLabel("E7"), peaoP);
    tabuleiro.getTileLabel("E7").setPeca(peao_preto_5);
    peao_preto_6 = new Peao(context, brancas_baixo, "F7", false, tabuleiro.getTileLabel("F7"), peaoP);
    tabuleiro.getTileLabel("F7").setPeca(peao_preto_6);
    peao_preto_7 = new Peao(context, brancas_baixo, "G7", false, tabuleiro.getTileLabel("G7"), peaoP);
    tabuleiro.getTileLabel("G7").setPeca(peao_preto_7);
    peao_preto_8 = new Peao(context, brancas_baixo, "H7", false, tabuleiro.getTileLabel("H7"), peaoP);
    tabuleiro.getTileLabel("H7").setPeca(peao_preto_8);
  }
  else {
    rei_branco = new Rei(context, brancas_baixo, "D8", true, tabuleiro.getTileLabel("D8"), reiB);
    tabuleiro.getTileLabel("D8").setPeca(rei_branco);
    rainha_branco = new Rainha(context, brancas_baixo, "E8", true, tabuleiro.getTileLabel("E8"), rainhaB);
    tabuleiro.getTileLabel("E8").setPeca(rainha_branco);
    bispo_branco_1 = new Bispo(context, brancas_baixo, "C8", true, tabuleiro.getTileLabel("C8"), bispoB);
    tabuleiro.getTileLabel("C8").setPeca(bispo_branco_1);
    bispo_branco_2 = new Bispo(context, brancas_baixo, "F8", true, tabuleiro.getTileLabel("F8"), bispoB);
    tabuleiro.getTileLabel("F8").setPeca(bispo_branco_2);
    cavalo_branco_1 = new Cavalo(context, brancas_baixo, "B8", true, tabuleiro.getTileLabel("B8"), cavaloB);
    tabuleiro.getTileLabel("B8").setPeca(cavalo_branco_1);
    cavalo_branco_2 = new Cavalo(context, brancas_baixo, "G8", true, tabuleiro.getTileLabel("G8"), cavaloB);
    tabuleiro.getTileLabel("G8").setPeca(cavalo_branco_2);
    torre_branco_1 = new Torre(context, brancas_baixo, "A8", true, tabuleiro.getTileLabel("A8"), torreB);
    tabuleiro.getTileLabel("A8").setPeca(torre_branco_1);
    torre_branco_2 = new Torre(context, brancas_baixo, "H8", true, tabuleiro.getTileLabel("H8"), torreB);
    tabuleiro.getTileLabel("H8").setPeca(torre_branco_2);
    peao_branco_1 = new Peao(context, brancas_baixo, "A7", true, tabuleiro.getTileLabel("A7"), peaoB);
    tabuleiro.getTileLabel("A7").setPeca(peao_branco_1);
    peao_branco_2 = new Peao(context, brancas_baixo, "B7", true, tabuleiro.getTileLabel("B7"), peaoB);
    tabuleiro.getTileLabel("B7").setPeca(peao_branco_2);
    peao_branco_3 = new Peao(context, brancas_baixo, "C7", true, tabuleiro.getTileLabel("C7"), peaoB);
    tabuleiro.getTileLabel("C7").setPeca(peao_branco_3);
    peao_branco_4 = new Peao(context, brancas_baixo, "D7", true, tabuleiro.getTileLabel("D7"), peaoB);
    tabuleiro.getTileLabel("D7").setPeca(peao_branco_4);
    peao_branco_5 = new Peao(context, brancas_baixo, "E7", true, tabuleiro.getTileLabel("E7"), peaoB);
    tabuleiro.getTileLabel("E7").setPeca(peao_branco_5);
    peao_branco_6 = new Peao(context, brancas_baixo, "F7", true, tabuleiro.getTileLabel("F7"), peaoB);
    tabuleiro.getTileLabel("F7").setPeca(peao_branco_6);
    peao_branco_7 = new Peao(context, brancas_baixo, "G7", true, tabuleiro.getTileLabel("G7"), peaoB);
    tabuleiro.getTileLabel("G7").setPeca(peao_branco_7);
    peao_branco_8 = new Peao(context, brancas_baixo, "H7", true, tabuleiro.getTileLabel("H7"), peaoB);
    tabuleiro.getTileLabel("H7").setPeca(peao_branco_8);

    rei_preto = new Rei(context, brancas_baixo, "D1", false, tabuleiro.getTileLabel("D1"), reiP);
    tabuleiro.getTileLabel("D1").setPeca(rei_preto);
    rainha_preto = new Rainha(context, brancas_baixo, "E1", true, tabuleiro.getTileLabel("E1"), rainhaP);
    tabuleiro.getTileLabel("E1").setPeca(rainha_preto);
    bispo_preto_1 = new Bispo(context, brancas_baixo, "C1", true, tabuleiro.getTileLabel("C1"), bispoP);
    tabuleiro.getTileLabel("C1").setPeca(bispo_preto_1);
    bispo_preto_2 = new Bispo(context, brancas_baixo, "F1", true, tabuleiro.getTileLabel("F1"), bispoP);
    tabuleiro.getTileLabel("F1").setPeca(bispo_preto_2);
    cavalo_preto_1 = new Cavalo(context, brancas_baixo, "B1", true, tabuleiro.getTileLabel("B1"), cavaloP);
    tabuleiro.getTileLabel("B1").setPeca(cavalo_preto_1);
    cavalo_preto_2 = new Cavalo(context, brancas_baixo, "G1", true, tabuleiro.getTileLabel("G1"), cavaloP);
    tabuleiro.getTileLabel("G1").setPeca(cavalo_preto_2);
    torre_preto_1 = new Torre(context, brancas_baixo, "A1", true, tabuleiro.getTileLabel("A1"), torreP);
    tabuleiro.getTileLabel("A1").setPeca(torre_preto_1);
    torre_preto_2 = new Torre(context, brancas_baixo, "H1", true, tabuleiro.getTileLabel("H1"), torreP);
    tabuleiro.getTileLabel("H1").setPeca(torre_preto_2);
    peao_preto_1 = new Peao(context, brancas_baixo, "A2", true, tabuleiro.getTileLabel("A2"), peaoP);
    tabuleiro.getTileLabel("A2").setPeca(peao_preto_1);
    peao_preto_2 = new Peao(context, brancas_baixo, "B2", true, tabuleiro.getTileLabel("B2"), peaoP);
    tabuleiro.getTileLabel("B2").setPeca(peao_preto_2);
    peao_preto_3 = new Peao(context, brancas_baixo, "C2", true, tabuleiro.getTileLabel("C2"), peaoP);
    tabuleiro.getTileLabel("C2").setPeca(peao_preto_3);
    peao_preto_4 = new Peao(context, brancas_baixo, "D2", true, tabuleiro.getTileLabel("D2"), peaoP);
    tabuleiro.getTileLabel("D2").setPeca(peao_preto_4);
    peao_preto_5 = new Peao(context, brancas_baixo, "E2", true, tabuleiro.getTileLabel("E2"), peaoP);
    tabuleiro.getTileLabel("E2").setPeca(peao_preto_5);
    peao_preto_6 = new Peao(context, brancas_baixo, "F2", true, tabuleiro.getTileLabel("F2"), peaoP);
    tabuleiro.getTileLabel("F2").setPeca(peao_preto_6);
    peao_preto_7 = new Peao(context, brancas_baixo, "G2", true, tabuleiro.getTileLabel("G2"), peaoP);
    tabuleiro.getTileLabel("G2").setPeca(peao_preto_7);
    peao_preto_8 = new Peao(context, brancas_baixo, "H2", true, tabuleiro.getTileLabel("H2"), peaoP);
    tabuleiro.getTileLabel("H2").setPeca(peao_preto_8);
  }
}

DisporPecas.prototype.desenhaPecas = function(){
  rei_branco.desenhaPeca();
  rainha_branco.desenhaPeca();
  bispo_branco_1.desenhaPeca();
  bispo_branco_2.desenhaPeca();
  cavalo_branco_1.desenhaPeca();
  cavalo_branco_2.desenhaPeca();
  torre_branco_1.desenhaPeca();
  torre_branco_2.desenhaPeca();
  peao_branco_1.desenhaPeca();
  peao_branco_2.desenhaPeca();
  peao_branco_3.desenhaPeca();
  peao_branco_4.desenhaPeca();
  peao_branco_5.desenhaPeca();
  peao_branco_6.desenhaPeca();
  peao_branco_7.desenhaPeca();
  peao_branco_8.desenhaPeca();

  rei_preto.desenhaPeca();
  rainha_preto.desenhaPeca();
  bispo_preto_1.desenhaPeca();
  bispo_preto_2.desenhaPeca();
  cavalo_preto_1.desenhaPeca();
  cavalo_preto_2.desenhaPeca();
  torre_preto_1.desenhaPeca();
  torre_preto_2.desenhaPeca();
  peao_preto_1.desenhaPeca();
  peao_preto_2.desenhaPeca();
  peao_preto_3.desenhaPeca();
  peao_preto_4.desenhaPeca();
  peao_preto_5.desenhaPeca();
  peao_preto_6.desenhaPeca();
  peao_preto_7.desenhaPeca();
  peao_preto_8.desenhaPeca();
}
