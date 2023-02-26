function Mydate(year,mounth,day,hour, minuts){
this.year=year;
this.mounth = mounth;
this.day = day;
this.hour= hour;
this.minuts= minuts;

this.getfullyear = function(){
return this.year;
}
this.getmounth = function(){
   return this.mounth; 
}
this.getday = function(){
  return this.day;

}
this.gethour = function(){
    return this.hour;
}
this.getminuts = function(){
    return this.minuts;
}

    this.setMounth = function(value){
        if(value <= 11){
            this.mounth = value
        }else{
            this.year += Math.floor(value/11)
            this.mounth = value % 12
        }
    }

this.setday = function(value){
    if(value <= 31){
        this.day = value
    }else{
        this.setMounth(Math.floor(value/31) + this.mounth)
        this.day = value % 31
    }
}
this.sethour = function(value){
    if(value <= 60){
        this.hour = value
    }else{
        this.sethour(Math.floor(value/60) + this.hour)
        this.hour= value % 60
    }
}
this.setminuts = function(value){
    if(value <= 60){
        this.minuts = value
    }else{
        this.setminuts(Math.floor(value/60) + this.minuts)
        this.minuts= value % 60
    }
}


}
const date = new Mydate(2011,10,31,60,)
console.log(date.getfullyear())
console.log(date.getmounth())
date.setMounth(30)
date.setday(60)
date.sethour(3)
date.setminuts(5)
console.log(date.getfullyear())
console.log(date.getmounth())
console.log(date.getday())
console.log(date.gethour())
console.log(date.getminuts())


