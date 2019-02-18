@extends('layouts.app')

@section('content')
    <div class=" card  ">
        @component('components.form', [
            'title' => 'Alterar Cliente', 
            'routeUrl' => route('cliente.update', $cliente->id), 
            'method' => 'PUT',
            'formButtons' => [
                ['type' => 'submit', 'label' => 'Salvar', 'icon' => 'check'],
                ['type' => 'button', 'label' => 'Cancelar', 'icon' => 'times']
                ]
            ])
            @section('formFields')
                @component('components.form-group', [
                    'inputs' => [
                        [
                            'type' => 'select',
                            'field' => 'tipo_pessoa_id',
                            'label' => 'Tipo Pessoa',
                            'required' => true,
                            'autofocus' => true,
                            'items' => $tipoPessoas,
                            'inputSize' => 2,
                            'displayField' => 'tipo_pessoa',
                            'keyField' => 'id',
                            'disabled' => true,
                            'indexSelected' => $cliente->tipo_pessoa_id

                        ],
                        [
                            'type' => 'text',
                            'field' => 'nome_razao',
                            'label' => 'Nome/Razão Sozial',
                            'required' => true,
                            'inputSize' => 9,
                            'inputValue' => $cliente->nome_razao
                        ],
                        [
                            'type' => 'select',
                            'field' => 'ativo',
                            'label' => 'Ativo',
                            'inputSize' => 1,
                            'indexSelected' => $cliente->ativo,
                            'items' => Array('Não', 'Sim'),
                        ]
                    ]
                ])
                @endcomponent
                @component('components.form-group', [
                    'inputs' => [
                        [
                            'type' => 'text',
                            'field' => 'fantasia',
                            'label' => 'Nome Fantasia',
                            'inputValue' => $cliente->fantasia
                        ]
                    ]
                ])
                @endcomponent
                @component('components.form-group', [
                    'inputs' => [
                        [
                            'type' => 'text',
                            'field' => 'cpf_cnpj',
                            'label' => 'CPF/CNPJ',
                            'required' => true,
                            'inputSize' => 6,
                            'inputValue' => $cliente->cpf_cnpj
                        ],
                        [
                            'type' => 'text',
                            'field' => 'rg_ie',
                            'label' => 'RG/IE',
                            'required' => true,
                            'inputSize' => 6,
                            'inputValue' => $cliente->rg_ie
                        ]
                    ]
                ])
                @endcomponent
                <div class=" card  ">
                    <div class="card-header">
                        <strong>CONTATOS</strong>
                    </div>
                    <div class="card-body">
                        @component('components.form-group', [
                            'inputs' => [
                                [
                                    'type' => 'text',
                                    'field' => 'fone1',
                                    'label' => 'Fone [1]',
                                    'required' => true,
                                    'inputSize' => 6,
                                    'inputValue' => $cliente->fone1,
                                    'css' => 'mask_phone'
                                ],
                                [
                                    'type' => 'text',
                                    'field' => 'fone2',
                                    'label' => 'Fone [2]',
                                    'inputSize' => 6,
                                    'inputValue' => $cliente->fone2,
                                    'css' => 'mask_phone'
                                ],
                            ]
                        ])
                        @endcomponent
                        @component('components.form-group', [
                            'inputs' => [
                                [
                                    'type' => 'text',
                                    'field' => 'email1',
                                    'label' => 'E-mail [1]',
                                    'inputSize' => 6,
                                    'inputValue' => $cliente->email1
                                ],
                                [
                                    'type' => 'text',
                                    'field' => 'email2',
                                    'label' => 'E-mail [2]',
                                    'inputSize' => 6,
                                    'inputValue' => $cliente->email2
                                ]
                            ]
                        ])
                        @endcomponent
                    </div>
                </div>
                <div class=" card  ">
                    <div class="card-header">
                        <strong>ENDEREÇO</strong>
                    </div>
                    <div class="card-body">
                        @component('components.form-group', [
                            'inputs' => [
                                [
                                    'type' => 'text',
                                    'field' => 'endereco',
                                    'label' => 'Endereço',
                                    'required' => true,
                                    'inputSize' => 11,
                                    'inputValue' => $cliente->endereco
                                ],
                                [
                                    'type' => 'text',
                                    'field' => 'numero',
                                    'label' => 'Número',
                                    'inputSize' => 1,
                                    'inputValue' => $cliente->numero
                                ],
                            ]
                        ])
                        @endcomponent
                        @component('components.form-group', [
                            'inputs' => [
                                [
                                    'type' => 'text',
                                    'field' => 'bairro',
                                    'label' => 'Bairro',
                                    'inputSize' => 4,
                                    'inputValue' => $cliente->bairro
                                ],
                                [
                                    'type' => 'text',
                                    'field' => 'cidade',
                                    'label' => 'Cidade',
                                    'inputSize' => 4,
                                    'inputValue' => $cliente->cidade
                                ],
                                [
                                    'type' => 'text',
                                    'field' => 'cep',
                                    'label' => 'Cep',
                                    'inputSize' => 2,
                                    'inputValue' => $cliente->cep
                                ],
                                [
                                    'type' => 'select',
                                    'field' => 'uf_id',
                                    'label' => 'UF',
                                    'required' => true,
                                    'items' => $ufs,
                                    'inputSize' => 2,
                                    'displayField' => 'uf',
                                    'liveSearch' => true,
                                    'keyField' => 'id',
                                    'indexSelected' => $cliente->uf_id
                                ]
                            ]
                        ])
                        @endcomponent
                    </div>
                </div>
            @endsection
        @endcomponent
    </div>
    <script>
        $(document).ready(function() {
            var SPMaskBehavior = function (val) {
                return val.replace(/\D/g, '').length === 11 ? '(00)00000-0000' : '(00)0000-00009';
            },
            spOptions = {
                onKeyPress: function(val, e, field, options) {
                    field.mask(SPMaskBehavior.apply({}, arguments), options);
                },
                placeholder: '(__) ______-_____'
            };

            $('.mask_phone').mask(SPMaskBehavior, spOptions);

            $('#cep').mask('00.000-000', {placeholder: '__.___-___'});
            
            if ($("#tipo_pessoa_id").val() == 1) {
                $("#cpf_cnpj").mask('000.000.000-00', {placeholder: '___.___.___-__'});
            } else {
               $("#cpf_cnpj").mask('00.000.000/0000-00', {placeholder: '__.___.___/____-__'}); 
            }

            $('#tipo_pessoa_id').on('changed.bs.select', function (e) {
                $("#cpf_cnpj").val('');
                if ($("#tipo_pessoa_id").val() == 1) {
                    $("#cpf_cnpj").mask('000.000.000-00', {placeholder: '___.___.___-__'});
                } else {
                    $("#cpf_cnpj").mask('00.000.000/0000-00', {placeholder: '__.___.___/____-__'}); 
                }
            });
        });
    </script>
@endsection