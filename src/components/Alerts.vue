<template>
    <div class="alertWrapper">
        <v-alert v-if="alert"
                 :key="alertKey"
                 :color="alert.color"
                 :dismissible="alert.dismissible || false"
                 :icon="alert.icon"
                 :mode="alert.mode"
                 :origin="alert.origin"
                 :outline="alert.outline || false"
                 :transition="alert.transition"
                 :type="alert.type"
                 v-model="isShown"
                 @input="close"
        >
            {{alert.text}}
        </v-alert>
    </div>
</template>

<script>
  export default {
    name: "Alerts",
    data() {
      return {
        isShown: true,
        alertKey: 0,
      };
    },
    computed: {
      alert() {
        return this.$store.state.alerts[0];
      },
    },
    methods: {
      close() {
        if (this.isShown === false) {
          this.$store.commit('shiftAlert');
          this.isShown = true;
          this.alertKey++;
        }
      }
    }
  }
</script>

<style scoped>
    .alertWrapper {
        position: absolute;
        width: 100%;
        z-index: 3;
        top: -4px;
    }
</style>
