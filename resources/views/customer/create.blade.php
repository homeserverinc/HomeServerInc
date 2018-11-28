@extends('layouts.app')

@section('content')
    <div class=" card  ">
        @component('components.form', [
            'title' => 'Novo Cliente', 
            'routeUrl' => route('cliente.store'), 
            'method' => 'POST',
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
                            'liveSearch' => true
                        ],
                        [
                            'type' => 'text',
                            'field' => 'nome_razao',
                            'label' => 'Nome/Razão Sozial',
                            'required' => true,
                            'inputSize' => 10
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
                            'inputSize' => 6
                        ],
                        [
                            'type' => 'text',
                            'field' => 'rg_ie',
                            'label' => 'RG/IE',
                            'required' => true,
                            'inputSize' => 6
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
                                    'css' => 'mask_phone'
                                ],
                                [
                                    'type' => 'text',
                                    'field' => 'fone2',
                                    'label' => 'Fone [2]',
                                    'inputSize' => 6,
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
                                    'inputSize' => 6
                                ],
                                [
                                    'type' => 'text',
                                    'field' => 'email2',
                                    'label' => 'E-mail [2]',
                                    'inputSize' => 6
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
                                    'inputSize' => 11
                                ],
                                [
                                    'type' => 'text',
                                    'field' => 'numero',
                                    'label' => 'Número',
                                    'inputSize' => 1
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
                                    'inputSize' => 4
                                ],
                                [
                                    'type' => 'text',
                                    'field' => 'cidade',
                                    'label' => 'Cidade',
                                    'inputSize' => 4
                                ],
                                [
                                    'type' => 'text',
                                    'field' => 'cep',
                                    'label' => 'Cep',
                                    'inputSize' => 2
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
                                    'keyField' => 'id'
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