<template>
  <v-main>
    <v-card
      class="mx-auto"
      color="#F7F7F7"
    >
      <GmapMap
        :center="{lat:-23.546344371769024, lng:-46.63900070077106}" 
        :zoom="12"
        map-type-id="terrain"
        style="height: 538px;"
        >
        <GmapMarker
            v-for="(cord, index) in places"
            :key='index'
            :clickable="true"
            :draggable="true"
            :position="{lat:cord.cordinates[0], lng:cord.cordinates[1]}"
            :icon="{ url: require('@/assets/icon_pin_mapa.svg')}"
        />
        </GmapMap>
    </v-card>
  </v-main>
</template>

<script>
import {gmapApi} from 'vue2-google-maps'

  export default {
    computed: {
        google: gmapApi,
        places(){
          return this.$store.getters.places.slice(0, 3);
        }
    },
    data: () => ({
      model: null,
       // Latitude: -85 to +85 (actually -85.05115 for some reason)
        // Longitude: -180 to +180
    }),
  }
</script>
<style scoped>


</style>
