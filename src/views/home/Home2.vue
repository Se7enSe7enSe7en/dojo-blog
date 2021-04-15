<template>
  <div class="home">
    <h1>Home2</h1>
    <h2>Refs</h2>
    <p> {{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updatedNinjaOne">Updated ninja one</button>
    <h2>Reactive</h2>
    <p> {{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
    <button @click="updatedNinjaTwo">Updated ninja Two</button>
    <h1>Refs vs Reactive</h1>
    <p>Ref: {{ ninjaThreeName }} | Reactive: {{ ninjaFourName }}</p>
    <button @click="updatedNinjaThreeName">Ref</button> | 
    <button @click="updatedNinjaFourName">Reactive</button>

  </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
name: 'Home2', // [?] what is this for 
setup() {
    const ninjaOne = ref({ name: 'mario', age: 30 })
    const ninjaTwo = reactive({ name: 'luigi', age: 35 })

    const ninjaThreeName = ref('Wario')
    const ninjaFourName = reactive('Waluigi') 


    const updatedNinjaOne = () => {
      ninjaOne.value.age = 40
    }

    const updatedNinjaTwo = () => {
      ninjaTwo.age = 45
    }

    const updatedNinjaThreeName = () => {
      ninjaThreeName.value = 'Mario'
    }

    const updatedNinjaFourName = () => {
      ninjaFourName = 'Luigi'
    }

    return { ninjaOne, updatedNinjaOne, ninjaTwo, updatedNinjaTwo, ninjaThreeName, ninjaFourName, updatedNinjaThreeName, updatedNinjaFourName }

  },
}
</script>

<style>

</style>