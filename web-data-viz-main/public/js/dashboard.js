// ------------ Dados Mocados ------------ //

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ------------ Função para atualizar KPIs ------------ //

function atualizarKPIs() {
    var total = gerarNumeroAleatorio(100, 200);
    var aprovados = gerarNumeroAleatorio(70, total);
    var reprovados = total - aprovados;
    var taxa = ((aprovados / total) * 100).toFixed(2);

    document.getElementById("kpi_total").innerHTML = total;
    document.getElementById("kpi_aprovadas").innerHTML = aprovados;
    document.getElementById("kpi_reprovadas").innerHTML = reprovados;
    document.getElementById("kpi_taxa").innerHTML = taxa + "%";

    // Atualizar gráficos
    atualizarGraficoPizza(aprovados, reprovados);
    atualizarGraficoBarra();
}

// ------------ Configuração dos Gráficos ------------ //

var ctxPizza = document.getElementById('graficoPizza').getContext('2d');
var graficoPizza = new Chart(ctxPizza, {
    type: 'pie',
    data: {
        labels: ['Aprovados', 'Reprovados'],
        datasets: [{
            data: [0, 0],
            backgroundColor: ['#4caf50', '#f44336']
        }]
    },
    options: {
        responsive: true
    }
});

var ctxBarra = document.getElementById('graficoBarra').getContext('2d');
var graficoBarra = new Chart(ctxBarra, {
    type: 'bar',
    data: {
        labels: ['Lote 1', 'Lote 2', 'Lote 3'],
        datasets: [{
            label: 'Total de Reprovações',
            data: [0, 0, 0],
            backgroundColor: '#f44336'
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// ------------ Funções para atualizar os gráficos ------------ //

function atualizarGraficoPizza(aprovados, reprovados) {
    graficoPizza.data.datasets[0].data = [aprovados, reprovados];
    graficoPizza.update();
}

function atualizarGraficoBarra() {
    graficoBarra.data.datasets[0].data = [
        gerarNumeroAleatorio(0, 10),
        gerarNumeroAleatorio(0, 10),
        gerarNumeroAleatorio(0, 10)
    ];
    graficoBarra.update();
}

// ------------ Iniciar atualização automática ------------ //

atualizarKPIs(); // Atualiza ao carregar a página
setInterval(atualizarKPIs, 5000); // Atualiza a cada 5 segundos
