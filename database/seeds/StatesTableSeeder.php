<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StatesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->truncateStateTable();

        DB::table('states')->insert([
            [
                "id" => "1",
                "state_code" => "AL", 
                "state_name" => "Alabama"
            ],
            [
                "id" => "2",
                "state_code" => "AK", 
                "state_name" => "Alaska"
            ],
            [
                "id" => "3",
                "state_code" => "AZ", 
                "state_name" => "Arizona"
            ],
            [
                "id" => "4",
                "state_code" => "AR", 
                "state_name" => "Arkansas"
            ],
            [
                "id" => "5",
                "state_code" => "CA", 
                "state_name" => "California"
            ],
            [
                "id" => "6",
                "state_code" => "CO", 
                "state_name" => "Colorado"
            ],
            [
                "id" => "7",
                "state_code" => "CT", 
                "state_name" => "Connecticut"
            ],
            [
                "id" => "8",
                "state_code" => "DE", 
                "state_name" => "Delaware"
            ],
            [
                "id" => "9",
                "state_code" => "DC", 
                "state_name" => "District of Columbia"
            ],
            [
                "id" => "10",
                "state_code" => "FL", 
                "state_name" => "Florida"
            ],
            [
                "id" => "11",
                "state_code" => "GA", 
                "state_name" => "Georgia"
            ],
            [
                "id" => "12",
                "state_code" => "HI", 
                "state_name" => "Hawaii"
            ],
            [
                "id" => "13",
                "state_code" => "ID", 
                "state_name" => "Idaho"
            ],
            [
                "id" => "14",
                "state_code" => "IL", 
                "state_name" => "Illinois"
            ],
            [
                "id" => "15",
                "state_code" => "IN", 
                "state_name" => "Indiana"
            ],
            [
                "id" => "16",
                "state_code" => "IA", 
                "state_name" => "Iowa"
            ],
            [
                "id" => "17",
                "state_code" => "KS", 
                "state_name" => "Kansas"
            ],
            [
                "id" => "18",
                "state_code" => "KY", 
                "state_name" => "Kentucky"
            ],
            [
                "id" => "19",
                "state_code" => "LA", 
                "state_name" => "Louisiana"
            ],
            [
                "id" => "20",
                "state_code" => "ME", 
                "state_name" => "Maine"
            ],
            [
                "id" => "21",
                "state_code" => "MD", 
                "state_name" => "Maryland"
            ],
            [
                "id" => "22",
                "state_code" => "MA", 
                "state_name" => "Massachusetts"
            ],
            [
                "id" => "23",
                "state_code" => "MI", 
                "state_name" => "Michigan"
            ],
            [
                "id" => "24",
                "state_code" => "MN", 
                "state_name" => "Minnesota"
            ],
            [
                "id" => "25",
                "state_code" => "MS", 
                "state_name" => "Mississippi"
            ],
            [
                "id" => "26",
                "state_code" => "MO", 
                "state_name" => "Missouri"
            ],
            [
                "id" => "27",
                "state_code" => "MT", 
                "state_name" => "Montana"
            ],
            [
                "id" => "28",
                "state_code" => "NE", 
                "state_name" => "Nebraska"
            ],
            [
                "id" => "29",
                "state_code" => "NV", 
                "state_name" => "Nevada"
            ],
            [
                "id" => "30",
                "state_code" => "NH", 
                "state_name" => "New Hampshire"
            ],
            [
                "id" => "31",
                "state_code" => "NJ", 
                "state_name" => "New Jersey"
            ],
            [
                "id" => "32",
                "state_code" => "NM", 
                "state_name" => "New Mexico"
            ],
            [
                "id" => "33",
                "state_code" => "NY", 
                "state_name" => "New York"
            ],
            [
                "id" => "34",
                "state_code" => "NC", 
                "state_name" => "North Carolina"
            ],
            [
                "id" => "35",
                "state_code" => "ND", 
                "state_name" => "North Dakota"
            ],
            [
                "id" => "36",
                "state_code" => "OH", 
                "state_name" => "Ohio"
            ],
            [
                "id" => "37",
                "state_code" => "OK", 
                "state_name" => "Oklahoma"
            ],
            [
                "id" => "38",
                "state_code" => "OR", 
                "state_name" => "Oregon"
            ],
            [
                "id" => "39",
                "state_code" => "PA", 
                "state_name" => "Pennsylvania"
            ],
            [
                "id" => "40",
                "state_code" => "PR", 
                "state_name" => "Puerto Rico"
            ],
            [
                "id" => "41",
                "state_code" => "RI", 
                "state_name" => "Rhode Island"
            ],
            [
                "id" => "42",
                "state_code" => "SC", 
                "state_name" => "South Carolina"
            ],
            [
                "id" => "43",
                "state_code" => "SD", 
                "state_name" => "South Dakota"
            ],
            [
                "id" => "44",
                "state_code" => "TN", 
                "state_name" => "Tennessee"
            ],
            [
                "id" => "45",
                "state_code" => "TX", 
                "state_name" => "Texas"
            ],
            [
                "id" => "46",
                "state_code" => "UT", 
                "state_name" => "Utah"
            ],
            [
                "id" => "47",
                "state_code" => "VT", 
                "state_name" => "Vermont"
            ],
            [
                "id" => "48",
                "state_code" => "VA", 
                "state_name" => "Virginia"
            ],
            [
                "id" => "49",
                "state_code" => "WA", 
                "state_name" => "Washington"
            ],
            [
                "id" => "50",
                "state_code" => "WV", 
                "state_name" => "West Virginia"
            ],
            [
                "id" => "51",
                "state_code" => "WI", 
                "state_name" => "Wisconsin"
            ],
            [
                "id" => "52",
                "state_code" => "WY", 
                "state_name" => "Wyoming"
            ]
        ]);
    }
    
    /**
     * Truncates states table
     *
     * @return    void
     */
    
    public function truncateStateTable()
    {
        Schema::disableForeignKeyConstraints();
        DB::table('states')->truncate();
        \App\State::truncate();
        Schema::enableForeignKeyConstraints();
    }
}
