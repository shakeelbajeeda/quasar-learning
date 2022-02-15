<template>
  <q-page>
    <q-btn class="q-mt-lg q-mx-lg" color="red" icon="person" label="Profile Updated" />
    <q-btn
      rounded
      color="orange"
      icon="fingerprint"
      class="text-capitalize q-mt-lg q-mx-lg"
      label="add fingerprint"
    ></q-btn>
    <q-btn
      color="green"
      icon="settings"
      class="q-mt-lg q-mx-lg"
      label="setting"
    ></q-btn>
    <q-btn
      color="dark"
      icon="holiday_village"
      class="q-mt-lg q-mx-lg"
      label="Holiday Village"
    ></q-btn>
    <q-btn
      color="blue"
      icon="lock"
      class="q-mt-lg q-mx-lg"
      label="lock"
      rounded
    ></q-btn
    ><br />
    <q-btn class="q-mt-lg q-mx-lg text-amber-10 bg-yellow-5">
      <q-icon
        name="delete_outline"
        color="red"
        class="q-ml-none q-mr-sm"
      ></q-icon>
    Delete </q-btn
    >
    <q-btn class="q-mt-lg bg-orange text-white">
      <q-icon name="help_outline" color="info" class="q-pr-sm"></q-icon>
      Help
    </q-btn>
    <q-btn class="q-mx-md q-mt-lg text-warning bg-brown-5" label="Verified User">
      <q-icon color="orange-5" name="verified_user" class="q-pl-xs"></q-icon>
    </q-btn>
    <div class="text-primary q-pa-xl">
      i am using quasar for build application
    </div>
    <div class="parent">
       i am in parent
      <div class="child">
          i am child
      </div>
    </div>
  </q-page>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
});
</script>
<style scoped lang="scss">
  $test: red;
.parent {
  background:$test;
   div{
     background: $primary;
   }
}
</style>
