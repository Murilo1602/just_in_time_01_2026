const prisma = require("../data/prisma");

const getUserId = (req, body = {}) => {
    const value = req.get("x-user-id") || req.query.idUsuario || body.idUsuario;
    const idUsuario = Number(value);

    return Number.isInteger(idUsuario) && idUsuario > 0 ? idUsuario : null;
};

const cadastrar = async (req, res) => {
    const idUsuario = getUserId(req, req.body);

    if (!idUsuario) {
        return res.status(400).json({ error: "idUsuario é obrigatório" });
    }

    const item = await prisma.produto.create({
        data: {
            nome: req.body.nome,
            descricao: req.body.descricao,
            custo: req.body.custo,
            quantidade: req.body.quantidade,
            estoqueMin: req.body.estoqueMin,
            usuario: { connect: { id: idUsuario } }
        }
    });

    res.status(201).json(item);
};

const listar = async (req, res) => {
    const idUsuario = getUserId(req);

    if (!idUsuario) {
        return res.status(400).json({ error: "idUsuario é obrigatório" });
    }

    const lista = await prisma.produto.findMany({
        where: { idUsuario }
    });

    res.status(200).json(lista);
};

const buscar = async (req, res) => {
    const { id } = req.params;
    const idUsuario = getUserId(req);

    if (!idUsuario) {
        return res.status(400).json({ error: "idUsuario é obrigatório" });
    }
    
    const item = await prisma.produto.findFirst({
        where: { id: Number(id), idUsuario }
    });

    if (!item) {
        return res.status(404).json({ error: "Produto não encontrado" });
    }

    res.status(200).json(item);
};

const atualizar = async (req, res) => {
    const { id } = req.params;
    const idUsuario = getUserId(req, req.body);

    if (!idUsuario) {
        return res.status(400).json({ error: "idUsuario é obrigatório" });
    }
    
    const produto = await prisma.produto.findFirst({
        where: { id: Number(id), idUsuario }
    });

    if (!produto) {
        return res.status(404).json({ error: "Produto não encontrado" });
    }

    const { idUsuario: _idUsuario, ...dados } = req.body;
    const item = await prisma.produto.update({
        where: { id: Number(id) },
        data: dados
    });

    res.status(200).json(item);
};

const excluir = async (req, res) => {
    const { id } = req.params;
    const idUsuario = getUserId(req);

    if (!idUsuario) {
        return res.status(400).json({ error: "idUsuario é obrigatório" });
    }

    const produto = await prisma.produto.findFirst({
        where: { id: Number(id), idUsuario }
    });

    if (!produto) {
        return res.status(404).json({ error: "Produto não encontrado" });
    }
    
    const item = await prisma.produto.delete({
        where: { id : Number(id) }
    });

    res.status(200).json(item);
};

module.exports = {
    cadastrar,
    listar,
    buscar,
    atualizar,
    excluir
}
