export default {
    methods: {

        // QUand vous insérez en dans le localStorage => stringifier 
        // Le panier sera un tableau d'objet
        
        addTocart(product) {

            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            let productObject = {
                id: product._id,
                title: product.title,
                price: product.price,
                qty: 1
            }

            //findIndex => renvoies l'index ou -1

            let indexOfExistingProduct = cart.findIndex(
                (el) => el.id === productObject.id 
            )

            if (indexOfExistingProduct !== -1){
                cart[indexOfExistingProduct].qty += 1
            }else{
                cart.push(productObject);
            }
            

            localStorage.setItem('cart', JSON.stringify(cart));

        },
        getCart() {
            return JSON.parse(localStorage.getItem('cart'));
        },
        removeItemCart(product) {
            // Récupérer le panier localStorage.getItem + parser
            // Le modifier
            // le réinsérer localStorage.setItem
            let cart = JSON.parse(localStorage.getItem('cart'));
            const filteredCart = cart.filter((item) => {
                return item.id !== product.id;
            });

            localStorage.setItem('cart', JSON.stringify(filteredCart));
        },
        clearCart() {
            //localStorage.removeItem('cart');
        },
        removeOneQty(product) {

        },
        addOneQty(product) {

        }
    }
}