<template>
    <div id="voucher-show">
        <table class="table table-bordered">
            <tbody>
            <tr>
                <td>Name</td>
                <td>{{ voucher.name }}</td>
            </tr>
            <tr>
                <td>Discount</td>
                <td>{{ voucher.discount }} %</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
import store from '@/global/store'

export default {
    name: "VoucherShow",
    data () {
        return {
            'voucher': {}
        }
    },
    mounted () {
        let vm = this
    
        axios
            .get(store.getters.getAPI + '/vouchers/' + vm.$route.params.id)
            .then(function(response){
                if(response.status === 200){
                    vm.voucher = response.data
                }
            })
    }
}
</script>

<style scoped>

</style>