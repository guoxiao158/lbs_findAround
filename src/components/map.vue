<template>
  <div class="amap-page-container">

    <el-amap :vid="'amap-vue'" :center="center" :zoom="zoom" :map-manager="amapManager" :plugin="plugin" :events="events">
       <el-amap-marker v-for="marker in markers" :position="marker"></el-amap-marker>
    </el-amap>
    <button v-on:click="getMap">get map</button>
   
  </div>
</template>
<script>
import { AMapManager } from 'vue-amap';
let amapManager = new AMapManager();
export default {
  name: 'amap-page',
  data: function() {
    return {
      vid: 'amap-vue-1',
      zoom: 14,
      center: [],
      events: {
        'moveend': () => {
          let mapCenter = this.amapManager.getMap().getCenter();
          this.center = [mapCenter.getLng(), mapCenter.getLat()];
        },
        'zoomchange': () => {
          this.zoom = this.amapManager.getMap().getZoom();
        },
        'click': (e) => {
          alert('map clicked');
        }
      },
      plugin: ['ToolBar', {
        pName: 'MapType',
        defaultType: 0,
        events: {
          init(o) {
            console.log(o);
          }
        }
      }],
      amapManager: amapManager,
      markers: [
             
             ]
    };
  },
  methods: {
    getMap: function() {
      console.log(this.amapManager.getMap());
      console.log(this.center);
    },
    addMarker: function() {
      let lng = this.center[0];
      let lat = this.center[1];
      this.markers.push([lng, lat]);
    }
   
  },
  activated: function () {
      		this.location = this.$route.query.data;
      		this.center=this.location.split(",");
      		this.addMarker();
   },
};
</script>
<style>
	#amap-vue{
		width: 100%;
		height: 550px;
		margin-top: 50px;
	
	}
</style>
