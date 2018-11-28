<?php

use Faker\Generator as Faker;

$factory->define(App\Customer::class, function (Faker $faker) {
    return [
        "name" => $faker->name,
        "address" => $faker->address,
        "city_id" => \App\City::inRandomOrder()->pluck('id')->first(),
        "email1" => $faker->freeEmail,
        "email2" => $faker->freeEmail,
        "phone1" => $faker->e164PhoneNumber,
        "phone2" => $faker->e164PhoneNumber,
        "zipcode" => $faker->numberBetween(000000, 999999)
    ];
});
