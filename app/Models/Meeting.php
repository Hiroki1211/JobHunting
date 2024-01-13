<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Model\MeetingCategory;

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
        'meetingCategoryID'
    ];
    
    public function meetingCategory(){
        return $this->belongsTo(MeetingCategory::class);
    }
}
