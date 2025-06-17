var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/total-verificacoes", function (req, res) {
    dashboardController.buscarTotalVerificacoes(req, res);
});

router.get("/total-aprovados", function (req, res) {
    dashboardController.buscarTotalAprovados(req, res);
});

router.get("/total-reprovados", function (req, res) {
    dashboardController.buscarTotalReprovados(req, res);
});

router.get("/taxa-conformidade", function (req, res) {
    dashboardController.buscarTaxaConformidade(req, res);
});

router.get("/media-intensidade", function (req, res) {
    dashboardController.buscarMediaIntensidade(req, res);
});

router.get("/top-lotes-reprovados", function (req, res) {
    dashboardController.buscarTopLotesReprovados(req, res);
});

module.exports = router;
