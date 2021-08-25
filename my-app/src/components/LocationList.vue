<template>
  <v-main>
    <v-card
      class="mx-auto"
      max-width="500"
      color="#F7F7F7"
    >
      <v-list max-width="495" max-height="538px" class='overflow-y-auto' color="#F7F7F7">
        <v-list-item-group v-model="model">
          <v-list-item
            v-for="(item, i) in list"
            :key="i"
          >
            <v-list-item-content>
              <v-list-item-title v-text="item.local" class='cardTitle'></v-list-item-title>
              <v-card rounded width='375px' height='160px'>{{item}}</v-card>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-main>
</template>

<script>
  export default {

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
