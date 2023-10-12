<template>
  <div class=" bg-gradient-to-t from-zinc-600 to-zinc-800 font-sans ">
    <div class="relative">
      <BaseNavbar />

      <main class="text-neutral-800">
        <Nuxt />
      </main>

    </div>
    <div class="py-10 text-gray-400 text-center text-xs arial font-serif">Site Designed by Chloe Main Rem#5626. F.A.Q. is subject to change.<br>All Storm Striker content is owned by Storm Striker Studio. All rights reserved.</div>
  </div>
</template>
<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&family=Quantico:ital,wght@0,400;0,700;1,400;1,700&display=swap');

.cover-gradient {
  background: #383838;
}
.cover-gradient-2 {
  background: #383838;
}
.bg-blue-gradient,
.text-gradient {
  background: linear-gradient(136.91deg, #468ef9 -12.5%, #f69034 107.5%);
}
.text-gradient {
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.slide-enter-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}

.slide-leave-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to,
.slide-leave {
  max-height: 100px;
  overflow: hidden;
}

.slide-enter,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
}
</style>
