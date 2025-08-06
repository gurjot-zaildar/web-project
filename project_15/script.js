class mobileshop{
    constructor(){
        this.mobile=[]
    }
    addmobile(mobile){
        this.mobile.push(mobile);
    }
    listallmobiles(){
        this.mobile.forEach(function(mb,index){
            console.log(`${index + 1}-${mb.brand}-${mb.price}-${mb.color}`)
        });
    };
}
class mobile{
    constructor(brand,color,price,model){
        this.brand=brand;
        this.color=color;
        this.price=price;
        this.model=model;
        this.sims=[]
    }
    getmobileinfo(){
        console.log(`${this.brand}-${this.color}-${this.price}-${this.model}`)
    }
    insertsim(sim){
if(sim.length===2){
    console.log("you already have two sim in your mobile")
    return;
}
this.sims.push(sim)
    }
}
class sim{
    constructor(brand,balance){
        this.brand=brand;
        this.balance=balance;
    }
    addbalance(balance){
        if(balance<0){
            console.log("to add balance add amount greater than 0");
            return;
        }
        this.balance+=balance
    }
}
let mymobileshop = new mobileshop()
let samsung = new mobile("samsung","black",20000,"f-34");
let jio = new sim("jio",300);
samsung.insertsim("jio")
mymobileshop.addmobile(samsung)