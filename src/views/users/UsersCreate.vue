<template>
    <v-form
            ref="form"
            v-model="valid"
    >
        <v-text-field
                v-model="firstName"
                :rules="nameRules"
                label="Имя"
                required
        />
        <v-text-field
                v-model="lastName"
                label="Фамилия"
        />

        <v-text-field
                v-model="email"
                label="E-mail"
        />

        <v-btn
                :disabled="!valid"
                color="primary"
                @click="save"
        >
            Сохранить
        </v-btn>

    </v-form>
</template>

<script>
  import User from "../../models/User";

  export default {
    name: "UsersCreate",
    data: () => ({
      valid: false,
      firstName: '',
      lastName: '',
      nameRules: [
        v => !!v || 'Имя обязательно!',
      ],
      email: '',

    }),
    methods: {
      save() {
        let user = new User(-1, this.firstName, this.lastName, this.email, '');
        this.$store.dispatch('users/create', user);
        this.$refs.form.reset();
        // this.$store.commit('addSuccessAlert', 'Пользователь успешно добавлен!');
        this.$store.commit('addNotification', 'Пользователь успешно добавлен!');
      }
    },
    created() {
      this.$store.commit('setViewTitle', 'Новый ученик');
    }
  }
</script>

<style scoped>

</style>
