<template>
  <div>
    <v-list subheader
            v-for="(lessons, time) in items">
      <v-subheader>{{time}}</v-subheader>
      <v-list-tile
              v-for="(lesson, index) in lessons"
              :key="index"
              @click="$router.push('/lesson/')">
        <v-list-tile-content>
          <v-list-tile-title>{{lesson.name}}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script>
  export default {
    name: 'ClassList',
    data () {
      return {
        items: {
          '19:00': [
            {name: 'Женский стиль'},
          ],
          '20:00': [
            {name: 'Кизомба 0'},
            {name: 'Бачата 0'}
          ],
          '21:00': [
            {name: 'Кизомба 0'},
            {name: 'Бачата 0'}
          ],
        },
      }
    }
  };
</script>

<style>

</style>
