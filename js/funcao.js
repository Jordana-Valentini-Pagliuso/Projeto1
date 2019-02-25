function data(campo) {
    if (campo.value.length == 2 || campo.value.length == 5) {
        campo.value += "/";
    }
}
$(document).ready(function(){

    $("#calcular").click(

        
        function(){
            let tema = parseFloat($("#tTema").val());
            let bolo = parseFloat($("#tBolo").val());
            let doce = parseFloat($("#tDoces").val());
            let bebida = parseFloat($("#tBebidas").val());
            let salgado = parseFloat($("#tSalgados").val());
            let total ;

            $("#tValorTema").val(tema);
            $("#tValorBolo").val(bolo);
            $("#tValorDoce").val(doce);
            $("#tValorBebida").val(bebida);
            $("#tValorSalgado").val(salgado);
            $("#tValor").val();

            total = tema + bolo + doce + bebida + salgado;

            $("#tTotal").val(total);
        }
    );

});