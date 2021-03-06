<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Model\User::class, 15)->create()->each(function ($u) {
            $u->books()->saveMany(factory(App\Model\Book::class, 50)->make());
        });
    }
}
