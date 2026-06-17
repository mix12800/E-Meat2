<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);


        $Users = [
            [
                'name' => 'admin',
                'email' => 'admin@admin.com',
                'login' => 'admin',
                'role' => 'admin',
                'password' => 'admin',
            ],
            [
                'name' => 'king',
                'email' => 'king-sutton97@gmail.com',
                'login' => 'king',
                'role' => 'user',
                'password' => 'king',
            ],
            [
                'name' => 'josef',
                'email' => 'josef-marcus94@gmail.com',
                'login' => 'josef',
                'role' => 'user',
                'password' => 'josef',
            ],
            [
                'name' => 'decker',
                'email' => 'decker-derrell49@gmail.com',
                'login' => 'decker',
                'role' => 'user',
                'password' => 'decker',
            ],
            [
                'name' => 'hargrove',
                'email' => 'hargrove-darien29@gmail.com',
                'login' => 'hargrove',
                'role' => 'manager',
                'password' => 'hargrove',
            ],
            [
                'name' => 'julio',
                'email' => 'julio-corbett15@gmail.com',
                'login' => 'julio',
                'role' => 'user',
                'password' => 'julio',
            ],
            [
                'name' => 'mcgovern',
                'email' => 'mcgovern-ava76@gmail.com',
                'login' => 'mcgovern',
                'role' => 'user',
                'password' => 'mcgovern',
            ],
            // 
            [
                'name' => 'codie',
                'email' => 'codie_capps37@gmail.com',
                'login' => 'codie',
                'role' => 'admin',
                'password' => 'codie',
            ],
            [
                'name' => 'winston',
                'email' => 'winston_rosendo35@gmail.com',
                'login' => 'winston',
                'role' => 'user',
                'password' => 'winston',
            ],
            [
                'name' => 'immanuel',
                'email' => 'immanuel-merritt71@gmail.com',
                'login' => 'immanuel',
                'role' => 'user',
                'password' => 'immanuel',
            ],
            [
                'name' => 'remy',
                'email' => 'remy_montoya86@gmail.com',
                'login' => 'remy',
                'role' => 'user',
                'password' => 'remy',
            ]
        ];

        $Categories = [
            [
                'name' => 'Антрекот',
            ],
            [
                'name' => 'Вырезка',
            ],
            [
                'name' => 'Ребрышки',
            ],
            [
                'name' => 'Стейки',
            ],
            [
                'name' => 'Телятина',
            ],
            [
                'name' => 'Свинина',
            ]
        ];

        foreach ($Users as $User) {
            User::create($User);
        }

        foreach ($Categories as $Category) {
            Category::create($Category);
        }
    }
}
