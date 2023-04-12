alunos = [
    { nome: "Guilherme", media: 7 },
    { nome: "Jonas", media: 4 },
    { nome: "jose", media: 10 },
    { nome: "Maria", media: 2 },
    { nome: "marta", media: 5 },
    { nome: "Lucas", media: 9 },
    { nome: "João", media: 6 },
    { nome: "Mateus", media: 3 },
    { nome: "Rute", media: 2 },
    { nome: "Ana", media: 1 }
]

function filtrarPorNome(nome) {
    let alunoObject = {}
    alunos.forEach(aluno => {
        if (aluno.nome === nome) {
            alunoObject = aluno;
        }
    });

    if (alunoObject.nome === nome) {
        return alunoObject;

    } else {

        return "Aluno não encontrado";

    }
}
function filtrarPorMeida(media) {

    let alunosMedia = alunos.filter((aluno) => media <= aluno.media);
    return alunosMedia;
}

module.exports = {alunos,filtrarPorNome,filtrarPorMeida};