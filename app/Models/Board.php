<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Board extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'user_id',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function lists()
    {
        return $this->hasMany(Lists::class);
    }

    public function comment(): HasMany
    {
        return $this->hasMany(Comment::class);
    }

    public function card(): HasMany
    {
        return $this->hasMany(Card::class);
    }
}
