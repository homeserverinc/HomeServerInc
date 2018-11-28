<?php

/* Custom messages used on the application */

return [
    'access_denied' => 'Você não tem permissões para acessar essa funcionalidade',
    /* CRUD - Success */
    'create_success' => 'Novo :model :Name criado com sucesso',
    'update_success' => ':model :Name alterado com sucesso',
    'delete_success' => ':model removido com sucesso',

    /* CRUD - Error */
    'create_error' => 'Erro ao criar :model :Name',
    'update_error' => 'Erro ao atualizar :model :Name',
    'delete_error' => 'Erro ao excluir :model',
    'cant_delete' => ':Model :Name não pode ser excluído.',

    /* Exception */
    'exception' => 'O sistema retornou uma exceção com a seguinte mensagem: :exception',
    'duplicated_record' => 'Não foi possível concluir a operação. o registro ":nome" já existe na base de dados.'
];