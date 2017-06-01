<template>
	<div class="detail">
		<p class="header"><a href="javascript:history.back()">返回 </a><span class="title">{{resultList[0].name}}</span></p>
		<div class="img">
			<img v-bind:src=resultList[0].photos[0].url />
			<div id="">
				<p>{{resultList[0].name}}</p>
			</div>
		</div>
		<ul>
			<li>
				<router-link :to="{path:'/map',query:{data:resultList[0].location}}">
				<img src="../assets/zuobiao.png" style="width: 40px;"/> {{resultList[0].address}}
				</router-link>
			</li>
			<li><img src="../assets/phone.png" style="width: 40px;"/> <a > {{resultList[0].tel}}</a></li>
			<li> 分享（使用share。js）   </li>
			<li> {{resultList[0].type}}   </li>
			<li> 评分{{resultList[0].biz_ext.rating}}   </li>
			<li> {{resultList[0].tag}}   </li>
			<li> 人均消费{{resultList[0].biz_ext.cost}}   </li>
		</ul>
		<div class="tejia" v-if="resultList[0].rich_content!=null">
			特价商品	
			<div class="list" v-for="item in resultList[0].rich_content.groupbuys">
			
				<p>{{item.title}}</p>
				<p>{{item.start_time}}~{{item.end_time}}</p>
				<p>已经售出{{item.sold_num}}</p>
			</div>
			
		</div>
		
		
		
		
	
	</div>
</template>

<script>
	import Address from '../libs/getaddress.vue'
	export default {
		data(){
			return{
				id:"",
				resultList:[]
			}
			
		},
		created: function () {
      		this.id = this.$route.query.data;
      		this.getList();
    	},
		activated: function () {
      		this.id = this.$route.query.data;
      		this.getList();
    	},
		watch:{
		},
		methods:{
			getList(){
		
				var url="http://restapi.amap.com/v3/place/detail?key=d9b0c725184fc33b2cf8d5d45629d339&id="+this.id ;
				var _this=this;
			 	this.$http.get(url).then((res)=>{			
					
					_this.resultList=res.data.pois;
					console.dir(_this.resultList);
				}).catch(function(err){
					console.log(err);
				});
				
				
			}
	
			
		}
		
	}	
</script>

<style>
.header{
		text-align: center;
		font-size: 2rem;
		
	}
	.header a{
		float: left;
	}
	.img img{
		width:100%;
		
		
	}
	.tejia .list{
		border: 1px solid #ccc;
		
	}
</style>