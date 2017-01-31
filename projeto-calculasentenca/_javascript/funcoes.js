/**
 * Created by Flávio on 30/01/2017.
 */
function reducaoPenal(){

    var anos = document.getElementById('cAnos').value;
    var meses = document.getElementById('cMeses').value;
    var dias = document.getElementById('cDias').value;
    var reducao = document.getElementById('cReducao').value;

    var anosConvertido = anos * 365;
    var mesesConvertido = meses * 30;
    var total = anosConvertido + mesesConvertido;

    if (reducao == "1/2"){
        var x = 1 / 2;
        var z = x * parseInt(total);
        var ano = (z) / 365;
        var mes = (z % 365) / 30;
        var dia = (z % 365) / 30;
        alert(parseInt(ano)+' ano(s) '+
            parseInt(mes)+' mês(es) '+
            parseInt(dia)+' dia(s) ');

    }
    else if (reducao == "1/3"){
        x = 1 / 3;
        z = x * parseInt(total);
        ano = z / 365;
        var mes = (z % 365) / 30;
        var dia = (z % 365) / 30;
        alert(parseInt(ano)+' ano(s) '+
            parseInt(mes)+' mês(es) '+
            parseInt(dia)+' dia(s) ');
    }
    else if (reducao == "2/3"){
        x = 2 / 3;
        z = x * parseInt(total);
        ano = z / 365;
        var mes = (z % 365) / 30;
        var dia = (z % 365) / 30;
        alert(parseInt(ano)+' ano(s) '+
            parseInt(mes)+' mês(es) '+
            parseInt(dia)+' dia(s) ');
    }
    else if (reducao == "1/1"){
        x = 1 / 1;
        z = x * parseInt(total);
        ano = z / 365;
        var mes = (z % 365) / 30;
        var dia = (z % 365) / 30;
        alert(parseInt(ano)+' ano(s) '+
            parseInt(mes)+' mês(es) '+
            parseInt(dia)+' dia(s) ');
    }
}

function aumentaPena(){

    var anos = document.getElementById('cAnos').value;
    var meses = document.getElementById('cMeses').value;
    var dias = document.getElementById('cDias').value;
    var aumenta = document.getElementById('cAumenta').value;

    if (aumenta == "1/2"){
        var x = 1 / 2;
        var totAno = parseInt(anos) + x;
        var totMes = parseInt(meses) + x;
        var totDia = parseInt(dias) + x;
        alert(parseFloat(totAno)+' ano(s) '+
            parseFloat(totMes)+' mês(es) '+
            parseFloat(totDia)+' dia(s) ');

    }
    else if (aumenta == "1/3"){
        x = 1 / 3;
        var x = 1 / 2;
        var totAno = anos + parseInt(x);
        var totMes = meses + parseInt(x);
        var totDia = dias + parseInt(x);
        alert(parseInt(totAno)+' ano(s) '+
            parseInt(totMes)+' mês(es) '+
            parseInt(totDia)+' dia(s) ');
    }
    else if (aumenta == "2/3"){
        x = 2 / 3;
        var x = 1 / 2;
        var totAno = anos + parseInt(x);
        var totMes = meses + parseInt(x);
        var totDia = dias + parseInt(x);
        alert(parseInt(totAno)+' ano(s) '+
            parseInt(totMes)+' mês(es) '+
            parseInt(totDia)+' dia(s) ');
    }
    else if (aumenta == "1/1"){
        x = 1 / 1;
        var x = 1 / 2;
        var totAno = anos + parseInt(x);
        var totMes = meses + parseInt(x);
        var totDia = dias + parseInt(x);
        alert(parseInt(totAno)+' ano(s) '+
            parseInt(totMes)+' mês(es) '+
            parseInt(totDia)+' dia(s) ');
    }



}
function verificaCampos(){
    if (document.getElementById('cMeses').value > 11){
        alert('Valor para o mês incorreto. Valor menor de 11 é aceitavel.');
        document.getElementById("cMeses").focus();

    }
    else if (document.getElementById('cDias').value > 30){
        alert('Valor para dia incorreto. Valor menor de 30 é aceitavel.');
        document.getElementById("cDias").focus();

    }
    else if (document.getElementById('rAumenta').checked == true){
            document.getElementById('cAumenta').disabled = false;
            document.getElementById('cReducao').disabled = true;

    }
    else if (document.getElementById('rReducao').checked == true){
            document.getElementById('cReducao').disabled = false;
            document.getElementById('cAumenta').disabled= true;
    }

}
function verificaEscolha(){

    if (document.getElementById('rAumenta').checked == true){
        document.getElementById('cAumenta').disabled = false;
        document.getElementById('cReducao').disabled = true;
        aumentaPena();

    }
    else if (document.getElementById('rReducao').checked == true){
        document.getElementById('cReducao').disabled = false;
        document.getElementById('cAumenta').disabled= true;
        reducaoPenal();
    }

}
