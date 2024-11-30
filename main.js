function tocaSom (seletorAudio) {

  const elemento = document.querySelector(seletorAudio);  

  if (elemento && elemento.localName === 'audio') {

    elemento.play();

}
else {

    const seletorElemento = elemento? 'Elemento não encontrado':'Seletor inválido';
    //alert('Elemento não encontrado');
    console.log(seletorElemento);

    const firstCheck = seletorElemento === 'Seletor inválido',
        secondCheck = seletorElemento === 'Elemento não encontrado',
        access = firstCheck? 'Seletor': secondCheck?'Elemento':0;

        console.log(access); // logs "Access granted"

}

}

const listaDeTeclas = document.querySelectorAll('.tecla');



for (let contador = 0; contador < listaDeTeclas.length; contador++) {

  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function () {
    tocaSom(idAudio);
  }

  tecla.onkeydown = function (evento) {

    if (evento.code === 'Enter' || evento.code === 'Space') {

      tecla.classList.add('ativa');

    } 

  }

  tecla.onkeyup = function () {

    tecla.classList.remove('ativa');

}

}
