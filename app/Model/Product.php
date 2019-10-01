<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'products';

    protected $fillable = [
        "id",
        "category",
        "title",
        "img",
        "img2",
        "price",
        "info",
        "color"
    ];
}
