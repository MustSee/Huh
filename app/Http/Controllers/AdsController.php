<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Ad;
use Illuminate\Support\Facades\DB;

class AdsController extends Controller
{
    public function showAllAds()
    {
        $ads = DB::table('ads')
            ->leftJoin('categories', 'ads.category_id', '=', 'categories.id')
            ->select('ads.id', 'ads.title', 'ads.description', 'ads.created_at', 'ads.category_id', 'categories.name')
            ->orderBy('ads.id', 'asc')
            ->get();
        return response($ads, 200);
    }

    public function showOneAd(Ad $ad)
    {
        $res = DB::table('ads')
            ->leftJoin('categories', 'ads.category_id', '=', 'categories.id')
            ->select('ads.id', 'ads.title', 'ads.description', 'ads.created_at', 'ads.category_id', 'categories.name')
            ->where('ads.id', $ad->id)
            ->get();
        return response($res, 200);
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
