<template>
  <div>
    <ComponentHead/>
   <ComponentNav/>
   <MenuNav/>
   <CompBanner/>
   <router-view></router-view>
   <CompNew/>
   <CompPagar/>
   <CompGrupo/>
  </div>
</template>
<script>
import ComponentHead from '@/components/ComponentHead.vue';
import ComponentNav from '@/components/ComponentNav.vue';
import MenuNav from './components/MenuNav.vue';
import CompBanner from './components/CompBanner.vue';
import CompNew from './components/CompNew.vue';
import CompPagar from './components/CompPagar.vue';
import CompGrupo from './components/CompGrupo.vue';

export default {
  name: 'HomeView',
  components: {
    CompGrupo,
    ComponentHead,
    ComponentNav,
    MenuNav,
    CompBanner,
    CompNew,
    CompPagar,
},
mounted() {
    // Faz uma solicitação GET à API da Platzi para obter categorias
    this.$http.get('URL_DA_API_DA_PLATZI/categorias')
      .then(response => {
        this.categories = response.data;
      })
      .catch(error => {
        console.error('Erro ao obter categorias:', error);
      });
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
