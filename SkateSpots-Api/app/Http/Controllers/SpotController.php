<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Spot;

class SpotController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $count = $request->input('count') ?: 10;
        $currentCount = $request->input('current_count') ?: 0;
        $spots = Spot::with('user')
                    ->orderBy('view_num', 'desc')
                    ->skip($currentCount)
                    ->take($count)
                    ->get();
        $total = Spot::count();
        $data = [
            'spots' => $spots,
            'total' => $total,
        ];
        return response()->json($data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            Spot::create($request->all());
        } catch (Exception $e) {
            Log::error('创建失败'.$e->getMessage());
            return response()->json('store failed', 500);
        }
        return response()->json('store success');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $spot = Spot::with('user')->findOrFail($id);
        return response()->json($spot);
    }
}
