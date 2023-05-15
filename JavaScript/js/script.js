function ex01(){
    var inputA = document.getElementById("a");
    var inputB = document.getElementById("b");

    let a = inputA.value;

    inputA.value = inputB.value;
    inputB.value = a;
}
function ex01Limpa(){
    var inputA = document.getElementById("a");
    var inputB = document.getElementById("b");

    inputA.value = "";
    inputB.value = "";
}

function ex02(){
    var inputA = document.getElementById("c");
    var inputB = document.getElementById("d");

    let a =  parseInt(inputA.value);
    inputB.value = (a+1);
}

function ex02Limpa(){
    var inputA = document.getElementById("c");
    var inputB = document.getElementById("d");

    inputB.value = "";
    inputA.value = "";
}

function ex03(){
    var inputBase = parseInt(document.getElementById("base").value);
    var inputAltura = parseInt(document.getElementById("altura").value);
    var inputArea = document.getElementById("area");
    
    inputArea.value = ((inputBase*inputAltura)/2); 
}
function ex03Limpa(){
    var inputBase = document.getElementById("base");
    var inputAltura =document.getElementById("altura");
    var inputArea = document.getElementById("area");
    
    inputArea.value = ""; 
    inputAltura.value ="";
    inputBase.value ="";
}

function ex04(){
    var anosVida = parseFloat(document.getElementById("anos").value);
    var mesesVida = parseFloat(document.getElementById("meses").value);
    var diasVida = parseFloat(document.getElementById("dias").value);
    var idadedias = document.getElementById("idadedias");
    
    idadedias.value = ((anosVida * 365) + (mesesVida * 30) + diasVida);
}
function ex04Limpa(){
    var anosVida = document.getElementById("anos");
    var mesesVida = document.getElementById("meses");
    var diasVida = document.getElementById("dias");
    var idadedias = document.getElementById("idadedias");
   
    anosVida.value = "";
    mesesVida.value = "";
    diasVida.value = "";
    idadedias.value = "";
}

function ex05(){
    var totalEleitores = parseInt(document.getElementById("totalEleitores").value)
    var vBrancos = parseInt(document.getElementById("vBrancos").value)
    var Vnulos = parseInt(document.getElementById("Vnulos").value)
    var Validos = parseInt(document.getElementById("Validos").value)

    var vtBrancos = document.getElementById("vBrancos");
    vtBrancos.value = (vBrancos * 100)  / totalEleitores + "% dos votos foram brancos";

    var vtnulos = document.getElementById("Vnulos");
    vtnulos.value = (Vnulos * 100)  / totalEleitores + "% dos votos foram nulos";

    var tvalidos = document.getElementById("Validos");
    tvalidos.value = (Validos * 100)  / totalEleitores + "% dos votos foram validos";
}

function ex05Limpa(){
    vBrancos.value = "";
    Vnulos.value = "";
    Validos.value = "";
    totalEleitores.value ="";
}

function ex06(){
    var salario = parseFloat(document.getElementById("salario").value);
    var reajuste = parseFloat(document.getElementById("reajuste").value);
    var final = document.getElementById("salarioFinal");

    final.value = (salario + (salario * reajuste/100));
}

function ex06Limpa(){
    var final = document.getElementById("salarioFinal");

    salario.value = "";
    reajuste.value = "";
    final.value = "";
}

function ex07(){
    var custo = parseFloat(document.getElementById("custo").value);
    var valorFinal = document.getElementById("valorFinal");

    valorFinal.value = (custo + (custo * 0.28) + (custo * 0.45));
}

function ex07Limpa(){
    var valorFinal = document.getElementById("valorFinal");

    custo.value = "";
    valorFinal.value ="";
}

function ex08(){
   var CarrosVendidos = parseFloat(document.getElementById("CarrosVendidos").value);
   var ValorVendas = parseFloat(document.getElementById("ValorVendas").value);
   var SalarioFixo = parseFloat(document.getElementById("SalarioFixo").value);
   var Validos = document.getElementById("Validos2");
    
    Validos.value = (SalarioFixo + (CarrosVendidos * 300) + (ValorVendas * 0.05));
}

function ex08Limpa(){
    var Validos = document.getElementById("Validos2");
    CarrosVendidos.value = "";
    ValorVendas.value = "";
    SalarioFixo.value = "";
    Validos.value = "";
}

