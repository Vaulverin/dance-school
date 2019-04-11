<template>
    <div>
        <v-text-field
                :value="searchText"
                @keyup="search"
                @click:clear="search"
                single-line
                clearable
                label="Поиск"
                type="text"
        />
        <v-list>
            <v-list-tile v-for="(user, index) in users"
                         :key="index"
                         @click="$router.push({name: 'transfers.add', params: {userId: user.id}})">
                <v-list-tile-content>
                    <v-list-tile-title>{{user.name}}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    name: "Lesson",
    data() {
      return {};
    },
    computed: {
      ...mapGetters('users', ['users']),
      searchText() {
        return this.$store.state.users.searchText;
      }
    },
    mounted() {
      if (this.users.length === 0) {
        this.$store.dispatch('users/load');
      }
    },
    created() {
      this.$store.commit('setViewTitle', 'Ученики');
    },
    methods: {
      search(e) {
        this.$store.commit('users/search', e.target.value);
      }
    }
  }
</script>

<style scoped>

</style>
