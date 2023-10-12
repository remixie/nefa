<template>
  <div class="w-full">
    <!-- Hero section -->
    <section id="hero" class="w-full pb-24">
      <BaseSection>
        <div class="col-span-12 lg:col-span-6 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left">
          <h1
            data-aos="fade-right"
            data-aos-once="true"
            class="text-[2.5rem] sm:text-5xl text-white xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10"
          >
            The Open Demo is Underway!
          </h1>
          <p data-aos="fade-right" data-aos-once="true" data-aos-delay="300" class="text-white hidden sm:block">
            Play 13 different heroes with unique and action-packed abilities! Demo ends on October 16th.
          </p>
          <div
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-delay="700"
            class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2"
          >

          <div class="bg-black text-white p-4 font-serif">
          <b>BREAKING NEWS:</b> If you log in now and successfully complete at least one match, you will receive 2$ worth of game cash that can be used after the official service!
          <div class="text-xs mt-2">Source: <a href="https://discord.com/channels/1075652756754403358/1148173289114566748/1161646603510227014" class="text-[#fff] duration-300 transition-colors underline hover:text-orange-200">Discord Announcement</a></div>
        </div>
          </div>
        </div>
        <div class="hidden sm:block col-span-12 lg:col-span-6">
          <div class="w-full"
          data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="700">
            <img
              src="~/assets/img/hero.png"

            />
          </div>
        </div>

      </BaseSection>
    </section>

    

   
    <!-- FAQ section -->
    <section class="w-full">
      <BaseSection>
        <div data-aos="fade-right" data-aos-delay="150" class="col-span-12 lg:col-span-6">
          <div class="w-full">
            <img src="~/assets/img/Evelyn.png" class="max-h-[800px]" alt="" />
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="150" class="col-span-12 lg:col-span-6 px-4 sm:px-6 mt-8 text-white">

          <h2 class="text-3xl sm:text-4xl font-semibold mb-10 sm:mb-6 text-[#f6a234]">Frequently Asked Questions</h2>

          <ul class="shadow-box">
            <BaseAccordion v-for="(accordion, index) in accordions" :key="index" :accordion="accordion" />
          </ul>
        </div>
      </BaseSection>
    </section>

  </div>
</template>

<script>
import aosMixin from '@/mixins/aos'
export default {
  name: 'IndexPage',
  mixins: [aosMixin],
  data() {
    return {
      selected: 0,
      dropdownConcurency: false,
      accordions: [
        {
          title: 'What is Storm Striker?',
          description:
            "Storm Striker is a hyperactive 5v5 PvP third-person shooter with colorful hero characters, action-packed gameplay, and an emphasis on teamplay! Join the battlefield by choosing a hero that’s right for your playstyle!",
        },
        {
          title: 'Any ETA on a launch date?',
          description:
            "Not yet. The team working on getting it done as soon as possible with an ambitious goal of theirs to do it by end of this year.",
        },
        {
          title: 'What is the current meta?',
          description:
            "At least one tank or bruiser (Bernhard/Volf) to contest objectives while healers can be dual or solo.",
        },
        {
          title: 'What is the lore?',
          description:
            "It is still being worked on but for the most part, there are lots of good guys, an evildoer and an insane child.",
        },
        {
          title: 'What can I expect gameplay wise?',
          description:
            "Storm Striker has polished gameplay like Overwatch 2, AOE/CC similar to that of WoW or FFXIV, and the charm of memorable characters like Genshin Impact.",
        },
        {
          title: 'How is the dev team like?',
          description:
            "They are a younger group that's very responsive and passionate. On top of that, they enjoy playing Storm Striker themselves!",
        },
        {
          title: 'How is this game unique?',
          description:
            "It takes a lot of the great things about action-packed games and combines them together. Examples include rapid objective captures, ults that cancel each other out and there being a relatively-balanced counter for everything!",
        },
        {
          title: 'What are current queue times?',
          description:
            "Queue times can range between a few seconds to around 20 minutes at the moment depending on your MMR, region and time of day. The best time to play is late evenings EST.",
        },
        {
          title: 'Is matchmaking MMR collective or is it role based?',
          description:
            "It is collective. Expect to carry harder as you go up in MMR.",
        }
      ],
    }
  },
}
</script>
<style scoped>
.text-header-gradient {
  background: rgb(57, 132, 244);
  background: linear-gradient(169.4deg, #3984f4 -6.01%, #0cd3ff 36.87%, #2f7cf0 78.04%, #0e65e8 103.77%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.bg-partner {
  background: url('../assets/img/partner/background.png');
  background-size: cover;
  background-position: center;
}
.bg-trading-tools {
  background: url('../assets/img/bg-trading-tools.webp');
  background-size: cover;
  background-position: center;
}
.max-h-0 {
  max-height: 0;
}
</style>
