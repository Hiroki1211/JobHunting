<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
}
