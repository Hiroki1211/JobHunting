<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use DateTime;
use DateInterval;

class Task extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'userID',
        'registrateUserID',
        'campanyID',
        'campanyName',
        'endDate',
        'memo',
        'state',
        'task_category_id'
    ];
    
    public function task_category(){
        return $this->belongsTo(Task_category::class);
    }
    
    public function today(int $userID){
        $today = new DateTime();
        $todayTask = $this->where('userID', '=', $userID)->whereDate('endDate', $today)->get();
        return $todayTask;
    }
    
    public function tomorrow(int $userID){
        $today = new DateTime();
        $tomorrow = $today->add(new DateInterval('P1D'));
        $tomorrowTask = $this->where('userID', '=', $userID)->whereDate('endDate', $tomorrow)->get();
        return $tomorrowTask;
    }
    
    public function week(int $userID){
        $today = new DateTime();
        $tomorrow = $today->add(new DateInterval('P1D'));
        $today2 = new DateTime();
        $week = $today2->add(new DateInterval('P7D'));
        $weekTask = $this->where('userID', '=', $userID)->whereDate('endDate', '>', $tomorrow)->whereDate('endDate', '<=', $week)->orderBy('endDate', 'asc')->get();
        return $weekTask;
    }
    
    // 以降のミーティング
    public function after(int $userID){
        $today = new DateTime();
        $week = $today->add(new DateInterval('P7D'));
        $afterTasks = $this->where('userID', '=', $userID)->whereDate('endDate', '>', $week)->orderBy('endDate', 'asc')->get();
        return $afterTasks;
    }
    
    // カレンダー用
    public function calendar(){
        $array = [];
        $tasks = $this->get();
        foreach($tasks as $task){
            array_push($array, ["title" => $task->task_category()->first()->name, "start" => $task->endDate, "end" => $task->endDate]);
        }
        
        return $array;
    }

}
