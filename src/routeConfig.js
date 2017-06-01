import Home from './components/home.vue'
import List from './components/list.vue'
import Detail from './components/detail.vue'
import Map from './components/map.vue'
export default[
	   {
		    path:'/home',
			name:"home",
		    component:Home
		},
		{
		    path:'/list',
			name:"list",
		    component:List
		},
		{
		    path:'/map',
			name:"map",
		    component:Map
		},
		{
		    path:'/detail',
			name:"detail",
		    component:Detail
		},
		{ 
		    path: '/', 
		    redirect: '/home' 
	  	},
	  	{ 
		    path: '*', 
		    redirect: '/home' 
	  	}
]
