<?php
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Model\Product;
use Illuminate\Http\Request;

class ReactController extends Controller
{

    public function getReactData()
    {

        $products = Product::all();


        return $products->toJson();
    }

}
