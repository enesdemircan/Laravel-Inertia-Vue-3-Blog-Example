<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\User;
use App\Models\Article;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Article>
 */
class CommentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $users = User::pluck('id')->toArray();
        $article = Article::pluck('id')->toArray();
        return [

            'blog_id' => fake()->randomElement($article),
            'comment' => fake()->paragraph(1),
            'user_id' => fake()->randomElement($users)
        ];
    }
}
