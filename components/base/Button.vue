<template>
  <button
    class="text-sm text-center hover:shadow-md min-w-[180px] hover:shadow-[#000]/50 hover:bg-white hover:text-[#a64f00] transition duration-300"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'BaseButton',
  inheritAttrs: false,
}
</script>
