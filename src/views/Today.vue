<template>
  <LessonsList/>
</template>

<script>
import LessonsList from '../components/LessonsList.vue'

export default {
  name: 'Today',
  components: {
    LessonsList,
  },

  created() {
    this.$emit('set-title', 'Сегодня');
  }

}
</script>
