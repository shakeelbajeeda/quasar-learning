<template>
  <q-dialog v-model="shown">

    <q-card class="q-dialog-plugin m-5">
      <div style="height:20px; width: 20px;"></div>

      <q-card-section class="q-pt-none">
        <div class="row q-col-gutter-sm">
          <div class="col-xs-12">
            Please select an option
          </div>

          <div
            v-for="action in actions"
            v-bind="action"
            :key="action.label"
            class="col-xs-12"
          >
            <q-btn
              :color="action.color"
              :label="action.label"
              @click="actionClicked"
              :icon="action.icon"
              :data-event="action.event"
              class="full-width q-py-md"
            />
          </div>

          <div class="col-xs-12">
            <q-btn
              color="orange full-width"
              label="Cancel"
              v-close-popup
              class="full-width q-py-md"
            />
          </div>
        </div>
      </q-card-section>

    </q-card>

  </q-dialog>
</template>

<script>
export default {
  name: 'PopupMenu',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    actions: {
      type: Array,
      default: function () { return [] }
    }
  },
  data () {
    return {
      shown: false
    }
  },
  watch: {
    visible: function (val) {
      this.shown = val
    },
    shown: function (val) {
      this.$emit('isModalVisible', val)
    }
  },
  methods: {
    actionClicked (event) {
      this.$emit('actionClicked', event)
    }
  }
}
</script>
<style lang="scss" scoped>
  .q-btn {
    margin-right: 5px;
  }
</style>
