<template>
  <v-main class="wrapper">
    <div class='container'>
        <div >
            <img
                class="LogoAnimation"
                src="@/assets/logo_nike.svg"
                height="32px"
            >
            
        </div>
        <div  >
            RECEBA AS NOVIDADES DA NIKE
        </div>
        <div >
            Cadastre-se e seja um dos primeiros a saber de todas as novidades e ofertas.
        </div>
        <div >
            <v-btn rounded dark> Cadastre-se</v-btn>
        </div>
    </div>
  </v-main>
</template>

<script>
  export default {

    data: () => ({
      model: null,
      
    }),
  }
</script>
<style scoped>
.wrapper{
    height: 317px;
    background: #F7F7F7;
    display: flex;
    justify-content: center; /* horizontal */
    align-items: center; /* vertical */
}
.container{
  display: table;
  text-align: center;
}

.container div{
  margin-top: 24px;
  
}
</style>
