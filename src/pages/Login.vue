<template>
  <q-page>
    <div class="flex" style="height: 100vh">
      <q-card
        class="shadow-20"
        :class="$q.screen.lt.sm ? 'login-card-sm' : 'login-card-md'"
      >
        <q-card-section class="q-pb-none q-mt-md">
          <q-img src="~assets/images/logo.png" width="50%" />
        </q-card-section>

        <q-card-section>
          <q-card-section class="text-h5 bg-primary text-white q-py-sm"
            >Sign In</q-card-section
          >
          <q-card-section class="q-pa-none">
            <q-form @submit="onLogin">
              <q-input
                v-model="email"
                value="mehar"
                label="Email"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Please type email',
                ]"
              >
                <template v-slot:prepend>
                  <q-icon name="mail" />
                </template>
              </q-input>

              <q-input
                v-model="password"
                :type="isPwd ? 'password' : 'text'"
                label="Password"
                lazy-rules
                :rules="[
                  (val) =>
                    (val !== null && val.length <= 8 && val.length >= 8) ||
                    'password must have 8 characters',
                ]"
              >
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>
            </q-form>
          </q-card-section>
          <q-card-section>
            <q-btn
              @click="toogleBtn(), triggerPositive()"
              label="login"
              color="green"
              icon="lock"
              class="login-btn q-py-sm q-mb-md"
              size="1.3rem"
            />
            <q-btn
              label="signup"
              color="primary"
              icon="group"
              class="login-btn q-py-sm"
              size="1.3rem"
            />
            <div class="q-pt-sm login-forget">Forget Your password?</div>
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { Loading, Notify } from "quasar";
import { ref } from "vue";

export default {
  setup() {
    const email = ref(null);
    const password = ref(null);
    const $q = useQuasar();

    return {
      email,
      password,
      isPwd: ref(true),

      triggerPositive() {
        $q.notify({
          type: "positive",
          message: "Login SuccessFull",
        });
      },
    };
  },
  methods: {
    toogleBtn() {
      Loading.show();
      setTimeout(() => {
        Loading.hide();
        timer = void 0;
      }, 2000);
    },
  },
};
</script>
