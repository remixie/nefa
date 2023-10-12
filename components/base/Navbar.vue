<template>
  <nav id="navbar" class="relative z-10 w-full text-neutral-800">
    <div class="flex flex-col max-w-screen-xl px-8 mx-auto lg:items-center lg:justify-between lg:flex-row py-4">
      <div class="flex flex-col lg:flex-row items-center ">
        <div class="w-1/5 items-center justify-between py-6">
          <div class="text-white text-center uppercase text-sm">
            <img :src="require('~/assets/img/logo/StormStriker_logo.png')" class=" m-auto" alt="Nefa Logo" />
            Unofficial NA Site
          </div>
          <button class="rounded-lg lg:hidden focus:outline-none focus:shadow-outline" @click="open = !open">
            <SegmentIcon v-if="!open" :size="24" />
            <CloseIcon v-else :size="24" />
          </button>
        </div>
        <ul
          class="w-1/2 ml-20 text-center h-auto lg:items-center grid grid-cols-3"
        >
          <NavLink name="Patch Notes" url="https://steamcommunity.com/games/2503740/announcements/detail/3732979377044442636 " />
          <NavLink name="News" url="https://store.steampowered.com/news/app/2503740" />
          <NavLink name="Discord" url="https://discord.gg/y9pTt8sC8Z" />
        </ul>
      </div>
      <div :class="[open ? 'flex' : 'hidden lg:flex']" class="space-x-3">
        <a href="https://store.steampowered.com/app/2503740/Storm_Striker/">
        <base-button class="px-8 xl:px-10 py-3 mt-2 bg-[#f69034] text-zinc-800 uppercase font-bold">
          Play Now
        </base-button>
      </a>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'BaseNavbar',
  data() {
    return {
      open: false,
      dropdownNavbar: false,
    }
  },
  methods: {
    dropdownToggler () {
      this.dropdownNavbar = !this.dropdownNavbar
    }
  }
}
</script>
