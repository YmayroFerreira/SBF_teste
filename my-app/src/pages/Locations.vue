<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row align="center" no-gutters>
          <v-col
          cols='6'>
            <LocationList />
          </v-col>
          <v-col
          cols='6'>
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

</style>
