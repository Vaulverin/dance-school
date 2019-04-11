<template>
    <v-layout row wrap>
        <v-flex xs12>
            <v-text-field
                    :value="searchText"
                    @keyup="search"
                    @click:clear="search"
                    single-line
                    clearable
                    label="Поиск"
                    type="text"
            />
        </v-flex>
        <v-flex xs12>
            <v-card>
                <v-list>
                    <template v-for="(user, index) in users">
                        <v-list-tile :key="index"
                                     @click="$router.push({name: 'transfers.add', params: {userId: user.id}})">
                            <v-list-tile-content>
                                <v-list-tile-title>{{user.name}}</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </template>
                    <v-card-text v-show="!users.length">Ни чего не найдено</v-card-text>
                </v-list>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
  import {mapGetters} from 'vuex';

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
