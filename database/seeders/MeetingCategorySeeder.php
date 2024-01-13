<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use DateTime;

class MeetingCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('meeting_categories')->insert([
            'name' => '一次面接',
            'created_at' => new DateTime(),
            'updated_at' => new DateTIme(),
        ]);
        
         DB::table('meeting_categories')->insert([
            'name' => '二次面接',
            'created_at' => new DateTime(),
            'updated_at' => new DateTIme(),
        ]);    
        
        DB::table('meeting_categories')->insert([
            'name' => '三次面接',
            'created_at' => new DateTime(),
            'updated_at' => new DateTIme(),
        ]);
        
         DB::table('meeting_categories')->insert([
            'name' => '四次面接',
            'created_at' => new DateTime(),
            'updated_at' => new DateTIme(),
        ]); 
        
        DB::table('meeting_categories')->insert([
            'name' => '五次面接',
            'created_at' => new DateTime(),
            'updated_at' => new DateTIme(),
        ]);
        
         DB::table('meeting_categories')->insert([
            'name' => '最終面接',
            'created_at' => new DateTime(),
            'updated_at' => new DateTIme(),
        ]);    
        
        DB::table('meeting_categories')->insert([
            'name' => '面談',
            'created_at' => new DateTime(),
            'updated_at' => new DateTIme(),
        ]);
        
         DB::table('meeting_categories')->insert([
            'name' => '説明会',
            'created_at' => new DateTime(),
            'updated_at' => new DateTIme(),
        ]); 
        
        DB::table('meeting_categories')->insert([
            'name' => 'インターン面接',
            'created_at' => new DateTime(),
            'updated_at' => new DateTIme(),
        ]);
        
         DB::table('meeting_categories')->insert([
            'name' => 'グループディスカッション',
            'created_at' => new DateTime(),
            'updated_at' => new DateTIme(),
        ]); 
        
        DB::table('meeting_categories')->insert([
            'name' => 'その他',
            'created_at' => new DateTime(),
            'updated_at' => new DateTIme(),
        ]);
    }
}
