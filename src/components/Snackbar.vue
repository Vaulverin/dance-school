<template>
    <v-snackbar v-if="notification"
                v-model="isShown"
                :key="key"
                :bottom="notification.y === 'bottom'"
                :left="notification.x === 'left'"
                :right="notification.x === 'right'"
                :timeout="notification.timeout"
                :top="notification.y === 'top'"
                :vertical="notification.mode === 'vertical'"
                :multi-line="notification.mode === 'multi-line'"
                @input="close"
    >
        {{ notification.text }}
        <v-btn
                color="pink"
                flat
                @click="close(true)"
        >
            Закрыть
        </v-btn>
    </v-snackbar>
</template>

<script>
  export default {
    name: "Snackbar",
    data() {
      return {
        isShown: true,
        key: 0,
      }
    },
    computed: {
      notification() {
        return this.$store.state.notifications[0];
      }
    },
    methods: {
      close(force = false) {
        if (this.isShown === false || force) {
          this.$store.commit('shiftNotification');
          this.isShown = true;
          this.key++;
        }
      }
    }
  }
</script>

<style scoped>

</style>
