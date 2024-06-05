document.getElementById('formDados').addEventListener('submit', function(event) {
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var matricula = document.getElementById('matricula').value;
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var media = (nota1 + nota2) / 2;
    var situacao = media >= 5 ? "Aprovado" : "Reprovado";

    var tabela = document.getElementById('tabelaDados').getElementsByTagName('tbody')[0];
    var novaLinha = tabela.insertRow(tabela.rows.length);

    var celulaNome = novaLinha.insertCell(0);
    celulaNome.appendChild(document.createTextNode(nome));

    var celulaMatricula = novaLinha.insertCell(1);
    celulaMatricula.appendChild(document.createTextNode(matricula));

    var celulaNota1 = novaLinha.insertCell(2);
    celulaNota1.appendChild(document.createTextNode(nota1));

    var celulaNota2 = novaLinha.insertCell(3);
    celulaNota2.appendChild(document.createTextNode(nota2));

    var celulaMedia = novaLinha.insertCell(4);
    celulaMedia.appendChild(document.createTextNode(media.toFixed(2)));

    var celulaSituacao = novaLinha.insertCell(5);
    celulaSituacao.appendChild(document.createTextNode(situacao));
    
    celulaSituacao.classList.add(situacao.toLowerCase());
});
