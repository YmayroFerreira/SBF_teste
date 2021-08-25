<template>
  <v-main>
    <v-card
      class="mx-auto"
      max-width="500"
      color="#F7F7F7"
    >
      <GmapMap
        :center="{lat:-23.56692580442285, lng:-46.512397525274174}" 
        :zoom="15"
        map-type-id="terrain"
        style="width: 500px; height: 538px;"
        >
        <GmapMarker
            :clickable="true"
            :draggable="true"
            :position="{lat:-23.56692580442285, lng:-46.512397525274174}"
            @click="center={lat:-23.56692580442285, lng:-46.512397525274174}"
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
        google: gmapApi
    },
    data: () => ({
      model: null,
       // Latitude: -85 to +85 (actually -85.05115 for some reason)
        // Longitude: -180 to +180
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
