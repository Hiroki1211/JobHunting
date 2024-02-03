<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
}
