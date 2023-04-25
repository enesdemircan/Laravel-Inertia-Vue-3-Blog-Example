<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Article>
 */
class ArticleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $title  = fake()->unique()->paragraph(1);
        return [
            'title' => $title,
            'desc' => fake()->paragraph(1),
            'slug' => str::slug($title,'-'),
            'image' => '/images/1083636.jpg',
            'article' => fake()->paragraph(10),
            'keywords' => 'test,lorem',
            'user_id' => 1,
        ];
    }
}
