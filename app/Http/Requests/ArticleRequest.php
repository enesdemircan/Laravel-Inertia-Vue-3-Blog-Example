<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ArticleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string|unique:blogs,title',
            'desc' => 'required|string|max:160',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'article' =>  'required|string',
            'keywords' =>  'required|string'
        ];
    }
}
