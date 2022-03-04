<template>
  <q-page>
    <div class="row">
       <BoxShadowVue
        v-for="n in 24"
        :key="n"
        :id="n"
      />
      <BoxShadowVue
        id="1"
      />
      <BoxShadowVue
        :id="2"
      />
      <BoxShadowVue
        id="3"
      />
    </div>
  </q-page>
</template>
<script>
import { defineComponent } from "vue";
import BoxShadowVue from "src/components/common/BoxShadow.vue";
export default defineComponent({
  name: "PageIndex",
  components: {
    BoxShadowVue
  }
});
</script>
<style scoped lang="scss">
$test: red;
.parent {
  background: $test;
  div {
    background: $primary;
  }
}
.box {
  height: 100px;
  width: 100px;
  border-radius: 50%;
}
</style>
