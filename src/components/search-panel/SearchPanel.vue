<template>
   <Input class="search-input" placeholder="Kinolarni qidirish" v-model="term" @input="changeHandler"/>
</template>
<script>
export default {
    props:{
        updateTerm:{
            type: Function,
            required: true,
        }
    },
    data(){
        return{
            term:''
        }
    },
    methods:{
        changeHandler(event){   
            this.term=event.target.value;
            this.updateTerm(this.term);
        }
    }
}
</script>
<style scoped>
.search-input {
    margin-bottom: 1rem;
    padding:1.5rem;
    border-radius: 4px;
    background-color: #fcfaf5;
    box-shadow: 15px 15px 15px rgba(0,0,0,0.15);
}
</style>