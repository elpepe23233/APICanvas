<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class empleados extends Model
{
      use HasFactory;
    protected $fillable=['id','nombres', 'apellidos', 'edad', 'direccion', 'idempresa'];
}
