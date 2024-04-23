<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

use App\Models\Company;
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
    
    public function create(Company $company, Task_category $taskCategories){

        return Inertia::render('Manager/Task/Create', ['company' => $company, 'taskCategories' => $taskCategories->get()]);
    }
    
    public function store(Request $request, Company $company, Task $task){
        $authID = Auth::user()->id;
        
        $input = $request->all();
        $task = $task->fill($input);
        $task->userID = $authID;
        $task->registrateUserID = $authID;
        $task->save();

        return redirect('/meeting/' . $task->companyID);
    }
    
    public function show(Task $task){
        return Inertia::render('Manager/Task/Show', ['task' => $task->load('task_category')]);
    }
    
    public function edit(Task $task, Company $company, Task_category $taskCategories){
        $company = $company->where("id", "=", $task->companyID)->first();
        
        return Inertia::render('Manager/Task/Edit', ['task' => $task, 'company' => $company, 'taskCategories' => $taskCategories->get()]);
    }
    
    public function update(Task $task, Request $request){
        $input = $request->all();
        $task->fill($input)->save();
        return redirect('/meeting/' . $task->companyID);
    }
    
    public function delete(Task $task){
        $companyID = $task->companyID;
        $task -> delete();
        
        return redirect('/meeting/' . $companyID);
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