function ex09(){
    var Fahrenheit = parseFloat(document.getElementById("Fahrenheit").value);
    var Celsius = document.getElementById("Celsius");

    Celsius.value = ((Fahrenheit - 32)/9) * 5;
}

function ex09Limpa(){
    Celsius.value = "";
    Fahrenheit.value = "";
}

function ex10(){
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n3").value);
    var n3 = parseFloat(document.getElementById("n3").value);
    var media = document.getElementById("media");

    media.value = ((n1 * 2)+(n2 * 3)+(n3 * 5))/10;
}

function ex10Limpa(){
    n1.value = "";
    n2.value = "";
    n3.value = "";
    media.value = "";
}

function ex11(){
    var numero = parseFloat(document.getElementById("numero").value)
    var resultado = document.getElementById("resultado");

    if (numero > 10) {
        resultado.value = "Maior que 10";
    }else if (numero < 10){
        resultado.value = "Menor que 10"
    }else{
        resultado.value = "Número igual a 10"
    }
}

function ex11Limpa(){
    numero.value = "";
    resultado.value = "";
}

function ex12(){
    var num = parseFloat(document.getElementById("num").value);
    var result = document.getElementById("result");

    if (num > 0){
        result.value = "Valor positivo"
    }else if (num < 0){
        result.value = "Valor negativo"
    }else{
        result.value = "Valor é 0"
    }
}

function ex12Limpa(){
    num = document.getElementById("num");
    num.value = "";
    result.value = "";
}

function ex13(){
    maca = parseFloat(document.getElementById("maca").value);
    valormaca = document.getElementById("valormaca")

    if (maca >= 12){
        valormaca.value = ("Valor total R$ " + maca);
    }else{
        valormaca.value = ("Valor total R$ " + maca * 1.30);
    }
}

function ex13Limpa(){
    maca = document.getElementById("maca")
    valormaca.value = "";
    maca.value = ""
}

function ex14(){
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var situacao = document.getElementById("situacao");

    var media = (nota1 + nota2)/2;

    if (media >= 6){
        situacao.value = ("Aluno Aprovado com nota " + media)
    }else {
        situacao.value = ("Aluno Reprovado com nota " + media)
    }
}

function ex14Limpa(){
    nota1.value = ""
    nota2.value = ""
    situacao.value = ""
}

function ex15(){
    var AnoNasc = parseInt(document.getElementById("AnoNasc").value);
    var AnoAtual = parseInt(document.getElementById("AnoAtual").value);
    let statuss = document.getElementById("statuss");
    var idade = (AnoAtual - AnoNasc); 

    if (idade >= 16){
        statuss.value = ("Pode votar " + idade + " anos")
    }else{
        statuss.value = ("Não pode votar " + idade + " anos")
    }
}

function ex15Limpa(){
    AnoNasc.value = "";
    AnoAtual.value = "";
    statuss.value = "";
}
function ex16(){
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);
    var MaiorValor = document.getElementById("MaiorValor");

    if (valor1 > valor2){
        MaiorValor.value = ("Maior valor é " +valor1);
    }else if (valor1 < valor2){
        MaiorValor.value = ("Maior valor é "+ valor2);
    }else{
        MaiorValor.value =("Valores iguais");
    }
}
function ex16Limpa(){
    valor1.value = "";
    valor2.value = "";
    MaiorValor.value = "";
}

function ex17(){
    var val1 = parseFloat(document.getElementById("val1").value);
    var val2 = parseFloat(document.getElementById("val2").value);
    var ordem = document.getElementById("ordem");

    if (val1 > val2){
        ordem.value = (val2 + "-> " + val1);
    } else if (val1 < val2) {
        ordem.value = (val1 + "-> " + val2);
    }else {
        ordem.value = (val1 + "-> " + val2 + " valores iguais");
    }
}

function ex17Limpa(){
    val1.value = ""
    val2.value = ""
    ordem.value = ""
}

function ex18(){
    
    var horaInicio = parseInt(document.getElementById("horaInicio").value);
    var horaFinal = parseInt(document.getElementById("horaFinal").value);
    var durou = document.getElementById("durou");
    
    var duracao = (horaFinal - horaInicio);
    
    if (duracao <= 0){
        duracao += + 24
    }
    durou.value = ("Partida durou " + duracao + " horas");
}

function ex18Limpa(){
    horaInicio.value = ""
    horaFinal.value = ""
    durou.value = ""
}

