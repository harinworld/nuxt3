<template lang="">
    <div>
        <h2>About Page</h2>
        <p>{{count}}</p>
        <button @click="incre">증가</button>
        <div>getDB=>{{resData}}</div>
        <button @click="">데이터 DB에 추가</button>
    </div>
</template>

<script setup>
    const aa = useState('g',()=>"about쪽에 있는 데이터");
    const {data:resData} = await useFetch('/api/db?id=7', {body:'{id:1000}',method:'POST'})
</script>

<script>
export default {
    data(){
        return{
            count:0
        }
    },
    methods:{
        incre(){
            this.count++;
        },
        async add(){
            const data = {name:'홍지원', email:'dfjf@gmail.com',date:'2023-03-29'}
            await useFetch('/api/db?id=7', {body:data,method:'POST'})
        }
    }
}
</script>

<style lang="">
    
</style>