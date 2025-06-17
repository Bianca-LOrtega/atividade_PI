var dashboardModel = require("../models/dashboardModel");

function buscarTotalVerificacoes(req, res) {
    dashboardModel.totalVerificacoes().then(function (resultado) {
        res.json(resultado);
    }).catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarTotalAprovados(req, res) {
    dashboardModel.totalAprovados().then(function (resultado) {
        res.json(resultado);
    }).catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarTotalReprovados(req, res) {
    dashboardModel.totalReprovados().then(function (resultado) {
        res.json(resultado);
    }).catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarTaxaConformidade(req, res) {
    dashboardModel.taxaConformidade().then(function (resultado) {
        res.json(resultado);
    }).catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarMediaIntensidade(req, res) {
    dashboardModel.mediaIntensidade().then(function (resultado) {
        res.json(resultado);
    }).catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarTopLotesReprovados(req, res) {
    dashboardModel.topLotesReprovados().then(function (resultado) {
        res.json(resultado);
    }).catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarTotalVerificacoes,
    buscarTotalAprovados,
    buscarTotalReprovados,
    buscarTaxaConformidade,
    buscarMediaIntensidade,
    buscarTopLotesReprovados
};
