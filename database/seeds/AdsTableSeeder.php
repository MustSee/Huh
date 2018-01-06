<?php

use Illuminate\Database\Seeder;
use App\Ad;

class AdsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();

        // Create 30 ad records
        for ($i = 0; $i < 30; $i++) {
            Ad::create([
                'title' => $faker->title,
                'description' => $faker->paragraph
            ]);
        }
    }
}
