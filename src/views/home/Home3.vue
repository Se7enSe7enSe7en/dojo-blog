<template>
  <div class="home">
      <h1>Home3</h1>
      <input type="text" v-model="search">
      <!-- [?] why no close "/>" in input tag -->
      <p>search term - {{ search }}</p>
      <div v-for="name in matchingNames" :key="name">{{ name }}</div>
      <!-- make sure the contents of names should not have duplicates when used in :key -->
      <button @click="handleClick">Stop watch and watchEffect</button>
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from 'vue'

export default {
    name: 'Home3',
    setup() {
        const search = ref('')
        const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'bowser', 'koopa', 'peach'])
        
        const stopWatch = watch(search, () => {
            console.log('watch function activated');
        })

        const stopWatchEffect = watchEffect(() => {
            console.log('watchEffect function activated value: ', search.value);
        })

        const matchingNames = computed(() => {
            return names.value.filter((name1) => name1.includes(search.value))
        })

        const handleClick = () => {
            stopWatch()
            stopWatchEffect()
        }

        return { names, search, matchingNames, handleClick}
    }
}
</script>

<style>

</style>