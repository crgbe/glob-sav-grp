<template>
    <div id="voucher">
        <div>
            <router-link to="/vouchers/create">Create a voucher</router-link>
        </div>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Discount</th>
                <th scope="col">Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(voucher, key) in vouchers" :key="key">
                <td>{{ voucher.name }}</td>
                <td>{{ voucher.discount }}</td>
                <td>
                    <router-link :to="{ name: 'vouchers_show', params: { id: voucher.id }}">Show</router-link>
                    <router-link :to="{ name: 'vouchers_edit', params: { id: voucher.id }}">Edit</router-link>
                    <div class="btn btn-danger" @click="remove(voucher.id)">Delete</div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
import store from '@/global/store'

export default {
    name: "Voucher",
    data() {
        return {
            'vouchers': [],
            'result': ''
        }
    },
    mounted() {
        let vm = this
        
        axios
            .get(store.getters.getAPI + '/vouchers')
            .then(function(response){
                if(response.status === 200){
                    vm.vouchers = response.data['hydra:member']
                }
            })
    },
    methods: {
        remove (id) {
            axios
                .delete(store.getters.getAPI + '/vouchers/' + id)
                .then(function(response){
                    if(response.status === 204){
                        location.reload()
                    }
                })
        }
    }
}
</script>

<style scoped>

</style>