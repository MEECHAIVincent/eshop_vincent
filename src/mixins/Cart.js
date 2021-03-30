export default {
    methods: {

        // QUand vous insérez en dans le localStorage => stringifier 
        // Le panier sera un tableau d'objet
        
        addTocart(product) {

            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            let productObject = {
                id: product._id,
                title: product.title,
                imgUrl: product.imgUrl,
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
            localStorage.removeItem('cart');

        },
        removeOneQty(product) {
            let cart = JSON.parse(localStorage.getItem('cart'));
            if (product.qty > 1){
                let productObject = {
                    id: product.id,
                    title: product.title,
                    imgUrl: product.imgUrl,
                    price: product.price,
                    qty: 1
                }
                let indexOfexisttingProduct = cart.findIndex((el) => el.id === productObject.id);
                if (indexOfexisttingProduct !== -1) {
                    cart[indexOfexisttingProduct].qty--;
                }
                localStorage.setItem('cart', JSON.stringify(cart));
            }
        },
        addOneQty(product) {
            let cart = JSON.parse(localStorage.getItem('cart'));
            let productObject = {
                id: product.id,
                title: product.title,
                imgUrl: product.imgUrl,
                price: product.price,
                qty: 1
            }
            let indexOfexisttingProduct = cart.findIndex((el) => el.id === productObject.id);
            if (indexOfexisttingProduct !== -1) {
                cart[indexOfexisttingProduct].qty++;
            }
            localStorage.setItem('cart', JSON.stringify(cart));

        },
        getCartTotal(cart) {
            if(cart){
                let total = cart.reduce(
                    (total , item) => total + (item.qty * item.price), 0
                    );
                return total; 
            }
        },
        getCartCount(cart) {
            if(cart){
                let total = cart.reduce(
                    (total, item) => total + item.qty, 0
                );
                return total;
            }
        }
    }
}