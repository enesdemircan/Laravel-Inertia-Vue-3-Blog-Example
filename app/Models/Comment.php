<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Comment extends Model
{
    use HasFactory;
    protected $table = 'comments';
    protected $fillable = [
        'blog_id',
        'comment',
        'user_id'
    ];
    protected $casts = [
        'created_at' => 'datetime:j F Y H:i:s',
        'updated_at' => 'datetime:j F Y',
        'deleted_at' => 'datetime:j F Y'
    ];
    public function Article(): BelongsTo
    {
        return $this->belongsTo(Article::class);
    }

    public function user(): hasOne
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }

}
