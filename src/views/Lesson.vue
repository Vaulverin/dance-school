<template>
    <v-list subheader>
        <v-subheader>{{date}}</v-subheader>
        <v-list-tile v-for="(user, index) in users"
                     :key="index"
                     @click="">
            <v-list-tile-content>
                <v-list-tile-title>{{user.name}}</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
    </v-list>
</template>

<script>
  export default {
    name: "Lesson",
    data() {
      return {
        date: '12.03.2019',
        users: [
          {name: 'Ксения Рычкова'},
          {name: 'Сергей Толкачев'},
          {name: 'Ангелина'},
          {name: 'Оля'},
        ]
      };
    }
  }
</script>

<style scoped>

</style>
