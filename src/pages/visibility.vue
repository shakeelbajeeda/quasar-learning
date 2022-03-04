<template>
  <q-page>
    <q-btn
      color="pink"
      icon="hide_source"
      label="disabled"
      class="q-mt-md q-mx-md disabled"
    ></q-btn>
    <q-btn
      icon="face"
      round
      class="q-mt-md q-mx-sm bg-accent text-warning"
      id="btn"
    ></q-btn>
    <q-btn
      color="red-8"
      icon="school"
      label="Learning quasar"
      class="q-mt-md invisible"
    >
      <q-icon name="school" class="q-pl-sm"></q-icon>
    </q-btn>
    <q-btn
      icon="arrow_circle_left"
      label="pervious btn invisible"
      class="q-mt-md q-mx-sm bg-purple text-white text-capitalize"
    ></q-btn>
    <q-btn
      color="red-9"
      icon="search"
      label="search listings"
      rounded
      class="q-mt-md q-ml-sm no-pointer-ece"
    ></q-btn>
    <q-btn
      icon="whatsapp"
      label="whatsapp"
      class="q-mt-md q-mx-md transparent bg-red text-orange"
    ></q-btn>
    <div>{{ name }}</div>
    <div id="bg-img" style="height: 380px; width: auto">
      <q-form>
        <q-input filled v-model="name" label="Name or Surname" standout="bg-red text-white"> </q-input>
      </q-form>

      <!-- <q-img src="~assets/images/car.png" class="q-mx-sm q-mt-lg" width="90%"></q-img> -->
      <q-btn
        color="red"
        icon="facebook"
        label="facebook"
        class="absolute-center transparent"
      ></q-btn>
    </div>
  </q-page>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
  data() {
    return {
      name: null,
      age: null,
    };
  },
});
</script>
<style lang="scss" scoped>
#bg-img {
  background-image: url("~assets/images/car.png");
  background-repeat: no-repeat;
}
#btn:hover {
  color:rgb(248, 246, 246) !important;
  background:blue;
}
</style>
