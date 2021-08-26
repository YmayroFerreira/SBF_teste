<template>
  <v-main>
    <div class="footer">
        <v-row no-gutters align="start" justify="start" class='spacer'>
            <v-col cols='3'>
                <v-row no-gutters align="center" justify="end">
                    <v-col cols='12' class='spacer'>
                        Encontre Uma Loja Nike
                    </v-col>
                    <v-col cols='12' class='spacer'>
                        Cadastre-se para receber novidades
                    </v-col>
                    <v-col cols='12' class='spacer'>
                        Mapa do site
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols='3'>
                <v-row no-gutters align="center" justify="end">
                    <v-col cols='12'>
                        AJUDA
                    </v-col>
                    <v-col cols='12' class='detail'>
                        Dúvidas Gerais<br/>
                        Encontre seu Tamanho<br/>
                        Entregas<br/>
                        Pedidos<br/>
                        Trocas e Devoluções<br/>
                        Editar consentimento<br/>
                        Preferências de Cookie<br/>
                        Pagamentos<br/>
                        Produtos<br/>
                        Corporativo<br/>
                        Fale Conosco
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols='3'>
                <v-row no-gutters align="center" justify="end">
                    <v-col cols='12'>
                        Sobre a nike
                    </v-col>
                    <v-col cols='12' class='detail'>
                        Feito para Jogar<br/>
                        Sustentabilidade<br/>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols='3'>
                <v-row no-gutters align="center" justify="end">
                    <v-col cols='12'>
                        Redes sociais
                    </v-col>
                    <v-col cols='12'>
                        <img
                        src="@/assets/logo_redes_sociais_facebook.svg"
                        >
                        <img
                        src="@/assets/logo_redes_sociais_instagram.svg"
                        >
                        <img
                        src="@/assets/logo_redes_sociais_youtube.svg"
                        >
                    </v-col>
                    <v-col cols='12'>
                        Formas de pagamento
                    </v-col>
                    <v-col cols='12'>
                        <img
                        src="@/assets/pgto_Amex.svg"
                        >
                        <img
                        src="@/assets/pgto_Boleto.svg"
                        >
                        <img
                        src="@/assets/pgto_Discover.svg"
                        >
                        <img
                        src="@/assets/pgto_Elo.svg"
                        >
                        <img
                        src="@/assets/pgto_Hipercard.svg"
                        >
                        <img
                        src="@/assets/pgto_Mastercard.svg"
                        >
                        <img
                        src="@/assets/pgto_Visa.svg"
                        >
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols='12'>
                <v-divider dark></v-divider>
            </v-col>
            <v-col cols='2' >
                <div class='detail'>
                    Brasil
                </div>
            </v-col>
            <v-col cols='2' >
                <div class='detail'>
                    Política de Privacidade
                </div>
            </v-col>
            <v-col cols='2'>
                <div class='detail'>
                    Termos de Uso
                </div>
            </v-col>
            <v-col cols='6' >
                <div class='detail'>
                © 2021 Nike. Todos os direitos reservados. Fisia Comércio de Produtos Esportivos Ltda - CNPJ: 59.546.515/0016-10 Rua José Semião Rodrigues Agostinho, 1370 - Galpão Unidade 17 - Nível 0, 1 e 2 - CEP 06833-300 - Embu das Artes/SP.
                </div>
            </v-col>
        </v-row>
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
.footer{
    color: #FFFFFF;
    background-color:#1A1A1A;
    font-family: 'Helvetica Neue', Helvetica-Neue, HelveticaNeue, Arial, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 150%;
    text-transform: uppercase;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px
}
.footer .detail{
    color: #F7F7F7;
    font-weight: normal;
    font-size: 12px;
    line-height: 150%;
    text-transform: none;
    margin: 10px 0px 10px 40px
}
.spacer{
    margin: 0px 0px 10px 40px
}
</style>
