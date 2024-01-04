<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Registration;
use App\Models\Campany;

class RegistrationController extends Controller
{
    public function index(Registration $registrations, Campany $campanies){
        $authID = Auth::user()->id;
        $campanyID = $registrations->campanyID($authID);
        $campanies = $campanies->whereIn('id', $campanyID)->get();
        
        return Inertia::render('Dashboard', ["campanies" => $campanies]);
    }
    
    public function campanyHome(Registration $registrations, Campany $campanies){
        $authID = Auth::user()->id;
        $campanyID = $registrations->campanyID($authID);
        $campanies = $campanies->whereIn('id', $campanyID)->get();

        return Inertia::render('Manager/CampanyHome', ["campanies" => $campanies]);
    }
    
}
