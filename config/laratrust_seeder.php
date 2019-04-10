<?php

return [
    'role_structure' => [
        'superadministrator' => [
            'user' => 'c,r,u,d',
            'acl' => 'c,r,u,d',
            'role' => 'c,r,u,d',
            'permission' => 'r,u',
            'agent' => 'c,r,u,d',
            'city' => 'c,r,u,d',
            'category' => 'c,r,u,d',
            'category-lead' => 'c,r,u,d',
            'question' => 'c,r,u,d',
            'lead' => 'c,r,u,d',
            'filtered-lead' => 'c,r,u,d',
            'dispute' => 'r',
            'text' => 'c,r,u,d',
            'text-type' => 'c,r,u,d',
            'image-type' => 'c,r,u,d',
            'image' => 'c,r,u,d',
            'site' => 'c,r,u,d',
            'quiz' => 'c,r,u,d',
            'phone' => 'c,r,u,d',
            'site-contact' => 'r,u',
            'contractor' => 'c,r,u,d',
            'plan' => 'c,r,u,d',
            'card' => 'c,r,u,d',
            'charge' => 'c,r',
            'subscription' => 'c,r,u,d',
            'twilio-configuration' => 'r,u',
            'sip-domain' => 'c,r,u,d',
            'sip-credential-list' => 'c,r,u,d',
            'sip-credential' => 'c,r,u,d',
            'music-on-hold' => 'c,r,u,d',
            'twilio-workspace' => 'r,u,d',
            'missed-call' => 'r,u',
            'twilio-activity' => 'r,u',
            'twilio-workflow' => 'r,u',
            'twilio-import-phone-numbers' => 'a',
            'twilio-import-workspaces' => 'a',
            'twilio-import-workflows' => 'a',
            'twilio-import-activities' => 'a',
            'quiz-questions-crud' => 'a'
        ],
        'administrator' => [
            'user' => 'c,r,u,d',
            'role' => 'r,u'
        ],
        'user' => [
            'role' => 'r,u'
        ],
        'contractor' => [
            'lead' => 'r',
            'plan' => 'r',
            'card' => 'c,r,u,d',
            'charge' => 'c,r,u,d',
            'contractor' => 'u',
        ]
    ],
    'permission_structure' => [
        'cru_user' => [
            'role' => 'c,r,u'
        ],
    ],
    'permissions_map' => [
        'c' => 'create',
        'r' => 'read',
        'u' => 'update',
        'd' => 'delete',
        'a' => 'access'
    ]
];
