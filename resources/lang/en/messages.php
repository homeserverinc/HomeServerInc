<?php

/* Custom messages used on the application */

return [
    'access_denied' => 'You don\'t have permission to access this feature.',
    /* CRUD - Success */
    'create_success' => 'New :model ":Name" successfully created.',
    'update_success' => ':Model ":Name" successfully updated.',
    'delete_success' => ':Model ":Name" successfully removed.',

    /* CRUD - Error */
    'create_error' => 'Error creating :model ":Name".',
    'update_error' => 'Error updating :model ":Name".',
    'delete_error' => 'Error removing :model ":Name".',
    'cant_delete' => ':Model ":Name" can not be removed.',

    /* ForeignKey error */
    'fk_error' => 'Sorry, but you can\'t remove related records.',

    /* Exception */
    'exception' => 'Ops... we have found an exception, that said ":exception"',
    'duplicated_record' => 'Duplication detected! There another ":nome" at our database.',

    /* Twilio API Messages */
    'import_phone_numbers' => 'All phone numbers have been successfully imported from Twilio.',
    'import_taskrouter_workspaces' => 'All TaskRouter Workspaces have been successfully imported from Twilio',
    'import_taskrouter_workflows' => 'All TaskRouter Workflows have been successfully imported from Twilio',
    'import_twilio_activities' => 'All TaskRouter Activities have been successfully imported from Twilio',

    /* Other */
    'weak_password' => 'The password is too weak. It must have a minimum length of 12, at least one number, uppercase char and lowercase character.',
];