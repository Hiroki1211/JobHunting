<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Registration;
use App\Models\Company;
use App\Models\Meeting;
use App\Models\Task;
use App\Models\Company_category;

class RegistrationController extends Controller
{
    public function index(Registration $registrations, Company $companies, Meeting $meetings, Task $tasks, Company_category $company_categories){
        $authID = Auth::user()->id;
        $companyID = $registrations->companyID($authID);
        $companies = $companies->whereIn('id', $companyID)->get();
        
        $todayTasks = $tasks->today($authID);
        $tomorrowTasks = $tasks->tomorrow($authID);
        $weekTasks = $tasks->week($authID);
        
        $todayMeetings = $meetings->today($authID);
        $tomorrowMeetings = $meetings->tomorrow($authID);
        $weekMeetings = $meetings->week($authID);
        
        $company_categories = $company_categories->get();
        
        return Inertia::render('Dashboard', ["companies" => $companies->load('company_category'), "todayTasks" => $todayTasks->load('task_category'), "tomorrowTasks" => $tomorrowTasks->load('task_category'), "weekTasks" => $weekTasks->load('task_category'), "todayMeetings" => $todayMeetings->load('meeting_category'), "tomorrowMeetings" => $tomorrowMeetings->load('meeting_category'), "weekMeetings" => $weekMeetings->load('meeting_category'), "company_categories" => $company_categories]);
    }
    
    public function companyHome(Registration $registrations, Company $companies){
        $authID = Auth::user()->id;
        $companyID = $registrations->companyID($authID);
        $companies = $companies->whereIn('id', $companyID)->get();

        return Inertia::render('Manager/Company/Home', ["companies" => $companies->load('company_category')]);
    }
    
}
