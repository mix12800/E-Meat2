<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{

    public function getproducts() {
        return response()->json(["products"=> Product::with('category')->paginate(9)]);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(["products" => Product::with("category")->orderBy("created_at", "desc")->get()]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request)
    {
        $product = Product::create(['photo' => Storage::disk("public")->put('/photos', $request->file("photo"))] + $request->all());
        return response()->json(["product" => $product]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        return response()->json(["product" => Product::where("id", $product->id)->with("category")->first()]);
    }



    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        $product->title = $request->title;
        $product->description = $request->description;
        $product->price = $request->price;
        $product->category_id = $request->category_id;
        if ($request->file("photo")) {
            $product->photo = Storage::disk("public")->put("/photo", $request->file("photo"));
        }
        $product->save();
        return response()->json(["product" => $product]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();
        return response()->json(["mesage" => 'ok']);
    }
}
