<template>
  <li class="relative">
    <button type="button" class="w-full py-4 text-left" @click="selected = !selected">
      <div class="flex items-center justify-between">
        <span class="font-medium hover:text-orange-200 duration-300 transition-colors">{{ accordion.title }}</span>
      </div>
    </button>

    <transition name="slide">
      <div v-if="selected" class=" transition-all duration-700" style="">
        <div class="">
          <p class="text-sm text-gray-200 font-serif tracking-wide leading-relaxed">
            {{ accordion.description }}
          </p>
        </div>
      </div>
    </transition>
  </li>
</template>
<script>
export default {
  name: 'BaseAccordion',
  props: {
    accordion: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      selected: false,
    }
  },
}
</script>
