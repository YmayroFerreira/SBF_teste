<template>
  <v-main>
    <v-card
      class="mx-auto"
      color="#F7F7F7"
    >
      <v-list max-height="538px" class='overflow-y-auto' color="#F7F7F7">
        <v-list-item-group v-model="model">
          <v-list-item
            v-for="(item, i) in places"
            :key="i"
          >
            <v-list-item-content>
              <v-list-item-title v-text="item.short" class='cardTitle'>
                
              </v-list-item-title>
              <v-card rounded min-width='375px' height='160px'>
                <div class='cardContent'>{{item.local}}</div>
                <div class='cardContent'>Atendimento:<br/>{{item.details}}</div>
                <div class='cardContent'>{{item.available}}</div>
                </v-card>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-main>
</template>

<script>
  export default {
    computed:{
      places(){
        return this.$store.getters.places.slice(0, 3);
      }
    },
    data: () => ({
      model: null,
      list: [
        {
          local: 'Avenida Paulista, 1227 - Bela Vista São Paulo - SP, 01311-200',
          details: 'Atendimento:Segunda a Sábado 10h às 22h | Domingo 11h às 20h',
          available: 'Disponível em 4 dias úteis',
          cordinates: [1,2]
        },
        {
          local: 'Avenida Paulista, 1227 - Bela Vista São Paulo - SP, 01311-200',
          details: 'Atendimento:Segunda a Sábado 10h às 22h | Domingo 11h às 20h',
          available: 'Disponível em 4 dias úteis',
          cordinates: [3,4]
        },
      ]
    }),
  }
</script>
<style scoped>
.cardTitle{
  font-family: 'Helvetica Neue', Helvetica-Neue, HelveticaNeue, Arial, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 120%;
  color: #1A1A1A;
}
.cardContent{
  position: static;
  width: 327px;
  height: 42px;
  font-family: 'Helvetica Neue', Helvetica-Neue, HelveticaNeue, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 150%;
  display: flex;
  align-items: center;
  color: #737373;
  flex: none;
  order: 0;
  flex-grow: 1;
  margin: 10px 8px;
}
/* width */
::-webkit-scrollbar {
  width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px white; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #D6D6D6; 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #D6D6D6; 
}
</style>
