<?php

namespace App\Http\Controllers;

use App\Models\Productos;
use Illuminate\Http\Request;
use Validator;

class ServiciosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    
     
   
    public function index(Request $request)
    {
        $search = $request->params;

        foreach($search as $searchs){
             $seh = $searchs;
        }
      
        
      $producto = Productos::where(function($q) use ($seh) {
        $q->where('nombre', 'like', "%$seh%")
           ->orwhere('precio', 'like', "%$seh%")
           ->orwhere('variaciones', 'like', "%$seh%")
           ->orwhere('categoria', 'like', "%$seh%");
           

    })->orderBy('created_at', 'desc')->paginate(5);
        return response($producto, 200);
    }

    public function orden(Request $request)
    {
        $search = $request->params;

        foreach($search as $searchs){
             $seh = $searchs;
        }
      
        if($seh=='desc'){
      $producto = Productos::orderBy('id', 'desc')->paginate(5);
        return response($producto, 200);}
        if($seh=='asc'){
            $producto = Productos::orderBy('id', 'asc')->paginate(5);
              return response($producto, 200);}
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    
    
    public function add(Request $request)
    {
 
      $Productos = new Productos();
      $Productos->nombre= $request->nombre;
      $Productos->precio = $request->precio;
      $Productos->variaciones = $request->variaciones;
      $Productos->categoria = $request->categoria;
      $Productos->save();

     return response()->json(['status'=>'success','data'=>$Productos]);


    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\client  $client
     * @return \Illuminate\Http\Response
     */
    public function delete($id){

        $Productos = Productos::where('id', $id)->delete();
        return response()->json(['status'=>'success','data'=>$Productos]);
     }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Productos  $client
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request, $id)
    {
       $Productos = Productos::where('id',$id)->first();
       $Productos->nombre= $request->nombre;
       $Productos->precio = $request->precio;
       $Productos->variaciones = $request->variaciones;
       $Productos->categoria = $request->categoria;
      
      $Productos->save();

      return response()->json(['status'=>'success','data'=>$Productos]);
    }

    
}
