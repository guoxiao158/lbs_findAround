<template>
	<div>
		<p><a href="javascript:history.back()">返回 </a><span class="title">{{result}}</span></p>
	
	</div>
</template>

<script>
	import Address from '../libs/getaddress.vue'
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
			
				var url="http://restapi.amap.com/v3/place/detail?key=d9b0c725184fc33b2cf8d5d45629d339&id="+this.result ;
				var _this=this;
			 	this.$http.get(url).then((res)=>{			
					
					_this.resultList=res.data.pois;
					console.dir("结果是"+_this.resultList);
				}).catch(function(err){
					console.log(err);
				});
				
				
			}
	
			
		}
		
	}	
</script>

<style>

</style>