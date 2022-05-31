<template>
  <div>
      <EmitC1 @login="fun()" >login</EmitC1>
  </div>
</template>

<script>
import EmitC1 from './EmitC1'
export default {
    name:"AbhI",
    components:{
        EmitC1
    },
    methods:{
        fun(){
            document.write("sample check emit")
        }
    }

}
</script>
