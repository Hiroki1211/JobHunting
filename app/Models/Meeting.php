<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use DateTime;
use DateInterval;

use App\Models\Meeting_category;

class Meeting extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'userID',
        'registrateUserID',
        'campanyID',
        'campanyName',
        'startDate',
        'endDate',
        'memo',
        'location',
        'cloth',
        'meeting_category_id'
    ];
    
    public function meeting_category(){
        return $this->belongsTo(Meeting_category::class);
    }
    
    // 今日のミーティング
    public function today(int $userID){
        $today = new DateTime();
        $todayMeeting = $this->where('userID', '=', $userID)->whereDate('startDate', $today)->get();
        return $todayMeeting;
    }
    
    // 明日のミーティング
    public function tomorrow(int $userID){
        $today = new DateTime();
        $tomorrow = $today->add(new DateInterval('P1D'));
        $tomorrowMeeting = $this->where('userID', '=', $userID)->whereDate('startDate', $tomorrow)->get();
        return $tomorrowMeeting;
    }
    
    // 今週のミーティング
    public function week(int $userID){
        $today = new Datetime();
        $tomorrow = $today->add(new DateInterval('P1D'));
        $week = $today->add(new DateInterval('P7D'));
        $weekMeeting = $this->where('userID', '=', $userID)->whereDate('startDate', '>', $tomorrow)->whereDate('startDate', '<=', $week)->orderBy('endDate', 'asc')->get();
        return $weekMeeting;
    }
    
    // 以降のミーティング
    public function after(int $userID){
        $today = new DateTime();
        $week = $today->add(new DateInterval('P7D'));
        $aftermeetings = $this->where('userID', '=', $userID)->whereDate('startDate', '>', $week)->orderBy('startDate', 'asc')->get();
        return $aftermeetings;
    }
    
    // カレンダー用
    public function calendar(){
        $array = [];
        $meetings = $this->get();
        foreach($meetings as $meeting){
            array_push($array, ["title" => $meeting->meeting_category()->first()->name, "start" => $meeting->startDate, "end" => $meeting->endDate]);
        }
        
        return $array;
    }
}
