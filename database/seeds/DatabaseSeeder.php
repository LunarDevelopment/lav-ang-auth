<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\User;

class DatabaseSeeder extends Seeder
{
  public function run()
  {
    Model::unguard();

    DB::table('users')->delete();

    $users = array(
      ['name' => 'Lewis Dimmick', 'email' => 'lewis.dimmick@meridiandelta.com', 'password' => Hash::make('secret')],
      ['name' => 'Meridian Dimmick', 'email' => 'development.lunar@gmail.com', 'password' => Hash::make('secret')],
    );

    // Loop through each user above and create the record for them in the database
    foreach ($users as $user)
    {
      User::create($user);
    }

    Model::reguard();
  }
}