<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductsTableSeeder extends Seeder
{
    private $products = [
        ["iPhone 7", "img/phpbvcLo8", 213, ""],
        ["iPhone 8", "img/phpCgisNc", 312, ""],
        ["iPhone Xs", "img/phpxLSY8W", 404, ""],
        ["iPhone Xr", "img/phpmYXI7r", 403, ""],
        ["iPad Pro", "img/phpTaqqS3", 336, ""],
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $now = Carbon::now();
        if (!empty($this->products) && is_array($this->products)) {
            foreach ($this->products as $product) {
                DB::table('products')->insert([
                    'name'         => $product[0],
                    'image'      => $product[1],
                    'price'           => $product[2],
                    'created_at'    => $now,
                    'updated_at'    => $now,
                ]);
            }
        }
    }
}


