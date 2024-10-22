class Product{
    constructor(title, quantity, price){
        this.title=title;
        this.quantity=quantity;
        this.price=price;
        this.updateQuantity.bind(this);
    }
    updateQuantity(quantity){
        this.quantity=quantity;
    }
}
class Cart{
    constructor(){
        this.cartItems=[];
    }
    addItem(product){
        const alreadyInCart=myCart.checkIfItemsExist(Product.title);
        if(alreadyInCart){
            return Product.updateQuantity(Product.quantity);
        }else this.cartItems.push(Product);
    }
   

    checkIfItemsExist(title){
        return this.cartItems.filter((item)=>item.title===title)[0]!=undefined;
    }
    removeItem(title){
        this.cartItems = this.cartItems.filter(item => item.title !== title);
    }
    showItems(){
        console.log(cartItems);
    }
}