function ex19(){
    var horasTra = parseInt(document.getElementById("horasTra").value);
    var valorHora = parseInt(document.getElementById("valorHora").value);
    var salFinal = document.getElementById("salFinal");
    var horasExtras = horasTra - 160;
    var salComExtra = ((160 * valorHora) + (horasExtras * (valorHora + (valorHora * 0.5))));

    if (horasTra > 160){
        salFinal.value = ("Salario com extras " + salComExtra)
    }else {
        salFinal.value = ("Salario: " + (horasTra * valorHora))
    }
}

function ex19Limpa(){
    horasTra.value = ""
    valorHora.value = ""
    salFinal.value = ""
}

function ex20(){
    var salFixo = parseInt(document.getElementById("salFixo").value);
    var valorVenda = parseInt(document.getElementById("valorVenda").value);
    var tot = document.getElementById("tot");
    var total

    if (valorVenda <= 1500){
        total = (salFixo + (valorVenda * 0.03))
    }else{
        total = (salFixo + (1500 * 0.03) + ((valorVenda - 1500) * 0.05));
    }
    tot.value = (total);
}

function ex20Limpa(){
    salFixo.value = "";
    valorVenda.value = "";
    tot.value = "";
}

function ex21(){

    var numConta = document.getElementById("numConta").value;
    var saldo = parseInt(document.getElementById("saldo").value);
    var credito = parseInt(document.getElementById("credito").value);
    var debito = parseInt(document.getElementById("debito").value);
    var visor = document.getElementById("visor");
    
    var saldoTotal = ((saldo + credito) - debito);

    if (saldoTotal > 0){
        visor.value = ("conta " + numConta + ": Saldo positivo de "+saldoTotal)
    }else if (saldoTotal == 0){
        visor.value = ("Saldo zerado")
    }else{
        visor.value = ("Saldo negativo de "+saldoTotal)
    }   
}

function ex21Limpa(){
    numConta.value = "";
    saldo.value = "";
    credito.value = "";
    debito.value = "";
    visor.value = "";
}

function ex22(){

    var QtdAtual = parseInt(document.getElementById("QtdAtual").value);
    var QtdMaxima = parseInt(document.getElementById("QtdMaxima").value);
    var QtdMinima = parseInt(document.getElementById("QtdMinima").value);
    var QtdMedia = document.getElementById("QtdMedia");
    var mediaEstoque;

    mediaEstoque = (QtdMaxima + QtdMinima)/2;

    if (QtdAtual >= mediaEstoque ){
        QtdMedia.value = ("Não efetuar compra");
    }else{
        QtdMedia.value = ("Efetuar compra");
    }
}


function ex22Limpa(){
    QtdAtual.value = ""
    QtdMaxima.value = ""
    QtdMinima.value = ""
    QtdMedia.value = ""
}

function ex23(){
    var V1 = parseFloat(document.getElementById("V1").value);
    var V2 = parseFloat(document.getElementById("V2").value);
    var V3 = parseFloat(document.getElementById("V3").value);
    var Vmaior = document.getElementById("Vmaior");
    var maior = V1
    
   if (maior < V2){
        maior = V2;
   }
   if (maior < V3){
        maior = V3;
   }
   Vmaior.value = ("O maior valor é: "+maior)
}

function ex23Limpa(){
    
    V1.value = ""
    V2.value = ""
    V3.value = ""
    Vmaior.value = ""
}

function ex24(){
    var Val1 = parseFloat(document.getElementById("Val1").value);
    var Val2 = parseFloat(document.getElementById("Val2").value);
    var Val3 = parseFloat(document.getElementById("Val3").value);
    var SomaMaior = document.getElementById("SomaMaior");
    var maior1 = Val1;
    var maior2 = Val2;
    
    if (Val3 > maior1){
        maior1 = Val3;
        if (Val1 > Val2){
            maior2 = Val1
        }
    }else if (Val3 > maior2){
        maior2 = Val3
    }
    SomaMaior.value = ("A soma de "+maior1 + " + "+ maior2 + " = " + (maior1+maior2))
}

function ex24Limpa(){
    Val1.value = ""
    Val2.value = ""
    Val3.value = ""
    SomaMaior.value = ""
}

