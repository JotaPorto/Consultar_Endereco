function showData(data){
    let rua = document.getElementById('rua');
    let bairro = document.getElementById('bairro');
    let estado = document.getElementById('estado');
    
    let starinfo = document.getElementById('startInfo');
    let searchResult = document.getElementById('searchResult');

    rua.innerHTML = data.logradouro;
    bairro.innerHTML = data.bairro;
    estado.innerHTML = data.localidade;


    searchResult.style.display = 'block';
}

async function searchcep(api){
    const result = await fetch(api);
    const data = await result.json();

    showData(data);
    
}

function consultcep() {
    let cep = document.getElementById('cepNumber').value;
    let api = `http://viacep.com.br/ws/${cep}/json/`;

    searchcep(api);
} 
