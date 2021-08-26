<template>
  <v-app>
    <v-app-bar
    color="#F7F7F7"
    elevation='0'
    max-height="56px"
    width="100%"
    >
    <div class='logos'>
    <img
      src="@/assets/logo_Jordan.svg"
    >
    </div>
    <div class='logos'>
    <img
      src="@/assets/logo_snkrs.svg"
    >
    </div>
    <v-spacer></v-spacer>
    <div class="headerText">
    <span >Ajuda</span >
    <span > | </span >
    <span >Acompanhe seu pedido </span >
    <span >| </span >
    <span >Junte-se a nós </span >
    <span >| </span >
    <span >Entrar</span >
    </div>
    </v-app-bar>
    <v-main>
      <v-row no-gutters align="center" justify="end">
        <v-col
          cols="2"
          class="d-flex justify-center"
        >
          <img
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
              src="@/assets/icon_sacola.svg"
              >
            </template>
          </v-text-field >
        </v-col>
        <v-col
          cols="12"
        >
        <div style='text-align: center;'>
               <img
                src="@/assets/icon_seta_esquerda.svg"
                height="32px"
                alt="Avatar"
                class='imgAlign'
              >
              <img
                src="@/assets/logo_nike_snkrs.svg"
                height="32px"
                class='alignment'
                
              >
              <span >Fique por dentro dos lançamentos</span>
              <span  >SNKRS</span>
              <img
                 class='imgAlign'
                src="@/assets/icon_seta_direita.svg"
                height="32px"
                
              >
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
  min-width: 35%;
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
.logos{
  margin-left: 3%;
}
#faixa{
    height: 40px;
    background: #F7F7F7;
    
}
.test{
   margin-left: auto;
  margin-right: auto;
}
span + span {
    margin-left: 2%;
}
img + span {
    margin-left: 5%;
}
img + img {
    margin-left: 10%;
}
span + img {
    margin-left: 10%;
}
</style>
