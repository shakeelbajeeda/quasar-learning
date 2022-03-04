<template>
  <q-page>
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-6 bg-red col-xs-6">
        <startcomponent
        v-for="com in compo"
        :key="com"
        :test="com"
        />
  <div>

  </div>
      </div>
 <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 bg-accent">
   col lg 6
      </div>
    </div>
  </q-page>
</template>
<script>
import { defineComponent } from "vue";
import startcomponent from "src/components/common/startcomponent.vue";
export default defineComponent({
  components: {
    startcomponent
  },
  data() {
    return {
      compo: [
        {
          title: "ds;fkajs;"
        },
        {
          title: "dth"
        },
        {
          title: "shakeel"
        },
        {
          title: "ds;fkajs;"
        },
        {
          title: "dth"
        },
        {
          title: "shakeel"
        },
      ]
    }
  }
});
</script>
