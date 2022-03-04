<template>
  <div class="col-md-3">
    <div class="q-ma-md box flex flex-center" :class="'shadow-' + id">box-shadow-{{id}}</div>
  </div>
</template>
<script>

export default {
  props: ['id']
}
</script>

<style scoped lang="scss">
.box {
  height: 100px;
  width: 100px;
  border-radius: 50%;
}
</style>
