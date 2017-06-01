<template>
	
	<div class="footer">
		
		<p >{{adress}}</p>
	</div>
</template>

<script>
	import Address from '../libs/getaddress.vue'
	var m;
	export default {
		data(){
			return{
				adress:"数据在加载",
				p:null
			}
		},
		created(){
			var  m=Address.getAddress();
			console.log(Address.getAddress())
			console.log("获取"+m.longitude);
			this.p=m
		},
		activated(){
			var  m=Address.getAddress();
			console.log(Address.getAddress())
			console.log("获取"+m.longitude);
			this.p=m;
		},
		mounted() {
			//页面加载时执行
			
		}, 
		watch:{
			 // 如果 发生改变，这个函数就会运行
		    p: function (oldvalue,newvalue) {
		    	console.dir("watach函数"+oldvalue)
		    	this.p.longitude=oldvalue.longitude;
		    	this.p.latitude=oldvalue.latitude;
		    	this.transAdress();
		    }
			
		},
		methods:{
			
			transAdress(){
				console.log("当前坐标"+this.longitude);
				if(this.longitude!=0){
					var _this=this;
				 	var url="http://restapi.amap.com/v3/geocode/regeo?key=d9b0c725184fc33b2cf8d5d45629d339&location="+this.p.longitude+","+this.p.latitude;
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