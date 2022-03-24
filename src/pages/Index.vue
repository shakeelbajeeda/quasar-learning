<template>
  <q-page>
    <div class="q-mx-md q-mt-sm">
      <div class="text-h4">Dashboard</div>
      <q-separator />
      <div class="row q-col-gutter-sm q-mt-md">
        <div
          class="col-lg-3 col-md-3 col-xs-12"
          v-for="card in Cards"
          :key="card"
          :v-bind="card"
        >
          <q-card :class="card.bg_color">
            <q-item>
              <q-item-section>
                <q-icon :name="card.icon" size="3.8rem" color="white" />
              </q-item-section>
              <q-item-section align="right" class="text-white">
                <q-item-label class="text-h3">{{ card.number }}</q-item-label>
                <q-item-label class="text-caption text-bold">{{
                  card.title
                }}</q-item-label>
              </q-item-section>
            </q-item>
            <q-card-section>
              <q-btn flat label="view details" color="white" class="detail-btn">
                <q-icon name="arrow_right" class="q-ml-xl" size="1.7rem" />
              </q-btn>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div class="col-md-12 q-mt-md">
        <div class="row q-col-gutter-sm">
          <div class="col-md-6">
            <OrderTables/>

          </div>
          <div class="col-md-6">
            <OrderTables/>

          </div>

        </div>

      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import OrderTables from "src/components/Tables/OrderTables.vue";

export default defineComponent({
  name: "PageIndex",
  components: {
    OrderTables,
  },
  data() {
    return {
      Cards: [
        {
          bg_color: "bg-light-blue",
          icon: "drive_eta",
          number: "19",
          title: "Vehicles",
        },
        {
          bg_color: "bg-green",
          icon: "shopping_cart",
          number: "32",
          title: "Open Orders",
        },
        {
          bg_color: "bg-orange-6",
          icon: "group",
          number: "15",
          title: "Total Customers",
        },
        {
          bg_color: "bg-red",
          icon: "notification_important",
          number: "15",
          title: "Today's Orders",
        },
      ],
    };
  },
});
</script>
<style scoped>
.detail-btn {
  width: 100%;
}
</style>