function ex25(){
    var Val01 = parseFloat(document.getElementById("Val01").value);;
    var Val02= parseFloat(document.getElementById("Val02").value);;
    var Val03 = parseFloat(document.getElementById("Val03").value);
    var OrdemCrescente = document.getElementById("OrdemCrescente");
    var maior01 = Val01;
    var maior02 = Val02;
    var menor = Val03;

    if (Val03 > Val01){
        maior01 = Val03;
        if (Val01 > Val02){
            maior02 = Val01;
            menor = Val02
        }else{
            menor = Val01
        }
    }
    else if(Val03 > Val02){
        maior02 = Val03  
        menor = Val02
    }
    if (maior01 == Val03){
        if (Val02 > Val03){
            maior01 = Val02
            maior02 = Val03
            menor = Val01
        }
    }else if (maior01 == Val01){
        if(Val02 > Val01){
            maior01 = Val02;
            maior02 = Val01
        }
    }   
    OrdemCrescente.value = (menor + " -> " + maior02 + " -> " + maior01)
}

function ex25Limpa(){
    Val01.value = "";
    Val02.value = "";
    Val03.value = "";
    OrdemCrescente.value = "";
}

function ex26(){
    var A1 = parseFloat(document.getElementById("A1").value);
    var B1 = parseFloat(document.getElementById("B1").value);
    var C1 = parseFloat(document.getElementById("C1").value);
    var resultadoTriangulo = document.getElementById("resultadoTriangulo");

    if (A1 > (B1 + C1)){
        resultadoTriangulo.value = ("Não é triangulo");
    }else if(B1 > (A1 + C1)){
        resultadoTriangulo.value = ("Não é triangulo");
    }else if (C1 > (A1 + B1)){
        resultadoTriangulo.value = ("Não é triangulo");
    }else{
        resultadoTriangulo.value  = ("É triangulo");
    }
}  

function ex26Limpa(){
    A1.value = "";
    B1.value = "";
    C1.value = "";
    resultadoTriangulo.value = "";
}

function ex27(){
    var time1 = document.getElementById("time1").value;
    var gols1 = parseInt(document.getElementById("gols1").value);
    var time2 = document.getElementById("time2").value;
    var gols2 = parseInt(document.getElementById("gols2").value);
    var vence = document.getElementById("vence");

    if (gols1 > gols2){
        vence.value = ("Time vencedor "+time1+ " por " + gols1 + "X" + gols2);
    }else if (gols2 >gols1){
        vence.value = ("Time vencedor "+time2+ " por " + gols2 + "X" + gols1);
    }else{
        vence.value = ("Jogo empatado por " +gols1 +" X " + gols2);
    }
}

function ex27Limpa(){
    
    time1.value = "";
    gols1.value = "";
    time2.value = "";
    gols2.value = "";
    vence.value = ""
}

function ex28(){

    var p1 = parseInt(document.getElementById("p1").value);
    var p2 = parseInt(document.getElementById("p2").value);
    var men = document.getElementById("men");

    if (p1 > p2){
        men.value = ("O Primeiro valor "+p1+" é maior");
    }else if (p1 < p2){
        men.value = ("O Segundo valor "+p2+" é maior");
    }else{
        men.value = ("Valores iguais "+ p1 + " e " + p2);
    }
}

function ex28Limpa(){
    p1.value = "";
    p2.value = "";
    men.value = "";
}

function ex29(){
    var litrosCombus = parseInt(document.getElementById("litrosCombus").value);
    var tipoCombus = (document.getElementById("tipoCombus").value);
    var valorCombus = document.getElementById("valorCombus");
    var  VarlorConta

    if (tipoCombus == "A" || tipoCombus == "a" ){
        if (litrosCombus <=20){
            VarlorConta = (litrosCombus * 2.90) - ((litrosCombus * 2.90) * 0.03);
            valorCombus.value = ("R$ "+ VarlorConta);
        }else {
            VarlorConta = (litrosCombus * 2.90) - ((litrosCombus * 2.90) * 0.05);
            valorCombus.value = ("R$ "+ VarlorConta);
        }
    }else if (tipoCombus == "G" || tipoCombus == "g" ){
        if (litrosCombus <= 20){
            VarlorConta = (litrosCombus * 3.30) - ((litrosCombus *3.30) * 0.04);
            valorCombus.value = ("R$ "+ VarlorConta);
        }else{
            VarlorConta = (litrosCombus * 3.30) - ((litrosCombus * 3.30) * 0.06);
            valorCombus.value = ("R$ "+ VarlorConta);
        }
    }else{
        VarlorConta = ("Tipo invalido")
        valorCombus.value = ("R$ "+ VarlorConta);
    }
}

