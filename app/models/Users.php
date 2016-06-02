<?php

use Phalcon\Mvc\Model;

class Users extends Model
{
    public $id;
    public $vcid;
    public $fullname;
    public $shortname;
    public $email;
    public $startdate;
    public $enddate;
    public $games_total;
    public $score;
    public $games; // link to user_games table

    // $this->belongsTo(
    //     'product_types_id',
    //     'ProductTypes',
    //     'id',
    //     array(
    //         'reusable' => true
    //     )
    // );
}