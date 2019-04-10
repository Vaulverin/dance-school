<template>
    <router-link :to="{name: 'users.create'}">
        <v-btn icon>
            <v-icon>create</v-icon>
        </v-btn>
    </router-link>
</template>

<script>
  export default {
    name: "UsersListControls",
  };
</script>

<style scoped>

</style>
