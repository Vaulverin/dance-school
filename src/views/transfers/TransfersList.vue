<template>
    <div>
        <h1>Сумма: <b>{{money(sum)}}</b></h1>

        <v-card>
            <v-list three-line>
                <template v-for="(transfer, index) in transfers">
                    <v-list-tile :key="transfer.id">
                        <v-list-tile-content>
                            <v-list-tile-title>{{money(transfer.sum)}}</v-list-tile-title>
                            <v-list-tile-sub-title class="text--primary"
                                                   v-if="user = getById(transfer.userId)">{{user.name}}
                            </v-list-tile-sub-title>
                            <v-list-tile-sub-title>{{transfer.comment}}</v-list-tile-sub-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-list-tile-action-text>{{getDate(transfer.timestamp)}}</v-list-tile-action-text>
                            <v-icon>receipt</v-icon>
                        </v-list-tile-action>

                    </v-list-tile>
                    <v-divider
                            v-if="index + 1 < transfers.length"
                    ></v-divider>
                </template>
            </v-list>
        </v-card>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    name: "TransfersList",
    computed: {
      ...mapGetters('transfers', ['transfers']),
      ...mapGetters('users', ['getById']),
      sum() {
        return this.transfers.reduce((total, item) => total + item.sum, 0);
      },
    },
    methods: {
      getDate(timestamp) {
        let date = new Date(timestamp);
        return date.toLocaleDateString();
      },
    },
    created() {
      this.$store.commit('setViewTitle', 'Список трансферов');
    }
  }
</script>

<style scoped>

</style>
