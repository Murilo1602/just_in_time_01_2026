const prisma = require("../data/prisma");

const cadastrar = async (req, res) => {
    try {
        const { idProduto, idUsuario, tipo, quantidade, dataProducao } = req.body;

        const produto = await prisma.produto.findUnique({
            where: { id: Number(idProduto) }
        });

        if (!produto) {
            return res.status(404).json({ error: "Produto não encontrado" });
        }

        const qtdMovimentada = Number(quantidade);
        let novaQuantidade = produto.quantidade;

        if (tipo === "Fabricado") {
            novaQuantidade += qtdMovimentada;
        } else if (tipo === "Pedido") {
            if (produto.quantidade < qtdMovimentada) {
                return res.status(400).json({ error: "Estoque insuficiente para atender ao pedido!" });
            }
            novaQuantidade -= qtdMovimentada;
        }

        const producao = await prisma.producao.create({
            data: {
                idProduto: Number(idProduto),
                idUsuario: Number(idUsuario),
                tipo,
                quantidade: qtdMovimentada,
                dataProducao: new Date(dataProducao)
            }
        });

        await prisma.produto.update({
            where: { id: Number(idProduto) },
            data: { quantidade: novaQuantidade }
        });

        const alertaEstoque = novaQuantidade <= produto.estoqueMin;
        let mensagemAlerta = null;

        if (alertaEstoque) {
            mensagemAlerta = `Atenção! O estoque do produto "${produto.nome}" atingiu o limite mínimo (${novaQuantidade}/${produto.estoqueMin}).`;
        }

        return res.status(201).json({
            producao,
            alertaEstoque,
            mensagemAlerta
        });

    } catch (error) {
        return res.status(500).json({ error: "Erro ao registrar produção: " + error.message });
    }
};

const listar = async (req, res) => {
    const lista = await prisma.producao.findMany({
        include: { produto: true, usuario: true }
    });
    res.status(200).json(lista);
};

const buscar = async (req, res) => {
    const { id } = req.params;
    const item = await prisma.producao.findUnique({
        where: { id: Number(id) },
        include: { produto: true, usuario: true }
    });
    res.status(200).json(item);
};

const atualizar = async (req, res) => {
    const { id } = req.params;
    const dados = req.body;
    
    const item = await prisma.producao.update({
        where: { id: Number(id) },
        data: dados
    });

    res.status(200).json(item);
};

const excluir = async (req, res) => {
    const { id } = req.params;
    
    const item = await prisma.producao.delete({
        where: { id: Number(id) }
    });

    res.status(200).json(item);
};

module.exports = {
    cadastrar,
    listar,
    buscar,
    atualizar,
    excluir
};