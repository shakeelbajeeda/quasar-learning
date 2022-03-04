<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

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
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'TypoGraphy',
    caption: 'quasar.dev',
    icon: 'school',
    link: '/typeography'
  },
  {
    title: 'Spacing',
    caption: 'Working on spacing',
    icon: 'code',
    link: '/spacing'
  },
  {
    title: 'Shadows',
    caption: 'Box Shadows',
    icon: 'mail',
    link: '/shadow'
  },
  {
    title: 'Visibility',
    caption: 'Quasar visibility',
    icon: 'visibility',
    link: '/visibility'
  },
  {
    title: 'Layout and Grid',
    caption: '@quasar layout',
    icon: 'grid_view',
    link: '/layout'
  },
  {
    title: 'Angvo',
    caption: 'Angvo template',
    icon: 'public',
    link: '/angvo_template'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
];

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
