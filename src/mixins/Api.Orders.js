import apiConfigs from "../configs/api.configs";

export default {
    methods: {
        getOrders() {
            return fetch(`${apiConfigs.apiUrl}/orders`)
            .then(res=>res.json())
        },

        // etc //
    }
}