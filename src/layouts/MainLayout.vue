<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="gt-sm">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Fix Trax </q-toolbar-title>

        <q-btn icon="lock" color="red" />
      </q-toolbar>
    </q-header>
    <q-footer elevated class="bg-white lt-md">
      <q-toolbar class="flex-center">
        <div>
          <q-tabs
            v-model="tab"
            inline-label
            narrow-indicator
            dense
            align="justify"
            class="text-blue text-center"
          >
            <q-tab icon="dashboard" class="q-pa-none" />
            <q-tab icon="group" />
            <q-tab icon="drive_eta" />
            <q-tab icon="shopping_cart" />
            <q-tab icon="settings" class="q-pa-none" />
          </q-tabs>
        </div>
      </q-toolbar>
    </q-footer>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Dashboard",
    caption: "",
    icon: "dashboard",
    link: "",
  },
  {
    title: "Customers",
    caption: "",
    icon: "group",
    link: "",
  },
  {
    title: "Vehicles",
    caption: "",
    icon: "directions_car",
    link: "",
  },
  {
    title: "Orders",
    caption: "",
    icon: "shopping_cart",
    link: "",
  },
  {
    title: "Manage",
    caption: "",
    icon: "settings_input_component",
    link: "",
  },
  {
    title: "Login",
    caption: "",
    icon: "lock",
    link: "/Login",
  },
  {
    title: "Vue Js Curd",
    caption: "",
    icon: "favorite",
    link: "/Curd",
  },
];

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      tab: ref("mails"),
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
