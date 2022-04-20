<!--"Write a SELF INVOKABLE FUNCTION passing first name and last name as
Arguments/Params to print the FULL NAME
Eg: first name = ""Mantra""
last name = ""technologies""
Output : ""Mantra technologies""" -->


<template>
    <div>
        Firstname:<input type="text" id="sample1" placeholder="Enter your Firstname" name="fname" required><br><br>
        Lastname:<input type="text" id="sample2" placeholder="Enter your Lastname" name="lname" required><br><br>
        <button type="submit" @click="fun" >Submit</button>

    </div>
</template>
<script>
export default {
    name:"BlacK",
    data(){
        return{
        }
        },
        methods:{
            fun(){
            document.write(document.getElementById("sample1").value+"  "+document.getElementById("sample2").value)
            }
        }

    }

</script>
