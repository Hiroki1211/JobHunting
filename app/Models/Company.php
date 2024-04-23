<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
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
        'company_category_id',
    ];
    
    public function company_category(){
        return $this->belongsTo(Company_category::class);
    }
}
