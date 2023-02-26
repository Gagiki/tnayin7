let armor = {
    name:"armor",
    shoot: [],
    famous (projectile){
        console.log(this);
        this.shoot.push("projectile");
    }
};
let tanks = {
    name:"shoot",
    caterpillar: true,
    tower:true,
    __proto__: armor
};
let armoredcar  = {
    name:"avoid",
    wheel: true,
    tower:true,
    __proto__:armor
};

tanks.famous("projectile");
armoredcar.famous("projectile");

// 
let user ={
    name:"Join"
}
let descriptor = Object.getOwnPropertyDescriptor(user,"name");
console.log(descriptor);