<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class SyncNewPermissions extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return  void
     */
    public function run()
    {
        $this->command->info('Sincronysing new permissions...');
        // $this->truncateLaratrustTables();

        $modules = config('laratrust_seeder.role_structure.superadministrator');
        //$userPermission = config('laratrust_seeder.permission_structure');
        $mapPermission = collect(config('laratrust_seeder.permissions_map'));

        $role = \App\Role::where('name', 'superadministrator')->first();

        $permissions = [];

        // Reading role permission modules
        foreach ($modules as $module => $value) {
            $this->command->info($module);
            foreach (explode(',', $value) as $p => $perm) {

                $permissionValue = $mapPermission->get($perm);

                $permissions[] = \App\Permission::firstOrCreate([
                    'name' => $permissionValue . '-' . $module,
                    'display_name' => ucfirst($permissionValue) . ' ' . ucfirst($module),
                    'description' => ucfirst($permissionValue) . ' ' . ucfirst($module),
                ])->id;

                //$this->command->info('Creating Permission to '.$permissionValue.' for '. $module);
            }
        }

        // Attach all permissions to the role
        $role->permissions()->sync($permissions);

        $this->command->info("Attaching permissions to user superadministrator@app.com");

        $user = \App\User::where('name', 'Superadministrator')->first();

        $this->command->info('Removing old permissios not associated with any role');
        $oldPermissions = \App\Permission::doesntHave('roles')->get();
        foreach ($oldPermissions as $oldPermission) {
            $this->command->info('Removing permission: '.$oldPermission->name);
            $oldPermission->delete();
        }
    }
}
