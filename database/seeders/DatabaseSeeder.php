<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Comment;
use Illuminate\Database\Seeder;
use App\Models\Article;
use App\Models\User;
use App\Models\Permission;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
         User::factory()->create([
            'name' => 'Enes',
             'surname' => 'Demircan',
             'email' => 'info@enesdemircan.com',
             'password' => '$2y$10$TU1zgAe/g7J3yDc9D5y6pOV/u0dzVi.JQI3TbDTNC.fly.3w1nmNq', // 12345678
             'auth_type' => 1
         ]);
        User::factory(10)->create();
        Permission::create([
            'name' => 'Adminstrator',
            'routes' => []
        ]);
        Permission::create([
            'name' => 'Editor',
            'routes' => ['article.destroy','comment.destroy'],
        ]);
        Permission::factory(5)->create();

        Article::factory(10)->create();
        Comment::factory(50)->create();
    }
}
