<template>
    <div id="voucher-create">
        <div>
            <h1>Create voucher</h1>
            <div class="btn btn-group" @click="generateVoucherCode">generate voucher code</div>
        </div>
        
        <div class="form">
            <input type="text" v-model="name">
            <input type="number" v-model="discount">
            <div class="btn btn-primary" @click="add">Create</div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import store from '@/global/store'
import router from "@/global/router";

export default {
    name: "VoucherCreate",
    data () {
        return {
            'name': null,
            'discount' : 0,
        }
    },
    methods: {
        add () {
            let vm = this
            
            axios
                .post(store.getters.getAPI + '/vouchers',
                    {
                    name: vm.name,
                    discount: vm.discount
                },{
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                .then(function(response){
                    if(response.status === 201){
                        router.push('/vouchers')
                    }
                })
        },
        generateVoucherCode(){
            let vm = this
            
            axios
                .get(store.getters.getURL + '/vouchers/generate-code')
                .then(function(response){
                    if(response.status === 200){
                        vm.name = response.data.name
                    }
                })
        }
    }
}
</script>

<style scoped>

</style>