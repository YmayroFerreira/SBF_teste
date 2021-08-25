<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row align="start" justify="end">
          <v-col
          cols='3'>
            
          </v-col>
          <v-col
          cols='6'>
            <v-text-field 
            dense
            label='Buscar por coordenadas'
            placeholder="ex: 123"
            rounded
            outlined
            color="black"
            max-width='464px'
            >
            <template v-slot:append-outer>
              
              <v-btn rounded dark medium class='btn-text-transform' width="102">
                <span >Buscar</span>
              </v-btn>
            </template>
            <template v-slot:prepend-inner>
              <img
                style='padding-top: 50%'
                src="@/assets/icon_lupa.svg"
              >
            </template>
            </v-text-field>
          </v-col>
          <v-col
          cols='3'>
            
          </v-col>
          <v-col
          cols='5'>
            <LocationList />
          </v-col>
          <v-col
          cols='6' offset="1">
            <Map />
          </v-col>
        </v-row>
      </v-container>
      
    </v-main>
  </v-app>
</template>

<script>
import LocationList from '@/components/LocationList';
import Map from '@/components/Map';

export default {
  name: 'App',

  components: {
    LocationList,
    Map
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
.v-btn {
  text-transform: none;
}
</style>
