<?php

namespace App\Http\Controllers;

use App\Model\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {


        $products = Product::all();

        return view('home', compact('products'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [

            'name'    => 'required',

            'price' => 'required',

            'image'    => 'required',

            'screen' => 'required',

            'camera' => 'required',

            'cpu' => 'required',

            'ram' => 'required',

        ]);

        if($request->hasFile('image')){

            $imageName = $request->image->move('img');
//            $imageName = $request->image->store('public');
                    $product = new Product;

                    $product->name = $request->name;
                    $product->price = $request->price;
                    $product->image = $imageName;

                    $product->save();

                    return redirect('admin/home');
                }
    }

                /**
                 * Display the specified resource.
                 *
                 * @param  int  $id
                 * @return \Illuminate\Http\Response
                 */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $product = Product::where('id', $id)->first();
        return view('product.edit', compact('product'));

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, [

            'name'    => 'required',

            'price' => 'required',

            'image'    => 'required',

        ]);

        if($request->hasFile('image')) {

            $imageName = $request->image->move('img');
        }

        $product = Product::find($id);

        $product->name = $request->name;
        $product->price = $request->price;
        $product->image = $imageName;

        $product->save();

        return redirect('admin/home');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Product::where('id', $id)->delete();

        return redirect()->back();
    }
}
