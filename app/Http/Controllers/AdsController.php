<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Ad;

class AdsController extends Controller
{
    public function showAllAds()
    {
        return response(Ad::all(), 200);
    }

    public function showOneAd(Ad $ad)
    {
        return response($ad, 200);
    }

    public function createOneAd(Request $request)
    {
        // Validation rules for incoming HTTP requests
        $this->validate($request, [
            'title' => 'required|unique:ads|max:255',
            'description' => 'required'
        ]);
        $ad = Ad::create($request->all());
        return response()->json($ad, 201);
    }

    public function updateOneAd(Request $request, Ad $ad)
    {
        $ad->update($request->all());
        return response()->json($ad, 200);
    }

    public function deleteOneAd(Ad $ad)
    {
        $ad->delete();
        return response()->json(null, 204);
    }
}
