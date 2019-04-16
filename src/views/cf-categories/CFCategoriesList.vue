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
                    <template v-for="(item, index) in items">
                        <v-list-tile :key="index"
                                     @click="$router.push({name: 'cf-categories.edit', query: {id: item.id}})">
                            <v-list-tile-content>
                                <v-list-tile-title>{{item.name}}</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </template>
                    <v-card-text v-show="!items.length">Ни чего не найдено</v-card-text>
                </v-list>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    name: "CFCategoriesList",
    data() {
      return {};
    },
    computed: {
      ...mapGetters('cfCategories', {items: 'categories'}),
      searchText() {
        return this.$store.state.cfCategories.searchText;
      }
    },
    mounted() {
      if (this.items.length === 0) {
        this.$store.dispatch('cfCategories/load');
      }
    },
    created() {
      this.$store.commit('setViewTitle', 'Категории ДДС');
    },
    methods: {
      search(e) {
        this.$store.commit('cfCategories/search', e.target.value);
      }
    }
  }
</script>

<style scoped>

</style>
