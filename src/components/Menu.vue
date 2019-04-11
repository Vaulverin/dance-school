<template>
    <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
    >
        <v-list class="pa-1">
            <v-list-tile tag="div">
                <v-list-tile-title class="title">
                    DanceMe
                </v-list-tile-title>
                <v-list-tile-content/>
                <v-list-tile-action @click="drawer = false">
                    <v-icon>close</v-icon>
                </v-list-tile-action>
            </v-list-tile>
<!--            <v-list-tile avatar>-->
<!--                <v-list-tile-avatar>-->
<!--                    <img src="https://randomuser.me/api/portraits/men/85.jpg">-->
<!--                </v-list-tile-avatar>-->

<!--                <v-list-tile-content>-->
<!--                    <v-list-tile-title>John Leider</v-list-tile-title>-->
<!--                </v-list-tile-content>-->
<!--            </v-list-tile>-->
        </v-list>

        <v-list class="pt-0" dense>
            <v-divider></v-divider>

            <v-list-tile
                    v-for="item in items"
                    :key="item.title"
                    @click="$router.replace({ name: item.pathName})"
            >
                <v-list-tile-action>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
  export default {
    name: "Menu",
    data() {
      return {
        drawer: false,
        items: [
          {title: 'Ученики', icon: 'people', pathName: 'users.list'},
          {title: 'Баланс', icon: 'money', pathName: 'transfers.list'},
        ]
      };
    },
    methods: {
      open() {
        this.drawer = true;
      }
    }
  }
</script>

<style scoped>

</style>
