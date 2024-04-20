<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Campany;
use App\Models\Campany_category;
use App\Models\Registration;
use App\Models\Meeting;
use App\Models\Task;

class CampanyController extends Controller
{
    public function meetingTaskHome(Campany $campany, Meeting $meetings, Task $tasks){
        $meetings = $meetings->where('campanyID', '=', $campany->id)->with("meeting_category")->get();
        $tasks = $tasks->where('campanyID', '=', $campany->id)->with("task_category")->get();
        return Inertia::render('Manager/Campany/MeetingTask', ['meetings' => $meetings, 'campany' => $campany, 'tasks' => $tasks]);
    }
    
    public function create(Campany_category $categories){
        $categories = $categories->get();
        return Inertia::render('Manager/Campany/Create', ['categories' => $categories]);
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
        return Inertia::render('Manager/Campany/Show', ["campany" => $campany->load('campany_category')]);
    }
    
    public function edit(Campany $campany, Campany_category $categories){
        return Inertia::render('Manager/Campany/Edit', ["campany" => $campany->load('campany_category'), "categories" => $categories->get()]);
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
