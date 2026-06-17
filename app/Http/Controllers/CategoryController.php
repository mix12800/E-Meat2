<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateСategoryRequest;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(["categories" => Category::orderBy("created_at", "desc")->get()]);
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
    public function store(StoreCategoryRequest $request)
    {
        $Category = Category::create($request->all());
        return response()->json(["category" => $Category]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $Category)
    {
        return response()->json(["Category" => $Category]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit()
    {
        // 
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateСategoryRequest $request, Category $Category)
    {
        $Category->update($request->all());
        return response()->json(["category" => $Category]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $Category)
    {
        $Category->delete();
        return response()->json(["message" => "ok"]);
    }
}
