<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

use App\Models\Campany;
use App\Models\Task;
use App\Models\Task_category;

class TaskController extends Controller
{
    public function create(Campany $campany, Task_category $taskCategories){

        return Inertia::render('Manager/Task/Create', ['campany' => $campany, 'taskCategories' => $taskCategories->get()]);
    }
    
    public function store(Request $request, Campany $campany, Task $task){
        $authID = Auth::user()->id;
        
        $input = $request->all();
        dd($input);
        $task = $task->fill($input);
        $task->userID = $authID;
        $task->registrateUserID = $authID;
        $task->save();

        return redirect('/meeting/' . $task->campanyID);
    }
    
}
