<template>
  <v-app>
    <v-app-bar
    color="#F7F7F7"
    elevation='0'
    max-height="56px"
    >
    <img
      class="LogoAnimation"
      src="@/assets/logo_Jordan.svg"
    >
    <img
      class="LogoAnimation"
      src="@/assets/logo_snkrs.svg"
    >
    <v-spacer></v-spacer>
    <div class="headerText">
    Ajuda | Acompanhe seu pedido | Junte-se a nós | Entrar
    </div>
    </v-app-bar>
    <v-main>
      <v-row no-gutters align="center" justify="end">
        <v-col
          cols="2"
          class="d-flex justify-center"
        >
          <img
            class="LogoAnimation"
            src="@/assets/logo_nike.svg"
          >
        </v-col>
        <v-col
          cols="7"
          class="d-flex justify-center"
        >
          Lançamento
          Masculino
          Feminino
          Infantil
          Ofertas
          SNKRS
        </v-col>
        <v-col
          cols="3"
          class="d-flex justify-center"
        >
          <v-text-field 
          label='busca'
          rounded
          outlined
          dense
          color="black"
          >
            <template v-slot:append-outer>
              <img
              class="LogoAnimation"
              src="@/assets/icon_sacola.svg"
              >
            </template>
          </v-text-field >
        </v-col>
        <v-col
          cols="12"
        >
          <div
          >
          segudna barra
          </div>
        </v-col>
      </v-row>
      <router-view></router-view>
      <News />
      <AppFooter />
    </v-main>
  </v-app>
</template>

<script>
import AppFooter from './components/AppFooter';
import News from './components/News';

export default {
  name: 'App',

  components: {
    AppFooter,
    News
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
.headerText{
  font-family: 'Helvetica Neue', Helvetica-Neue, HelveticaNeue, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
}
.toolbar{
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px 40px;

position: static;
width: 1024px;
height: 72px;
left: 0px;
top: 56px;

}
</style>
