<template>
    <v-app>
        <Alerts/>
        <Snackbar/>
        <v-toolbar app
                   dark
                   fixed
                   color="primary">
            <v-toolbar-side-icon v-if="isFirstView"
                                 @click.stop="$refs.menu.open()"/>
            <v-toolbar-side-icon v-else
                                 @click.stop="$router.go(-1)">
                <v-icon>arrow_back</v-icon>
            </v-toolbar-side-icon>
            <v-toolbar-title class="white--text">{{title}}</v-toolbar-title>
            <v-spacer/>
            <router-view name="controls"/>
        </v-toolbar>

        <Menu ref="menu"/>
        <v-content>
            <v-container fluid>
                <router-view/>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
  import Menu from "./components/Menu";
  import Alerts from './components/Alerts';
  import Snackbar from './components/Snackbar';

  export default {
    name: 'App',
    components: {
      Menu,
      Alerts,
      Snackbar,
    },
    computed: {
      isFirstView() {
        return this.$store.state.firstViews.indexOf(this.$route.name) !== -1;
      },
      title() {
        return this.$store.state.viewTitle;
      }
    },
    methods: {
      setTitle(title) {
        this.title = title;
      }
    }
  };
</script>
