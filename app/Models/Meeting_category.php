<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Meeting;

class Meeting_category extends Model
{
    use HasFactory;
    
    public function meetings(){
        return $this->hasMany(Meeting::class);
    }
}
