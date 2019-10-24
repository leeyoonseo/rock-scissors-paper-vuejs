<template>
  <div>      
      <p>{{ nicName }}</p>
      <div>
          <default-button @defaultButtonClick="onClick">
              game
          </default-button>
          <default-button @defaultButtonClick="onChangeNicName">
              nicName
          </default-button>
      </div>
  </div>
</template>

<script>
import DefaultButton from '../components/DefaultButton.vue';

export default {
    name : 'TheMain',

    components : {
        DefaultButton
    },

    props : {
        nicName : String
    },
    
    methods : {
        onClick(){
            this.$router.push('/game');
        },

        onChangeNicName(){
            this.$router.push('/history');
        }
    }
}
</script>

<style>

</style>