<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Registration extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'userID',
        'registrateUserID',
        'campanyID',
    ];   
    
    public function registration(int $userID){
        return $this->where('userID', '=', $userID)->get();
    }
    
    public function campanyID(int $userID){
        $registrationID = array();
        $registrations = $this->where('userID', '=', $userID)->get();
        foreach($registrations as $registration){
            if($registration->userID === $userID){
                $registrationID[] = $registration->campanyID;
            }
        }
        
        return $registrationID;
    }
    
}
