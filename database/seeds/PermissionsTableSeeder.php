<?php

use App\Permission;
use Illuminate\Database\Seeder;

class PermissionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->truncateTablePermissions();

        DB::table('permissions')->insert([
            //Agents
            [
                'name'          => 'list-agents',
                'display_name'  => 'List Agents',
                'description'   => 'Allow a User to List Agents'
            ],
            [
                'name'          => 'create-agent',
                'display_name'  => 'Create Agent',
                'description'   => 'Allow a User to Create a new Agent'
            ],
            [
                'name'          => 'update-agent',
                'display_name'  => 'Update agent',
                'description'   => 'Allow a User to Update an existing Agent'
            ],
            [
                'name'          => 'delete-agent',
                'display_name'  => 'Delete Agent',
                'description'   => 'Allow a User to Delete an existing Agent'
            ],
            //Sites
            [
                'name'          => 'list-sites',
                'display_name'  => 'List Sites',
                'description'   => 'Allow a User to List Sites'
            ],
            [
                'name'          => 'create-site',
                'display_name'  => 'Create Site',
                'description'   => 'Allow a User to Create a new Site'
            ],
            [
                'name'          => 'update-site',
                'display_name'  => 'Update Site',
                'description'   => 'Allow a User to Update an existing Site'
            ],
            [
                'name'          => 'delete-site',
                'display_name'  => 'Delete Site',
                'description'   => 'Allow a User to Delete an existing Site'
            ],
            //Cities
            [
                'name'          => 'list-cities',
                'display_name'  => 'List Cities',
                'description'   => 'Allow a User to List Cities'
            ],
            [
                'name'          => 'create-city',
                'display_name'  => 'Create City',
                'description'   => 'Allow a User to Create a new City'
            ],
            [
                'name'          => 'update-city',
                'display_name'  => 'Update City',
                'description'   => 'Allow a User to Update an existing City'
            ],
            [
                'name'          => 'delete-city',
                'display_name'  => 'Delete City',
                'description'   => 'Allow a User to Delete an existing City'
            ],
            //Customers
            [
                'name'          => 'list-customers',
                'display_name'  => 'List Customers',
                'description'   => 'Allow a User to List Customers'
            ],
            [
                'name'          => 'create-customer',
                'display_name'  => 'Create Customer',
                'description'   => 'Allow a User to Create a new Customer'
            ],
            [
                'name'          => 'update-customer',
                'display_name'  => 'Update Customer',
                'description'   => 'Allow a User to Update an existing Customer'
            ],
            [
                'name'          => 'delete-customer',
                'display_name'  => 'Delete Customer',
                'description'   => 'Allow a User to Delete an existing Customer'
            ],
            //Categories
            [
                'name'          => 'list-categories',
                'display_name'  => 'List Categories',
                'description'   => 'Allow a User to List Categories'
            ],
            [
                'name'          => 'create-category',
                'display_name'  => 'Create Cagetory',
                'description'   => 'Allow a User to Create a new Cagetory'
            ],
            [
                'name'          => 'update-category',
                'display_name'  => 'Update Cagetory',
                'description'   => 'Allow a User to Update an existing Cagetory'
            ],
            [
                'name'          => 'delete-category',
                'display_name'  => 'Delete Cagetory',
                'description'   => 'Allow a User to Delete an existing Cagetory'
            ],
            //CallRoutes
            [
                'name'          => 'list-callroutes',
                'display_name'  => 'List CallRoutes',
                'description'   => 'Allow a User to List CallRoutes'
            ],
            [
                'name'          => 'create-callroute',
                'display_name'  => 'Create CallRoute',
                'description'   => 'Allow a User to Create a new CallRoute'
            ],
            [
                'name'          => 'update-callroute',
                'display_name'  => 'Update CallRoute',
                'description'   => 'Allow a User to Update an existing CallRoute'
            ],
            [
                'name'          => 'delete-callroute',
                'display_name'  => 'Delete CallRoute',
                'description'   => 'Allow a User to Delete an existing CallRoute'
            ],
            //Phones
            [
                'name'          => 'list-phones',
                'display_name'  => 'List Phones',
                'description'   => 'Allow a User to List Phones'
            ],
            [
                'name'          => 'create-phone',
                'display_name'  => 'Create Phone',
                'description'   => 'Allow a User to Create a new Phone'
            ],
            [
                'name'          => 'update-phone',
                'display_name'  => 'Update Phone',
                'description'   => 'Allow a User to Update an existing Phone'
            ],
            [
                'name'          => 'delete-phone',
                'display_name'  => 'Delete Phone',
                'description'   => 'Allow a User to Delete an existing Phone'
            ],
            //Users
            [
                'name'          => 'list-users',
                'display_name'  => 'List Users',
                'description'   => 'Allow a User to List Users'
            ],
            [
                'name'          => 'create-user',
                'display_name'  => 'Create User',
                'description'   => 'Allow a User to Create a new User'
            ],
            [
                'name'          => 'update-user',
                'display_name'  => 'Update User',
                'description'   => 'Allow a User to Update an existing User'
            ],
            [
                'name'          => 'delete-user',
                'display_name'  => 'Delete User',
                'description'   => 'Allow a User to Delete an existing User'
            ],
            //Role vs Users
            [
                'name'          => 'list-role-users',
                'display_name'  => 'List Roles Users',
                'description'   => 'Allow a User to List Roles Users'
            ],
            [
                'name'          => 'create-role-user',
                'display_name'  => 'Create Role User',
                'description'   => 'Allow a User to Create a new Role User'
            ],
            [
                'name'          => 'update-role-user',
                'display_name'  => 'Update Role User',
                'description'   => 'Allow a User to Update an existing Role User'
            ],
            [
                'name'          => 'delete-role-user',
                'display_name'  => 'Delete Role User',
                'description'   => 'Allow a User to Delete an existing Role User'
            ],            
            //Properties
            [
                'name'          => 'list-properties',
                'display_name'  => 'List Properties',
                'description'   => 'Allow a User to List Properties'
            ],
            [
                'name'          => 'create-property',
                'display_name'  => 'Create Property',
                'description'   => 'Allow a User to Create a new Property'
            ],
            [
                'name'          => 'update-property',
                'display_name'  => 'Update Property',
                'description'   => 'Allow a User to Update an existing Property'
            ],
            [
                'name'          => 'delete-property',
                'display_name'  => 'Delete Property',
                'description'   => 'Allow a User to Delete an existing Property'
            ],
            //Services
            [
                'name'          => 'list-services',
                'display_name'  => 'List Services',
                'description'   => 'Allow a User to List Services'
            ],
            [
                'name'          => 'create-service',
                'display_name'  => 'Create Service',
                'description'   => 'Allow a User to Create a new Service'
            ],
            [
                'name'          => 'update-service',
                'display_name'  => 'Update Service',
                'description'   => 'Allow a User to Update an existing Service'
            ],
            [
                'name'          => 'delete-service',
                'display_name'  => 'Delete Service',
                'description'   => 'Allow a User to Delete an existing Service'
            ],
            //Property Service
            [
                'name'          => 'list-property-service',
                'display_name'  => 'List Service Properties',
                'description'   => 'Allow a User to List Service Properties'
            ],
            [
                'name'          => 'create-property-service',
                'display_name'  => 'Create Service Property',
                'description'   => 'Allow a User to Create a new Service Property'
            ],
            [
                'name'          => 'update-property-service',
                'display_name'  => 'Update Service Property',
                'description'   => 'Allow a User to Update an existing Service Property'
            ],
            [
                'name'          => 'delete-property-service',
                'display_name'  => 'Delete Service Property',
                'description'   => 'Allow a User to Delete an existing Service Property'
            ],     
            //SIP Domain
            [
                'name'          => 'list-sip-domain',
                'display_name'  => 'List SIP Domains',
                'description'   => 'Allow a User to List SIP Domains'
            ],
            [
                'name'          => 'create-sip-domain',
                'display_name'  => 'Create SIP Domain',
                'description'   => 'Allow a User to Create a new SIP Domain'
            ],
            [
                'name'          => 'update-sip-domain',
                'display_name'  => 'Update SIP Domain',
                'description'   => 'Allow a User to Update an existing SIP Domain'
            ],
            [
                'name'          => 'delete-sip-domain',
                'display_name'  => 'Delete SIP Domain',
                'description'   => 'Allow a User to Delete an existing SIP Domain'
            ],
            //SIP Credential List
            [
                'name'          => 'list-sip-credential-list',
                'display_name'  => 'List SIP Credential lists',
                'description'   => 'Allow a User to List SIP Credential Lists'
            ],
            [
                'name'          => 'create-sip-credential-list',
                'display_name'  => 'Create SIP Credential List',
                'description'   => 'Allow a User to Create a new SIP Credential List'
            ],
            [
                'name'          => 'update-sip-credential-list',
                'display_name'  => 'Update SIP Credential List',
                'description'   => 'Allow a User to Update an existing SIP Credential List'
            ],
            [
                'name'          => 'delete-sip-credential-list',
                'display_name'  => 'Delete SIP Credential List',
                'description'   => 'Allow a User to Delete an existing SIP Credential List'
            ],   
            //SIP Credential
            [
                'name'          => 'list-sip-credential',
                'display_name'  => 'List SIP Credential',
                'description'   => 'Allow a User to List SIP Credential'
            ],
            [
                'name'          => 'create-sip-credential',
                'display_name'  => 'Create SIP Credential',
                'description'   => 'Allow a User to Create a new SIP Credential'
            ],
            [
                'name'          => 'update-sip-credential',
                'display_name'  => 'Update SIP Credential',
                'description'   => 'Allow a User to Update an existing SIP Credential'
            ],
            [
                'name'          => 'delete-sip-credential',
                'display_name'  => 'Delete SIP Credential',
                'description'   => 'Allow a User to Delete an existing SIP Credential'
            ],
            //SIP Credential List vs Sip Domain
            [
                'name'          => 'list-sip-credential-list-sip-domain',
                'display_name'  => 'List SIP Credential List vs SIP Domain',
                'description'   => 'Allow a User to List SIP Credential List vs SIP Domain'
            ],
            [
                'name'          => 'create-sip-credential-list-sip-domain',
                'display_name'  => 'Create SIP Credential List vs SIP Domain',
                'description'   => 'Allow a User to Create a new SIP Credential List vs SIP Domain'
            ],
            [
                'name'          => 'update-sip-credential-list-sip-domain',
                'display_name'  => 'Update SIP Credential List vs SIP Domain',
                'description'   => 'Allow a User to Update an existing SIP Credential List vs SIP Domain'
            ],
            [
                'name'          => 'delete-sip-credential-list-sip-domain',
                'display_name'  => 'Delete SIP Credential List vs SIP Domain',
                'description'   => 'Allow a User to Delete an existing SIP Credential List vs SIP Domain'
            ],
            //Plans
            [
                'name'          => 'list-plans',
                'display_name'  => 'List Plans',
                'description'   => 'Allow a User to List Plans',
            ],
            [
                'name'          => 'create-plans',
                'display_name'  => 'Create Plans',
                'description'   => 'Allow a User to Create Plans',
            ],
            [
                'name'          => 'update-plans',
                'display_name'  => 'Update Plans',
                'description'   => 'Allow a User to Update Plans',
            ],
            [
                'name'          => 'delete-plans',
                'display_name'  => 'Delete Plans',
                'description'   => 'Allow a User to Delete Plans',
            ],
            //Cards
            [
                'name'          => 'list-cards',
                'display_name'  => 'List cards',
                'description'   => 'Allow a User to List cards',
            ],
            [
                'name'          => 'create-cards',
                'display_name'  => 'Create cards',
                'description'   => 'Allow a User to Create cards',
            ],
            [
                'name'          => 'update-cards',
                'display_name'  => 'Update cards',
                'description'   => 'Allow a User to Update cards',
            ],
            [
                'name'          => 'delete-cards',
                'display_name'  => 'Delete cards',
                'description'   => 'Allow a User to Delete cards',
            ],
            //Charges
            [
                'name'          => 'list-charges',
                'display_name'  => 'List charges',
                'description'   => 'Allow a User to List charges',
            ],
            [
                'name'          => 'create-charges',
                'display_name'  => 'Create charges',
                'description'   => 'Allow a User to Create charges',
            ],
            [
                'name'          => 'update-charges',
                'display_name'  => 'Update charges',
                'description'   => 'Allow a User to Update charges',
            ],
            [
                'name'          => 'delete-charges',
                'display_name'  => 'Delete charges',
                'description'   => 'Allow a User to Delete charges',
            ],
            //Subscriptions
            [
                'name'          => 'list-subscriptions',
                'display_name'  => 'List subscriptions',
                'description'   => 'Allow a User to List subscriptions',
            ],
            [
                'name'          => 'create-subscriptions',
                'display_name'  => 'Create subscriptions',
                'description'   => 'Allow a User to Create subscriptions',
            ],
            [
                'name'          => 'update-subscriptions',
                'display_name'  => 'Update subscriptions',
                'description'   => 'Allow a User to Update subscriptions',
            ],
            [
                'name'          => 'delete-subscriptions',
                'display_name'  => 'Delete subscriptions',
                'description'   => 'Allow a User to Delete subscriptions',
            ],
        ]);

        /* define super administratir permissions */
        $this->defineSuperAdmPermissions();
    }

    public function truncateTablePermissions() {
        Schema::disableForeignKeyConstraints();
        DB::table('permissions')->truncate();
        \App\Permission::truncate();
        Schema::enableForeignKeyConstraints();
    }

    public function defineSuperAdmPermissions() {
        $this->dropSuperAdmPermissions();

        $permissions = \App\Permission::all();
        foreach ($permissions as $permission) {
            DB::table('permission_role')->insert([
                'permission_id' => $permission->id,
                'role_id' => 1
            ]);
        }
    }

    public function dropSuperAdmPermissions() {
        DB::table('permission_role')->where('role_id', '=', 1)->delete();
    }
}