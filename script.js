const calcular = document.getElementById('calcular');

function pace () {
    const nome = document.getElementById('nome').value;
    const distancia = document.getElementById('distancia').value;
    const peso = document.getElementById('peso').value;
    const tempo = document.getElementById('tempo').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && distancia !== '' && peso !== '' && tempo !== '') {
        const tempo_corte = tempo.split(':');
        
        const horas = parseInt(tempo_corte[0]);

        const minutos = parseInt(tempo_corte[1]);

        const segundos = parseInt(tempo_corte[2]);

        const tempo_hora = horas + minutos/60 + segundos/3600;

        const tempo_minutos = horas*60 + minutos + segundos/60;

        const velocidade = (distancia/(tempo_hora)).toFixed(2);

        const pace = ((60/velocidade)).toFixed(2);

        const calorias = (velocidade*peso*0.0175*(tempo_minutos)).toFixed(2);

        resultado.textContent = `Olá ${nome}! Você percorreu ${distancia}km em ${tempo}. Isso quer dizer que a sua 
        velocidade média foi de ${velocidade}km/h, o que o corresponde a um pace de ${pace}min/km. Com ${peso}kg, 
        você gastou cerca de ${calorias}cal.`

    }else {

        resultado.textContent = 'Para calcular o seu PACE , preencha todos os campos.';
    }

}
calcular.addEventListener('click', pace);
