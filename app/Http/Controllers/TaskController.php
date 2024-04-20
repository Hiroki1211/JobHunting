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
    public function index(Task $tasks){
        $authID = Auth::user()->id;
        
        $todayTasks = $tasks->today($authID);
        $tomorrowTasks = $tasks->tomorrow($authID);
        $weekTasks = $tasks->week($authID);
        $afterTasks = $tasks->after($authID);
        
        return Inertia::render('Manager/Task/Home', ['todayTasks' => $todayTasks->load('task_category'), 'tomorrowTasks' => $tomorrowTasks->load('task_category'), 'weekTasks' => $weekTasks->load('task_category'), 'afterTasks' => $afterTasks->load('task_category')]);
    }
    
    public function create(Campany $campany, Task_category $taskCategories){

        return Inertia::render('Manager/Task/Create', ['campany' => $campany, 'taskCategories' => $taskCategories->get()]);
    }
    
    public function store(Request $request, Campany $campany, Task $task){
        $authID = Auth::user()->id;
        
        $input = $request->all();
        $task = $task->fill($input);
        $task->userID = $authID;
        $task->registrateUserID = $authID;
        $task->save();

        return redirect('/meeting/' . $task->campanyID);
    }
    
    public function show(Task $task){
        return Inertia::render('Manager/Task/Show', ['task' => $task->load('task_category')]);
    }
    
    public function edit(Task $task, Campany $campany, Task_category $taskCategories){
        $campany = $campany->where("id", "=", $task->campanyID)->first();
        
        return Inertia::render('Manager/Task/Edit', ['task' => $task, 'campany' => $campany, 'taskCategories' => $taskCategories->get()]);
    }
    
    public function update(Task $task, Request $request){
        $input = $request->all();
        $task->fill($input)->save();
        return redirect('/meeting/' . $task->campanyID);
    }
    
    public function delete(Task $task){
        $campanyID = $task->campanyID;
        $task -> delete();
        
        return redirect('/meeting/' . $campanyID);
    }
    
    public function stateUpdate(Request $requests, Task $task){
        $inputs = $requests->all();
        foreach($inputs as $input){
            $task = $task ->where('id', '=', $input['id'])->first();
            $task->fill($input)->save();
        }
        return redirect('/dashboard');
    }
    
    public function allStateUpdate(Request $requests, Task $task){
        $inputs = $requests->all();
        foreach($inputs as $input){
            $task = $task ->where('id', '=', $input['id'])->first();
            $task->fill($input)->save();
        }
        return redirect('/task');
    }
}
