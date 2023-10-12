<template>
  <li class="">
    <a
      class=" text-sm bg-transparent text-[#fff] duration-300 transition-colors hover:text-orange-200 focus:outline-none focus:shadow-outline"
      :href="url"
    >
      {{ name }}
    </a>
  </li>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
}
</script>
