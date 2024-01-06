<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Campany;
use App\Models\Registration;

class CampanyController extends Controller
{
    public function create(){
        return Inertia::render('Manager/Campany/Create');
    }
    
    public function store(Campany $campany, Registration $registration, Request $request, RegistrationController $contoroller){
        $authID = Auth::user()->id;
        
        $input = $request->all();
        $campany->fill($input)->save(); // campanyに登録
        
        $registration->userID = $authID;
        $registration->registrateUserID = $authID;
        $registration->campanyID = $campany->id;
        $registration->save();  // registerに登録
        
        return redirect("/campany");
    }
    
    public function show(Campany $campany){
        return Inertia::render('Manager/Campany/Show', ["campany" => $campany]);
    }
    
    public function edit(Campany $campany){
        return Inertia::render('Manager/Campany/Edit', ["campany" => $campany]);
    }
    
    public function update(Campany $campany, Request $request){
        $input = $request->all();
        $campany->fill($input)->save();
        return redirect("/campany/" . $campany->id);
    }
    
    public function delete(Campany $campany, Registration $registrations){
        $campanyID = $campany->id;
        
        $registrations = $registrations->where('campanyID', '=', $campanyID)->get();
        foreach($registrations as $registration){
            $registration->delete();
        }
        
        $campany->delete();
        
        return redirect("/campany");
    }
    
    
}
