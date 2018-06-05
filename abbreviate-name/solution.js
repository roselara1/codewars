'use strict'

function abbrevName(name){
    var dot = name.split(' ');
      return (dot[0][0]+'.' + dot[1][0]).toUpperCase();
    }