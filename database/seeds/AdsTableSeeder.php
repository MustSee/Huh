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
        for ($i = 0; $i < 10; $i++) {
            Ad::create([
                'title' => $faker->title,
                'description' => $faker->paragraph,
                'category_id' => $faker->numberBetween($min = 1, $max = 4)
            ]);
        }
    }
}