function ex29Limpa(){
    litrosCombus.value = "";
    tipoCombus.value = "";
    valorCombus.value = "";
}

function ex30(){
    var homem1 = parseInt(document.getElementById("homem1").value);
    var homem2 = parseInt(document.getElementById("homem2").value);
    var mulher1 = parseInt(document.getElementById("mulher1").value);
    var mulher2 = parseInt(document.getElementById("mulher2").value);
    var SomaIdade = document.getElementById("SomaIdade");
    var ProdutoIdade = document.getElementById("ProdutoIdade");
    var homemVelho;
    var homemNovo;
    var mulherVelha;
    var mulherNova;

    if (homem1 > homem2){
        homemVelho = homem1;
        homemNovo = homem2;
    }else{
        homemVelho = homem2;
        homemNovo = homem1;
    }

    if (mulher1 > mulher2){
        mulherVelha = mulher1;
        mulherNova = mulher2;
    }else{
        mulherVelha = mulher2;
        mulherNova = mulher1;
    }

    SomaIdade.value = ("A soma das idades é "+ (homemVelho + mulherNova));
    ProdutoIdade.value = ("O produto das idades é "+(homemNovo *mulherVelha));
}

function ex30Limpa(){
    homem1.value = "";
    homem2.value = "";
    mulher1.value = "";
    mulher2.value = "";
    SomaIdade.value = "";
    ProdutoIdade.value = "";
}

function ex31(){

    var kgMorango = parseInt(document.getElementById("kgMorango").value);
    var kgMaça = parseInt(document.getElementById("kgMaça").value);
    var valorFrutas = document.getElementById("valorFrutas");
    var valorToalFrutas, precoMorango,precoMaça

    if (kgMorango > 5){
        precoMorango = 2.20;
    }else{
        precoMorango = 2.50;
    }
    
    if (kgMaça > 5){
        precoMaça = 1.50;
    }else{
        precoMaça = 1.80;
    }
    
    valorToalFrutas = ((kgMorango * precoMorango) + (kgMaça *precoMaça));

    if ((kgMorango + kgMaça > 8) || (valorToalFrutas > 25)){
        valorToalFrutas = (valorToalFrutas - (valorToalFrutas * 0.10));
    }

    valorFrutas.value = ("R$" + valorToalFrutas);
}

function ex31Limpa(){
    kgMorango.value = "";
    kgMaça.value = "";
    valorFrutas.value = "";
}

function ex32Verificar(){

    var usuario = parseInt(document.getElementById("Usuario").value);
    var user = 1234

    if (usuario == user){
        Senha.disabled = false;
        Resp.value = ""
    }else {
        Resp.value = "Usuario invalido"
        Senha.disabled = true;
        Usuario.value = ""
        Senha.value = ""
    }
}


function ex32Entrar(){
    var senha = parseInt(document.getElementById("Senha").value);
    var chave = 9999;
    if (senha == chave){
        Resp.value = "Acesso liberado";
    }else{
        Senha.disabled = true;
        Resp.value = "Acesso Negado";
        Usuario.value = ""
        Senha.value = ""
        
    }
}

function ex32Limpa(){
    Usuario.value = "";
    senha.value = "";
    Resp.value = "";
}

function ex33(){
    var prod = parseFloat(document.getElementById("prod").value);
    var quant = parseFloat(document.getElementById("quant").value);
    var precoMer = parseFloat(document.getElementById("precoMer").value);  
    var totalMercado;
    var desconto;
    totalMercado = (quant * precoMer);

    if(quant <= 5){
        desconto = 0.02;
    }else if (quant > 5 && quant <=10){
        desconto = 0.03;
    }else{
        desconto = 0.05;
    }

    totMer.value =(totalMercado - (totalMercado * desconto));
}

function ex33Limpa(){
    
    prod.value = "";
    quant.value = "";
    precoMer.value = "";
    totMer.value = ""
    totMer.value = "";
}

function ex34(){
    var NConceito1 = parseFloat(document.getElementById("NConceito1").value);
    var NConceito2 = parseFloat(document.getElementById("NConceito2").value);
    var NConceito3 = parseFloat(document.getElementById("NConceito3").value);
    var MediaEx = parseFloat(document.getElementById("MediaEx").value);
    

}
