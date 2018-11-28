# HomeServerInc

## This project uses:

 - PHP 7.1+
 - Composer
 - NodeJS/NPM in order to get packages
 - MySQL/MariaDB Server

## Setting up local development enviroment

To work with this project, just make sure that all requirements are satisfied. Just clone this repository to a local folder:

```
git clone https://github.com/marcioelias/HomeServerIncNew.git dest_dir
```
* dest_dir is a destination directory to put all project files, this is optional, and case is not informed, all files will be put on a new directory called HomeServerIncNew on the current directory.

After finish the clone process, install all project dependencies with composer

``` 
composer install
```

Then install node_modules with
```
npm install
```
Create a database, and copy the .env.example file on root folder of the project to .env file.

Generate a Key for the App

```
php artisan key:generate
```

Genereta a JWT Secret

```
php artisan jwt:secret
``` 

Edit the .env file and set the configuration values of the database access
- DB_HOST=127.0.0.1 
- DB_PORT=3306
- DB_DATABASE=your_database      
- DB_USERNAME=your_username     
- DB_PASSWORD=your_password

Before close the .env file, make these folow changes:
- BROADCAST_DRIVER=log -> BROADCAST_DRIVER=pusher
- PUSHER_APP_ID=your_pusher_app_id
- PUSHER_APP_KEY=your_pusher_app_key
- PUSHER_APP_SECRET=your_pusher_app_secret
- PUSHER_APP_CLUSTER=your_pusher_app_cluster

Finally run the migration and seeding database data classes.

```
php artisan migrate --seed
```

If you got here without any throuble, can now run a local server to development and test of the App

```
php artisan serve
``` 

And to automatically compile the assets (JS and CSS) at any change run this:

```
npm run watch
```

To access the local running version goto localhost:8000





