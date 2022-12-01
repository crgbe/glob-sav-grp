<template>
    <div class="voucher-form">
        <div class="form">
            <input type="text" :value="name">
            <input type="number" :value="discount">
        </div>
    </div>
</template>

<script>
export default {
  name: 'VoucherForm',
  props: {
    name: String,
    discount: Number,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
