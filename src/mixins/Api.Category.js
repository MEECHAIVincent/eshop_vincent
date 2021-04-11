import apiConfigs from "../configs/api.configs";

export default {
    methods: {
        getCategorys() {
            return fetch(`${apiConfigs.apiUrl}/categorys`)
            .then(res=>res.json())
        },

        // etc //
    }
}