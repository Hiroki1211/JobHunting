<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Registration;
use App\Models\Campany;
use App\Models\Meeting;
use App\Models\Task;
use App\Models\Campany_category;

class RegistrationController extends Controller
{
    public function index(Registration $registrations, Campany $campanies, Meeting $meetings, Task $tasks, Campany_category $campany_categories){
        $authID = Auth::user()->id;
        $campanyID = $registrations->campanyID($authID);
        $campanies = $campanies->whereIn('id', $campanyID)->get();
        
        $todayTasks = $tasks->today($authID);
        $tomorrowTasks = $tasks->tomorrow($authID);
        $weekTasks = $tasks->week($authID);
        
        $todayMeetings = $meetings->today($authID);
        $tomorrowMeetings = $meetings->tomorrow($authID);
        $weekMeetings = $meetings->week($authID);
        
        $campany_categories = $campany_categories->get();
        
        return Inertia::render('Dashboard', ["campanies" => $campanies->load('campany_category'), "todayTasks" => $todayTasks->load('task_category'), "tomorrowTasks" => $tomorrowTasks->load('task_category'), "weekTasks" => $weekTasks->load('task_category'), "todayMeetings" => $todayMeetings->load('meeting_category'), "tomorrowMeetings" => $tomorrowMeetings->load('meeting_category'), "weekMeetings" => $weekMeetings->load('meeting_category'), "campany_categories" => $campany_categories]);
    }
    
    public function campanyHome(Registration $registrations, Campany $campanies){
        $authID = Auth::user()->id;
        $campanyID = $registrations->campanyID($authID);
        $campanies = $campanies->whereIn('id', $campanyID)->get();

        return Inertia::render('Manager/Campany/Home', ["campanies" => $campanies->load('campany_category')]);
    }
    
}
