<template>
  <div>
  <transition name="fade">
		   <keep-alive>
		    	
		     		 <router-view></router-view>
		      
		   </keep-alive>
  		</transition>
  
  
  
  <positionView></positionView>
  </div>
</template>

<script>
	import Address from './libs/getaddress.vue'
	Address.getAddress();
	import positionView from "./components/position.vue"
	export default {
		components: {		
			
			positionView
		}
	
	}
	
</script>

<style>

#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}
.fade-enter-active, .fade-leave-active {
        transition: all .5s ease-out;
    }
.fade-enter, .fade-leave-active {
    opacity: 0;
    transform: translate3d(300px,0 , 0);
}
article{
	position: relative;
	top: 4vh;
	display: flex;
	
	background: #fff;
	
}
aside{
	width: 24vw;
	background: #fff;
}
aside ul li{
	height: 11vh;
	border: 1px solid #ccc;
	line-height: 11vh;
	font-size: 7vw;
}
figure{
	margin: 0 auto;
	flex: 1;
}
figure ul li{
	height: 11vh;
	border-bottom: 1px solid #ccc;
	border-top: 1px solid #ccc;
	line-height: 11vh;
	font-size: 6vw;
	background: #f9f9f9;
}
figure img{
	width: 9vh;
	float: left;
	margin-left: 5vw;
	margin-top: 1.5vh;
}
figure span{
	
	}

aside ul li:hover{
	background: #f9f9f9;
	border-left: #4bb7ff solid 5px;
	border-right: none;
}	

</style>
