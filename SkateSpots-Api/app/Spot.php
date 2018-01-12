<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Spot extends Model
{
    protected $fillable = ['name', 'latitude', 'user_id', 'type', 'cover'];

    public function user()
    {
        return $this->belongsTo('\App\User');
    }
}
