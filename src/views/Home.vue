<template>
  <!-- PART 1 HTML -->
  <div class="home">
    <h1>Home</h1>
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">click me</button>
    <button @click="age++">add 1 to age</button>
    <!-- notice how we didn't use age.value++, apparently in a template, we don't use a value property -->
    <button @click="variableCheck">VARIABLE CHECK</button>
    <input type="text" v-model="name">
  </div>
  
</template>


<script>
import { ref, reactive } from 'vue';

export default {
  name: 'Home', // [?] what is this for 
  setup() {
    console.log(this); // outputs undefined

    // this.$ref.varName (old way)
    const p = ref(null) // p is a reference object

    const name = ref('mario') // name is a reference object, the value of this reference object is 'mario'
    const age = ref(30)

    const handleClick = () => {
      // p.value.classList.add("test") // add a class to p.value (paragraph <p> element)
      // p.value.textContent = "helloooooo world"
      name.value = 'luigi'
      age.value = 35
    }

    const variableCheck = () => {
      console.log("age:", age);
      console.log("age.value:", age.value);
    } 

    return { name, age, handleClick, p, variableCheck}

  }, 
  
  
}

</script>
