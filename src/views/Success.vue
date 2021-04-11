<template>
    <div>
        <TitlePage title="Payement Accépté" />
        <!-- <img
            src="../assets/check-mark-2180770_960_720.webp"
            style="width: 100px"
        /> -->
        <div class="shopping__cart">
            <b-table-simple bordered>
                <b-thead head-variant="dark" bordered>
                    <b-tr>
                        <b-th>Image</b-th>
                        <b-th>Titre</b-th>
                        <b-th>Quantité</b-th>
                        <b-th>Prix</b-th>
                        <b-th>Total</b-th>
                    </b-tr>
                </b-thead>
                <b-tbody>
                    <b-tr v-for="product in cartArray" v-bind:key="product._id">
                        <b-td><img :src="product.imgUrl" class="img__product" style="max-width: 5rem;" /></b-td>
                        <b-td>{{ product.title }}</b-td>
                        <b-td>{{ product.qty }}</b-td>
                        <b-td>{{ product.price }}</b-td>
                        <b-td>
                            {{
                                (product.qty * product.price)
                                    | formatPriceDecimal
                                    | formatPrice
                            }}
                        </b-td>
                    </b-tr>
                </b-tbody>
            </b-table-simple>
        </div>
        <div v-if="cartArray">
            Prix total : {{ prcTotal | formatPriceDecimal | formatPrice }}
        </div>
    </div>
</template>
<script>
import VueJwtDecode from "vue-jwt-decode";
import TitlePage from "../components/TitlePage";
import Cart from "../mixins/Cart";

export default {
    components: {
        TitlePage,
    },
    data() {
        return {
            cartArray: [],
            userObject: {},
            prcTotal: 0,
            total: "",
            products: "",
            user: "",
        };
    },
    mixins: [Cart],
    created() {
        this.cartArray = this.getCart();
        this.prcTotal = this.getCartTotal(this.cartArray);
        const token = localStorage.getItem("token");
        const decodedToken = VueJwtDecode.decode(token);
        const body = {
            total: this.prcTotal,
            products: this.cartArray,
            user: decodedToken.id,
        };
        console.log("body", body);
        const bodyToSend = JSON.stringify(body);
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: bodyToSend,
        };
        fetch(`http://localhost:3000/api/v1/order`, requestOptions)
        .then((res) => res.json())
        .catch((err) => console.log(err));
        // this.clearCart()
    },
};
</script>
<style lang="scss" scoped>
.shopping__cart {
    width: 70%;
    margin: 50px auto;
}
.img__product {
    max-width: 200px;
    max-height: 200px;
}
</style>