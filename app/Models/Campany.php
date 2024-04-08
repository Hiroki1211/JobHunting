<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Campany extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'name',
        'telephone',
        'email',
        'HP',
        'workLocation',
        'contents',
        'workTime',
        'flex',
        'remoteWork',
        'cloth',
        'incomeYear',
        'incomeMonth',
        'incomeNatural',
        'fixOverTime',
        'fixOverTimeHour',
        'fixOverTimePayment',
        'campany_category_id',
    ];
    
    public function campany_category(){
        return $this->belongsTo(Campany_category::class);
    }
}
