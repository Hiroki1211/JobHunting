<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use DateTime;

class TaskCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('task_categories')->insert([
            'name' => 'ES・履歴書',
            'created_at' => new DateTime(),
            'updated_at' => new DateTIme(),
        ]);
        
         DB::table('task_categories')->insert([
            'name' => '適性検査',
            'created_at' => new DateTime(),
            'updated_at' => new DateTIme(),
        ]);    
        
        DB::table('task_categories')->insert([
            'name' => 'コーディングテスト',
            'created_at' => new DateTime(),
            'updated_at' => new DateTIme(),
        ]);
        
         DB::table('task_categories')->insert([
            'name' => '内定承諾',
            'created_at' => new DateTime(),
            'updated_at' => new DateTIme(),
        ]); 
        
         DB::table('task_categories')->insert([
            'name' => 'その他',
            'created_at' => new DateTime(),
            'updated_at' => new DateTIme(),
        ]); 
    }
}
