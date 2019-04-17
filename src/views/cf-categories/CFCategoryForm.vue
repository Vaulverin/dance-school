<template>
    <v-form
            ref="form"
            v-model="valid"
    >
        <v-text-field
                v-model="name"
                :rules="nameRules"
                label="Название"
                autofocus
                required
        />
        <v-text-field
                v-model="sum"
                label="Сумма по умолчанию"
                type="number"
                step="0.01"
                append-icon="attach_money"
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
  import {mapGetters} from 'vuex';
  import CFCategory from "../../models/CFCategory";

  export default {
    name: "CFCategoryForm",
    data() {
      return {
        valid: false,
        name: '',
        nameRules: [
          v => !!v || 'Название обязательно!',
        ],
        sum: '',
        id: parseInt(this.$route.params.id),
      };
    },
    computed: {
      ...mapGetters('cfCategories', ['getById']),
    },
    methods: {
      save() {
        if (this.id) {
          let category = new CFCategory(this.id, this.name, this.sum);
          this.$store.dispatch('cfCategories/set', category);
          this.$store.commit('addNotification', 'Категория успешно изменена!');
          return;
        }

        let item = new CFCategory(-1, this.name, this.sum);
        this.$store.dispatch('cfCategories/create', item);
        this.$store.commit('addNotification', 'Категория успешно добавлена!');
        this.$refs.form.reset();
      }
    },
    created() {
      this.$store.commit('setViewTitle', 'Категория ДДС');
      if(this.id) {
        let category = this.getById(this.id);
        if (category) {
          this.name = category.name;
          this.sum = category.defaultSum;
          let vm = this;
          this.$store.commit('addEventHandler', {
            event: 'cf-categories.delete',
            handler: () => {
              if (!confirm('Удалить текущую категорию?')) {
                return;
              }
              vm.$store.dispatch('cfCategories/delete', category.id);
              vm.$router.go(-1);
            },
          });
        }
      }
    }
  }
</script>

<style scoped>

</style>
