<template>
	
	
	
	<div class="list">
		<p><a href="javascript:history.back()">返回 </a><span class="title">{{result}}</span></p>
		
		<ul>
			<router-link :to="{path:'/detail',query:{data:result.id}}" tag="li" v-for="result in resultList">
			
				<h3>{{result.name}}</h3>
				<address>{{result.address}}</address>
				<p class="distance"><i></i>{{result.distance}}米</p>
			</router-link>
		</ul>
	</div>
</template>

<script>
	import Address from '../libs/getaddress.vue'
	Address.getAddress()
	export default {
		data(){
			return{
				longitude:Address.address.longitude,
				latitude:Address.address.latitude,
				result:"",
				resultList:[],
				page:1
			}
			
		},
		
		activated: function () {
      		this.result = this.$route.query.data;
      		this.getList();
    	},
		watch:{
		},
		methods:{
			getList(){
				console.log("获取路径"+this.longitude)
				if(this.longitude==0){
					Address.getAddress()
					this.longitude=Address.address.longitude;
					this.latitude=Address.address.latitude;
				}
				var url="http://restapi.amap.com/v3/place/around?key=d9b0c725184fc33b2cf8d5d45629d339&location="+this.longitude+","+this.latitude+"&keywords="+this.result+"&page="+this.page;
				var _this=this;
			 	this.$http.get(url).then((res)=>{			
					
					_this.resultList=res.data.pois;
					console.log(_this.resultList);
				}).catch(function(err){
					console.log(err);
				});
				
				
			}
	
			
		}
		
	}	
</script>

<style>
	.list ul li{
		width:100%;
		overflow: hidden;
		height: 10vh;	
		border-bottom: 1px solid #ccc;	
		margin-top: 5px;
		padding:0 0 9px 9px ;
	}
	.list ul li h3{
		overflow: hidden;
		text-overflow: ellipsis;
		white-space:nowrap;
	}
	.distance{
		float: right;	
		margin-right: 30px;
		}
	.list>p{
		text-align: center;
		font-size: 2rem;
		
	}
	.list>p a{
		float: left;
	}
</style>