<template>
    <div>
        <template v-if="items.length === 1">
            <router-link v-if="items[0].pathName"
                         :to="{name: items[0].pathName}">
                <v-btn icon>
                    <v-icon>{{items[0].icon}}</v-icon>
                </v-btn>
            </router-link>
            <v-btn v-if="items[0].event"
                   icon
                   @click="$store.commit('emitEvent', items[0].event)">
                <v-icon>{{items[0].icon}}</v-icon>
            </v-btn>
        </template>

    </div>
</template>

<script>
  export default {
    name: "MainControls",
    props: {
      items: Array,
    },
  };
</script>

<style scoped>

</style>
