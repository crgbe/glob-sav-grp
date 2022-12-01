<template>
    <div>
        <h1>Edit voucher {{ this.$route.params.id }}</h1>
        <div class="btn btn-group" @click="generateVoucherCode">generate voucher code</div>
    </div>
    
    <div id="voucher-edit">
        <div class="form">
            <input type="text" v-model="name">
            <input type="number" v-model="discount">
            <div class="btn btn-primary" @click="edit()">Edit</div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import store from '@/global/store'
import router from "@/global/router";
import { generateVoucherCode } from "@/utils/tools";

export default {
    name: "VoucherEdit",
    data () {
        return {
            'name': null,
            'discount' : 0,
        }
    },
    mounted() {
        let vm = this
        
        axios
            .get(store.getters.getAPI + '/vouchers/' + vm.$route.params.id)
            .then(function(response){
                if(response.status === 200){
                    vm.name = response.data.name
                    vm.discount = response.data.discount
                }
            })
    },
    methods: {
        edit () {
            let vm = this
            
            axios
                .patch(store.getters.getAPI + '/vouchers/' + vm.$route.params.id,
                    {
                        name: vm.name,
                        discount: vm.discount
                    },
                    {
                        headers: {
                            'Content-Type': 'application/merge-patch+json'
                        }
                    })
                .then(function(response){
                    if(response.status === 200){
                        router.push('/vouchers')
                    }
                })
        },
        generateVoucherCode() {
            let vm = this
            generateVoucherCode()
                .then(function (response) {
                    if (response.status === 200) {
                        vm.name = response.data.name
                    }
                })
        }
    }
}
</script>

<style scoped>

</style>