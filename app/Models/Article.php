<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\hasMany;
use Illuminate\Database\Eloquent\Relations\hasOne;
class Article extends Model
{
    use HasFactory;
    protected $table = 'blogs';
    protected $fillable = [
        'title',
        'desc',
        'slug',
        'image',
        'article',
        'keywords',
        'user_id',
    ];
    protected $casts = [
        'created_at' => 'datetime:j F Y',
        'updated_at' => 'datetime:j F Y',
        'deleted_at' => 'datetime:j F Y'
    ];
    public function comments(): hasMany {
        return $this->hasMany(Comment::class,'blog_id','id')->orderBy('created_at', 'desc');
    }
}
