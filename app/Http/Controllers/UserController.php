<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAuthRequest;
use App\Http\Requests\StoreRegRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;


class UserController extends Controller
{

    public function reg(StoreRegRequest $request)
    {
        $user = User::create($request->all());
        return response()->json(['user' => $user, 'token' => $user->createToken('api')->plainTextToken]);
    }

    public function autn(StoreAuthRequest $request)
    {
        $user = User::where('login', $request->login)->first();
        if ($user) {
            if (Hash::check($request->password, $user->password)) {
                return response()->json(['user' => $user, 'token' => $user->createToken('api')->plainTextToken]);
            }
        }
        return response()->json(['errors' => ['login' => ['Ошибка входа']]]);
    }

    public function logout()
    {
        Auth::user()->currentAccessToken()->delete();
        return response()->json(['message' => 'ok']);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
    public function store($request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update($request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }
}
