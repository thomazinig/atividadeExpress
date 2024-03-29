const express = require("express");
const app = express();
const alunos = require("./alunos");
const e = require("express");
app.use(express.json());

app.get("/alunos", (req, res) => {
    const { nome } = req.query;
    const { media } = req.query;
    if (nome !== undefined) {
        res.send(
            alunos.filtrarPorNome(nome));
    } else if (media !== undefined) {
        res.send(
            alunos.filtrarPorMeida(media));
    }
    else {
        res.send(
            alunos.alunos);
    }

});

app.post("/alunos/novo", (req, res) => {
    const { nome, matricula, media } = req.body;

    if (nome == undefined && matricula == undefined && media == undefined) {
        res.status(400).json({ message: "dados invalidos " });
    } else {
        res.json({ matricula: matricula, nome: nome, media: media });

    }

});

app.delete("/alunos/deletar/:index", function (req, res) {
    const fs = require('fs')
    const { index } = req.params;
    alunos.deletar(index)
    if (index === undefined || index >= alunos.alunos.length) {
        res.status(404).json({ message: "Usuário não encontrado" });

    } else { res.send(alunos.alunos)}


})
app.put("/alunos/atualizar/:index", function (req, res) {
    const { nome, media } = req.body;
    const { index } = req.params;

    if (index === undefined || index >= alunos.alunos.length) {
        res.status(404).json({ message: "Usuário não encontrado" });

    } else {
        alunos.atualizar(index,nome,media)
        res.send(alunos.alunos);
    }


})

app.listen(3000);
