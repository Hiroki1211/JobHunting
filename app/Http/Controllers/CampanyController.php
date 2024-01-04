<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Campany;
use App\Models\Registration;
use App\Http\Controllers\RegistrationController;

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
}
