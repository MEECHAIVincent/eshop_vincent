import apiConfigs from "../configs/api.configs";

export default {
    methods: {
        getUsers() {
            return fetch(`${apiConfigs.apiUrl}/users`)
            .then(res=>res.json())
        },
        // etc //
    }
}