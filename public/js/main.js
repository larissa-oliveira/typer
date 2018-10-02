var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");

// Executa as funções quando a pagina eh carregada;
$(function(){
  atualizaTamanhoFrase();
  inicializaContadores();
  inicializaCronometro();
  mudaCorDaBorda();
  $("#botao-reiniciar").click(reiniciaJogo);
  $("#usuarios").selectize({
    create: true,
    sortField: 'text'
  });
  $(".tooltip").tooltipster({
    trigger: "custom"
  });

  atualizaPlacar();
});

function atualizaTempoInicial(tempo) {
  tempoInicial = tempo;
  $("#tempo-digitacao").text(tempo);
}

// VOLTAR AO CAPITULO 1 P/ ENTENDER MELHOR ESTE TRECHO //
function atualizaTamanhoFrase(){
  var frase = $(".frase").text();
  var numPalavras = frase.split(" ").length;
  var tamanhoFrase = $("#tamanho-frase");
  tamanhoFrase.text(numPalavras);
  //--------------------------------------------------------------//
  //Split = divide o conteudo entre os espaços;
  //(/\S+/) =  uma expressão regular que busca qualquer caractere, exceto espaço vazio;
}

function inicializaContadores(){
  campo.on("input", function(){
  var conteudo = campo.val();
  var qtdPalavras = conteudo.split(/\S+/).length -1;

  $("#contador-palavras").text(qtdPalavras);

  var qtdCaracteres =  conteudo.length;
  $("#contador-caracteres").text(qtdCaracteres)
  });
}

function inicializaCronometro(){
  campo.one("focus", function(){
  var tempoRestante = $("#tempo-digitacao").text();
  var cronometroID = setInterval(function(){
  tempoRestante--;
  $("#tempo-digitacao").text(tempoRestante);

  if(tempoRestante < 1){
    campo.attr("disabled", true);
    clearInterval(cronometroID);
    campo.toggleClass("campo-desativado"); // adiciona uma classe se não existe, e remove se já existe; Jquery
    inserePlacar();
    }
    }, 1000);
  });
}

function mudaCorDaBorda(){
  campo.on("input", function(){
  var frase = $(".frase").text();
  var digitado = campo.val();
  var comparacao = frase.substring(0, digitado.length);

  if(digitado == comparacao){
    campo.addClass("borda-verde");
    campo.removeClass("borda-vermelha");
  }else{
    campo.addClass("borda-vermelha");
    campo.removeClass("borda-verde");
    }
  });
}

function reiniciaJogo(){
  campo.attr("disabled", false);
  campo.val("");
  $("#contador-caracteres").text("0");
  $("#contador-palavras").text("0");
  $("#tempo-digitacao").text(tempoInicial);
  inicializaCronometro();
  campo.toggleClass("campo-desativado");
  campo.removeClass("borda-verde");
  campo.removeClass("borda-vermelha");
}
