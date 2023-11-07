$(document).ready(function(){
  $('.carrossel').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    });
});

function mascara(i) {
var v = i.value;

if(isNaN(v[v.length-1])){
    i.value = v.substring(0, v.length - 1);
    return;
}

i.setAttribute("maxlength", "14");
if (v.length == 3 || v.length == 7) i.value += ".";
if (v.length == 11) i.value += ".";}

function validarFormulario() {
    var nome = document.querySelector("input[name='nome']").value;
    
    if (nome == '') {
      alert("Informe seu Nome");
      return false
    }

    alert("Inscrição efetuada com sucesso!")
    return true

}