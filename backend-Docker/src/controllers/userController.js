export const createUser = (req, res) => {
    res.status(200).json({message: "Usuário criado com sucesso"});
}

export const getAllUsers = (req, res) => {
    res.status(200).json({message: "Lista de usuários"});
}

export const deleteUser = (req, res) => {
    res.status(200).json({message: "Usuário deletado com sucesso"});
}