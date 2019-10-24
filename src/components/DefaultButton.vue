<template>
        <button type="button" :class="[isReady ? 'on' : '']" @click="onClick">
            <slot></slot>
        </button>
</template>

<script>

export default {
    name : 'DefaultButton',

    props : {
        isReady : Boolean,
    },

    methods : {
        onClick(e){
            this.$emit('defaultButtonClick', e.target);
        }
    }
}
</script>

<style scoped>
  
</style>
