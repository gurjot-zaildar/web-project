class mbileshop{
    constructor(){
        this.mobile=[]
    }
    addmobile(mobile){
        this.mobile.push(mobile);
    }
    listallmobiles(mobile){
        this.mobile.forEach(function(mobile,index){
            console.log(`${index + 1}-${mobile.brand}-${mobile.price}-${mobile.color}`)
        });
    };
}
class mobile{
    constructor(brand,color,price,model){
        this.brand=brand;
        this.color=color;
        this.price=price;
        this.model=model;
    }
    getmobileinfo(){
        console.log(`${this.brand}-${this.color}-${this.price}-${this.model}`)
    }
    insertsim(sim){
if(sim.length>2){
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
samsung.insertsim(jio)
mymobileshop.addmobile(samsung)