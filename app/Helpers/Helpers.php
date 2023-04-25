<?php

namespace App\Helpers;
use App;

class Helpers
{
    public static function DateConvert($date){
        return \Carbon\Carbon::parse($date)->translatedFormat('j F Y');
    }

}

