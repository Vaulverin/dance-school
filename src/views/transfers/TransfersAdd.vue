<template>
    <v-form
            class="mx-auto"
            ref="form"
            v-model="valid"
    >
        <v-select
                :items="users"
                item-text="name"
                v-model="userId"
                item-value="id"
                label="Пользователь"
                :rules="userRules"
        />
        <v-text-field
                v-model="sum"
                label="Сумма"
                :rules="sumRules"
                autofocus
                type="number"
                step="0.01"
                required
                append-icon="attach_money"
        />

        <v-textarea
                label="Комментарий"
                v-model="comment"
                rows="1"
                auto-grow
        ></v-textarea>

        <v-btn
                :disabled="!valid"
                color="primary"
                @click="transfer"
        >
            Отправить
        </v-btn>

    </v-form>
</template>

<script>
  import { mapGetters } from 'vuex';
  import Transfer from "../../models/Transfer";

  export default {
    name: "TransfersAdd",
    data() {
      return {
        valid: false,
        sum: null,
        sumRules: [
          v => !!v || 'Сумма обязательна!',
        ],
        userRules: [
          v => !!v || 'Выберите пользователя!',
        ],
        comment: '',
        userId: this.$route.query.userId,
      }
    },
    created() {
      this.$store.commit('setViewTitle', 'Трансфер');
      if (this.users.length === 0) {
        this.$store.dispatch('users/load');
      }
    },
    computed: {
      ...mapGetters('users', ['getById', 'users']),
    },
    methods: {
      transfer() {
        let transfer = new Transfer(-1, Date.now(), this.userId, parseFloat(this.sum), this.comment);
        this.$store.dispatch('transfers/create', transfer);
        this.$refs.form.reset();
        this.$store.commit('addNotification', 'Трансфер добавлен!');
      }
    }
  }
</script>

<style scoped>

</style>
