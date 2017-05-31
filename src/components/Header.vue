<template>
	<header class="home_header">
  			<div>
	  			<img src="../assets/logo.png"/>
	  			
  			</div>
  			<nav>
  				<input type="text"  placeholder="搜索你想找的"/>
  				<button>搜索</button>
  			</nav>
  		</header>
</template>

<script>
</script>

<style>
.home_header{
	width: 100%;
	height: 13vh;
	
	overflow: hidden;
}
.home_header div{
	float: left;
	height: 6vh;
	width: 100%;
	margin: 8px 0px 0px 12px;
}
.home_header div img{
	height: 100%;
	
}

nav{
	/*position: absolute;
	top: 7vh;*/
	width: 100%;
	height: 6vh;
	background: #f7f7f7;
}
nav button{
	height: 4.7vh;
	border: none;
	background: #ccc;
	width:17%;
	box-shadow: 2px 2px 2px #555555;
}
nav input{
	margin-top: 3px;
	width: 80%;
	height: 4.7vh;
	border: 1px solid #ccc;
	border-radius: 1vh;
	box-shadow: -2px -0px 5px #000000 inset;
	
}
</style>