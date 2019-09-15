<?php
namespace App\Http\Controllers;


use App\Http\Controllers\Controller;
use App\Model\Product;
use Illuminate\Http\Request;


class ReactController extends Controller
{

    public function showReactApp()
    {

        $products = Product::all();
        

        return view('main', compact('products'));
    }


}
