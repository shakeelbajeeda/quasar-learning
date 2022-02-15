<template>
  <q-page>
    <p class="text-h1">heading-1</p>
    <p class="text-h2">heading-2</p>
    <p class="text-h3">heading-3</p>
    <p class="text-h4">heading-4</p>
    <p class="text-h5">heading-5</p>
    <p class="text-h6">heading-6</p>
    <p class="text-subtitle1">text subtitle-1</p>
    <p class="text-subtitle2">text subtitle-2</p>
    <p class="text-body1">text-body-1</p>
    <p class="text-body2">text-body2</p>
    <p class="text-caption">caption text</p>
    <p class="text-overline">overline text</p>
    <p class="text-weight-thin">text-weight-thin</p>
    <p class="text-weight-light">text-weight-light</p>
    <p class="text-weight-regular">text-weight-regular</p>
    <p class="text-weight-medium">text-weight-medium</p>
    <p class="text-weight-bold">text-weight-bold</p>
    <p class="text-weight-bolder">text-weight-bolder</p>
    <p class="text-right">text-right</p>
    <p class="text-left">text-left</p>
    <p class="text-center">text-center</p>
    <p class="text-justify">text-justify</p>
    <p class="text-bold">text-bold</p>
    <p class="text-italic">text-italic</p>
    <p class="text-no-wrap">text-no-wrap</p>
    <p class="text-strike">text-strike</p>
    <p class="text-uppercase">text-uppercase-case</p>
    <p class="text-lowercase">TEXT-LOWERCASE</p>
    <p class="text-capitalize">text-capitalize</p>
    <q-btn color="dark" icon="home" class="disabled" label="disabled"></q-btn>
    <p>
      some words are hide
      <span class="hidden">Quasar Framework of Javascript</span>
    </p>
    <p>
      some words are invisible <span class="invisible">invisible words</span> in
      this paragraph
    </p>
    <div class="bg-red">
      <p class="transparent bg-yellow">background color is transparent</p>
    </div>
    <p class="ellipsis-2-lines">
      Truncates text and shows ellipsis when not enough space available on three
      lines (works only on Webkit browsers).Truncates text and shows ellipsis
      when not enough space available on two lines (works only on Webkit
      browsers).Truncates text and shows ellipsis when not enough space
      available on two lines (works only on Webkit browsers).Truncates text and
      shows ellipsis when not enough space available on two lines (works only on
      Webkit browsers).
    </p>
    <p class="z-top">z top</p>
    <p class="z-max">z-max</p>
    <p class="fixed-center">position fixed center in the window</p>
    <p class="">position absolute center</p>

    <p class="text-h6">Why Quasar use?</p>
    <p class="text-subtitle1">Quasar Framework of Javascript</p>
    <p class="text-subtitle2 text-capitalize">Quasar Framework of Javascript</p>
    <p class="text-weight-bold text-justify text-italic" color="red">
      Quasar Framework of Javascript
    </p>
    <q-btn
      class="q-mt-lg q-mx-lg q-py-lg q-"
      color="red"
      icon="person"
      label="Test Button"
    />
    <q-btn
      color="orange"
      icon="fingerprint"
      class="text-capitalize q-mt-lg q-mx-lg"
      label="add fingerprint"
    ></q-btn>
    <q-btn
      color="blue"
      icon="settings"
      class="q-pa-lg q-mt-lg q-mx-lg"
      label="setting"
    ></q-btn>
    <q-btn
      color="blue"
      icon="lock"
      class="q-mt-lg q-mx-lg"
      label="lock"
    ></q-btn>
  </q-page>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
});
</script>
