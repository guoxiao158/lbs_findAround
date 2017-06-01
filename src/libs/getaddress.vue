
<script>
//function getLocation() {
//		//检查浏览器是否支持地理位置获取
//		if (navigator.geolocation) {
//		//若支持地理位置获取,成功调用showPosition(),失败调用showError
//			alert("正在努力获取位置...");
//		var config = { enableHighAccuracy: true, timeout: 5000, maximumAge: 30000 };
//		navigator.geolocation.getCurrentPosition(showPosition, showError, config);
//			}else {
//		//alert("Geolocation is not supported by this browser.");
//		alert("定位失败,用户已禁用位置获取权限");
//	}
//}	
//function showPosition(position){
//	var lng = position.coords.longitude; 
//   var lat = position.coords.latitude
//	lert(lng)
//}

//判断浏览器支持
var address={
	"longitude":116.29407440000001,
	"latitude":40.039161199999995
}
function getAddress(){

		if(window.navigator.geolocation) {  
		    //调用getCurrentPosition方法
		     window.navigator.geolocation.getCurrentPosition(function(position){
		     	
		     	 var lng = position.coords.longitude; 
			      var lat = position.coords.latitude; 
			      //转化成经纬度
				address.longitude=lng;
				address.latitude=lat;
				 console.log(address.latitude+"getaddress的坐标"+address.longitude)
				
		     
		     	
		     }, handleError);
		     //注：options  为第三个参数 ，为可选参数
		     //var options = {enableHighAccuracy: true,timeout: 2000,maximumAge: 2000}; 
		}else{
		     console.log("浏览器不支持hml5来获取地理位置信息"); 
		}
	return address;
}


//var getAddress=function
function handleSuccess(position){
      //经纬度
      var lng = position.coords.longitude; 
      var lat = position.coords.latitude; 
      //转化成经纬度
	address.longitude=lng;
	address.latitude=lat;
	 console.log("getaddress的坐标"+address.longitude)
	return address;     
 }

function handleError(error){
     var result;
     switch (error.code) {
          case error.PERMISSION_DENIED:
               result="请打开您的定位系统";
               break;
          case error.POSITION_UNAVAILABLE:
               result="暂时获取不到您的地点信息，请手动选择城市";
               break;
          case error.TIMEOUT:
               result="连接超时";
               break;
          case error.UNKNOWN_ERROR:
               result="发生了位置错误";
               break;
          }
     }
	

	export default{
		getAddress,
		address
	}
</script>



