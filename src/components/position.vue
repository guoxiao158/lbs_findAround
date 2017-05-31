<template>
	
	<div class="footer">
		
		<p >{{adress}}</p>
	</div>
</template>

<script>
	import Address from '../libs/getaddress.vue'
	var m=Address.getAddress();
	console.dir("我是"+m.longitude)
	export default {
		data(){
			return{
				adress:"数据在加载",
				longitude:Address.address.longitude,
				latitude:Address.address.latitude
			}
		},
		mounted() {
			//页面加载时执行
			this.transAdress();
		}, 
		watch:{
			 // 如果 发生改变，这个函数就会运行
		    address: function () {
		    	alert("sss")
		    }
			
		},
		methods:{
			
			transAdress(){
				console.log("当前坐标"+this.longitude);
				if(this.longitude!=0){
					var _this=this;
				 	var url="http://restapi.amap.com/v3/geocode/regeo?key=d9b0c725184fc33b2cf8d5d45629d339&location="+this.longitude+","+this.latitude;
					this.$http.get(url).then((res)=>{			
						
						_this.adress=res.data.regeocode.formatted_address;
						console.log(_this.adress);
					}).catch(function(err){
						console.log(err);
					});
						
				}
			 	
	
			 }	
			
		}	
	}	
	
	
</script>

<style>
	.footer{
		position: fixed;
		bottom: 0;
		background: #ccc;
		z-index: 99;
		height: 4vh;
		line-height: 4vh;
	}
</style>