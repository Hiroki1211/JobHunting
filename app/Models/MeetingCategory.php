<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Meeting;

class MeetingCategory extends Model
{
    use HasFactory;
    
    public function meetings(){
        return $this->hasMany(Meeting::class);
    }
}
