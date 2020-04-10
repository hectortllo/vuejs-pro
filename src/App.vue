<template lang="pug">
  #app
    section.section 
      nav.nav.has-shadow
        .container
          input.input.is-large(
            type="text", 
            placeholder = "Buscar Canciones", 
            v-model="searchQuery"
          )
          a.button.is-info.is-large(@click="search") Buscar
          a.button.is-danger.is-large &times;
          p
            small {{ searchMessage }}

      .container.results
        .columns
          .column(v-for="t in tracks") {{ t.name }} - {{ t.artist }}
    
</template>

<script>
const tracks = [
  { name: "Muchacha", artist: "Luis Alberto Spineta" },
  { name: "Hoy acá en el baile", artist: "El Pepo" },
  { name: "I was made for loving you", artist: "Kiss" }
];

export default {
  name: "App",

  data() {
    return {
      searchQuery: "",
      tracks: []
    };
  },

  methods: {
    search() {
      this.tracks = tracks;
    }
  },

  computed: {
    searchMessage() {
      return `Encontrados: ${this.tracks.length}`;
    }
  }
};
</script>

<style lang="scss">
@import "./scss/main.scss";

.results {
  margin-top: 50px;
}
</style>
