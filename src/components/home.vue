<template>
	<div >
		<HeaderView></HeaderView>
	<article>
  			<aside>
  				<ul>
  					<li v-for="(tab,index) in arrList" :class="{active:index==currentIndex}" @click="showlist(index)" >{{tab.name}}</li>
  				</ul>
  			</aside>
  			<figure>
  				<ul>
  					<router-link :to="{path:'/list',query:{data:i.info}}" tag="li" v-for="i in detail" >
  						<img :src=i.img>{{i.info}}
  					</router-link>	
  				</ul>
  				
  			</figure>
  	</article>
  	
	</div>
	 
	
	
</template>

<script>
	import HeaderView from "./Header.vue"
	import positionView from "./position.vue"
	export default {
		data () {
		    return {
		      arrList:[],
		      detail:[],
		     currentIndex:0,
		      v:null
		    }
		  },
		activated(){
			//页面加载时执行
			this.getinfo();
		},  
		methods:{	
			getinfo(){
				var _this=this;
				this.$http.get('data.json').then((res)=>{			
					console.log(res.data);
					_this.arrList=res.data;
					

  					_this.detail=_this.arrList[0].result;
					
				}).catch(function(err){
					console.log(err);
				});
			},
			showlist(index){
				this.currentIndex=index;
				this.detail=this.arrList[index].result;
				console.dir(this.detail)
			}	
		},
		components: {		
			HeaderView,
			positionView
		}
		  
		  
}
</script>

<style>
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

.active{
	background: #f9f9f9;
	border-left: #4bb7ff solid 5px;
	border-right: none;
}
</style>