<template>
    <div>
        <h1>promise</h1>
		<button @click="fun()">click</button>
    </div>
</template>


<script>
export default{
	name:'UiU',
		data(){
			return{

			}
		},
		methods:{

fun(){


var promise = new Promise(function(resolve, reject) {
const x = "mantra technology";
const y = "mantra technolo11";
if(x == y) {
	resolve();
} else {
	reject();
}
});

promise.then(function () {
		console.log('Success, You are correct ');
	}).
	catch(function () {
		console.log('Some error has occurred');
	});
}
}
}

</script>