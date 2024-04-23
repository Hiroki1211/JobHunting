<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Company;
use App\Models\Company_category;
use App\Models\Registration;
use App\Models\Meeting;
use App\Models\Task;

class CompanyController extends Controller
{
    public function meetingTaskHome(Company $company, Meeting $meetings, Task $tasks){
        $meetings = $meetings->where('companyID', '=', $company->id)->with("meeting_category")->get();
        $tasks = $tasks->where('companyID', '=', $company->id)->with("task_category")->get();
        return Inertia::render('Manager/Company/MeetingTask', ['meetings' => $meetings, 'company' => $company, 'tasks' => $tasks]);
    }
    
    public function create(Company_category $categories){
        $categories = $categories->get();
        return Inertia::render('Manager/Company/Create', ['categories' => $categories]);
    }
    
    public function store(Company $company, Registration $registration, Request $request, RegistrationController $contoroller){
        $authID = Auth::user()->id;
        
        $input = $request->all();
        $company->fill($input)->save(); // companyに登録
        
        $registration->userID = $authID;
        $registration->registrateUserID = $authID;
        $registration->companyID = $company->id;
        $registration->save();  // registerに登録
        
        return redirect("/company");
    }
    
    public function show(Company $company){
        return Inertia::render('Manager/Company/Show', ["company" => $company->load('company_category')]);
    }
    
    public function edit(Company $company, Company_category $categories){
        return Inertia::render('Manager/Company/Edit', ["company" => $company->load('company_category'), "categories" => $categories->get()]);
    }
    
    public function update(Company $company, Request $request){
        $input = $request->all();
        $company->fill($input)->save();
        return redirect("/company/" . $company->id);
    }
    
    public function delete(Company $company, Registration $registrations){
        $companyID = $company->id;
        
        $registrations = $registrations->where('companyID', '=', $companyID)->get();
        foreach($registrations as $registration){
            $registration->delete();
        }
        
        $company->delete();
        
        return redirect("/company");
    }
    
    
}
