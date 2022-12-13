<template>
  <div id="map"></div>
</template>

<script setup>
import 'ol/ol.css';
import { ref, onMounted } from 'vue';
import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';

const init = () => {
  let mapInstance = new Map({
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    target: document.getElementById('map'),
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
  });
  console.log(mapInstance.getAllLayers());
};

onMounted(() => {
  init();
});
</script>

<style scoped>
#map {
  width: 500px;
  height: 500px;
}
</style>
