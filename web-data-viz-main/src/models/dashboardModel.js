var database = require("../database/config");

function totalVerificacoes() {
    var instrucaoSql = `
        SELECT COUNT(*) as total FROM verificacao;
    `;
    return database.executar(instrucaoSql);
}

function totalAprovados() {
    var instrucaoSql = `
        SELECT COUNT(*) as total FROM verificacao WHERE status = 'Aprovado';
    `;
    return database.executar(instrucaoSql);
}

function totalReprovados() {
    var instrucaoSql = `
        SELECT COUNT(*) as total FROM verificacao WHERE status = 'Reprovado';
    `;
    return database.executar(instrucaoSql);
}

function taxaConformidade() {
    var instrucaoSql = `
        SELECT ROUND((COUNT(CASE WHEN status = 'Aprovado' THEN 1 END) * 100) / COUNT(*), 2) as taxa FROM verificacao;
    `;
    return database.executar(instrucaoSql);
}

function mediaIntensidade() {
    var instrucaoSql = `
        SELECT ROUND(AVG(intensidade_reflexao), 2) as media FROM sensor;
    `;
    return database.executar(instrucaoSql);
}

function topLotesReprovados() {
    var instrucaoSql = `
        SELECT lote.codigo as lote, COUNT(verificacao.id) as totalReprovacoes 
        FROM verificacao
        JOIN lote ON verificacao.fk_lote = lote.id
        WHERE status = 'Reprovado'
        GROUP BY lote.codigo
        ORDER BY totalReprovacoes DESC
        LIMIT 3;
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    totalVerificacoes,
    totalAprovados,
    totalReprovados,
    taxaConformidade,
    mediaIntensidade,
    topLotesReprovados
};
