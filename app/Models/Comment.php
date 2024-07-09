<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'board_id', 'user_id', 'lists_id', 'card_id', 'description'];

    public function board()
    {
        return $this->belongsTo(Board::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function lists()
    {
        return $this->belongsTo(Lists::class);
    }

    public function card()
    {
        return $this->belongsTo(Card::class);
    }
}
