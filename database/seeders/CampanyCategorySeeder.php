<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use DateTime;

class CampanyCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('campany_categories')->insert([
            'name' => 'メーカー',
            'color'=> 'red',
            'created_at' => new DateTime(),
            'updated_at' => new DateTIme(),
        ]);
        
        DB::table('campany_categories')->insert([
            'name' => '商社',
            'color'=> 'orange',
            'created_at' => new DateTime(),
            'updated_at' => new DateTIme(),
        ]);
        
        DB::table('campany_categories')->insert([
            'name' => '小売',
            'color'=> 'yellow',
            'created_at' => new DateTime(),
            'updated_at' => new DateTIme(),
        ]);
        
        DB::table('campany_categories')->insert([
            'name' => '金融',
            'color'=> 'lightGreen',
            'created_at' => new DateTime(),
            'updated_at' => new DateTIme(),
        ]);
        
        DB::table('campany_categories')->insert([
            'name' => 'サービス',
            'color'=> 'green',
            'created_at' => new DateTime(),
            'updated_at' => new DateTIme(),
        ]);
        
        DB::table('campany_categories')->insert([
            'name' => 'IT',
            'color'=> 'lightBlue',
            'created_at' => new DateTime(),
            'updated_at' => new DateTIme(),
        ]);
        
        DB::table('campany_categories')->insert([
            'name' => '広告・出版・マスコミ',
            'color'=> 'blue',
            'created_at' => new DateTime(),
            'updated_at' => new DateTIme(),
        ]);
        
        DB::table('campany_categories')->insert([
            'name' => '官公庁・公社・団体',
            'color'=> 'purple',
            'created_at' => new DateTime(),
            'updated_at' => new DateTIme(),
        ]);
    }
}
