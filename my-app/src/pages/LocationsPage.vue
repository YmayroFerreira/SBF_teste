<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row align="start" justify="center" wrap>
          <v-col
          md='3' sm='1'>
            
          </v-col>
          <v-col
          md='6' sm='10'>
            <v-text-field 
            dense
            label='Buscar por coordenadas'
            placeholder="ex: 123 456"
            rounded
            outlined
            color="black"
            max-width='464px'
            v-model='coordinates'
            >
            <template v-slot:append-outer>
              <v-btn rounded dark medium class='btn_align' width="102" @click="search">
                <span >Buscar</span>
              </v-btn>
            </template>
            <template v-slot:prepend-inner>
              <img
                style='padding-top: 50%; margin-left: -40%'
                src="@/assets/icon_lupa.svg"
              >
            </template>
            </v-text-field>
          </v-col>
          <v-col
          md='3' sm='1'>
            
          </v-col>
          <v-col
          md='6' sm='10' v-if='places.length > 0'>
            <LocationList />
          </v-col>
          <v-col
          md='6' sm='10'  v-if='places.length > 0'>
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
  computed: {
      places(){
        return this.$store.getters.places.slice(0, 3);
      }
    },
  components: {
    LocationList,
    Map
  },

  data: () => ({
    coordinates: ''
  }),
  methods:{
    search(){
      let spaceCount = (this.coordinates.split(" ").length - 1)
      if(spaceCount === 1){
        this.$store.dispatch('searchPlaces', this.coordinates)
      }
    }
  }
};
</script>
<style scoped>
.btn_align {
  text-transform: none;
  margin-top: -7%;
}
</style>
