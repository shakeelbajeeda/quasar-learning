<template>
  <div>
    {{test.title}}
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props:["test"]

})
</script>
