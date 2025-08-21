<template>
  <div 
    v-motion
    :initial="{ opacity: 0 }"
    :enter="{ opacity: 1, transition: { duration: 480, ease: 'easeOut' } }"
    class="bg-white"
  >
    <NuxtRouteAnnouncer />
    
    <!-- Hero Section -->
    <main 
      class="hero relative flex items-center justify-center min-h-screen"
      :style="{ 
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center 90%'
      }"
    >
      <div class="text-center px-6 max-w-4xl mx-auto">
        <div class="mb-8">
          <h1 class="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            <span
              v-motion
              :initial="{ opacity: 0, y: 60, scale: 0.9 }"
              :enter="{ opacity: 1, y: 0, scale: 1, transition: { delay: 160, duration: 800, ease: 'easeOut' } }"
              class="inline-block"
            >
              Relight
            </span>
            <span>&nbsp;</span>
            <span
              v-motion
              :initial="{ opacity: 0, y: 60, scale: 0.9 }"
              :enter="{ opacity: 1, y: 0, scale: 1, transition: { delay: 400, duration: 800, ease: 'easeOut' } }"
              class="inline-block"
            >
              Audio
            </span>
          </h1>
          <p 
            v-motion
            :initial="{ opacity: 0, y: 40 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 480, duration: 640, ease: 'easeOut' } }"
            class="text-xl md:text-2xl text-white mb-8 leading-relaxed max-w-3xl mx-auto"
          >
            Listen to reformed audiobooks, sermons, confessions, and catechisms.
          </p>
        </div>

        <div
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 800, duration: 640, ease: 'easeOut' } }"
          class="flex flex-col sm:flex-row gap-6 justify-center items-center mt-10"
        >
          <button
            v-motion
            :initial="{ opacity: 0, scale: 0.9 }"
            :enter="{ opacity: 1, scale: 1, transition: { delay: 960, duration: 480, ease: 'backOut' } }"
            @click="openModal"
            class="bg-[#701828] hover:bg-[#5a1320] text-white font-semibold py-4 px-12 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 text-lg"
          >
            Get Notified
          </button>
          <a 
            v-motion
            :initial="{ opacity: 0, scale: 0.9 }"
            :enter="{ opacity: 1, scale: 1, transition: { delay: 1120, duration: 480, ease: 'backOut' } }"
            href="#relight-info" 
            class="border-2 border-white text-white hover:bg-white hover:text-black font-semibold py-4 px-12 rounded-xl transition-all duration-300 hover:scale-105 text-lg"
          >
            Learn More
          </a>
        </div>

      </div>
    </main>

    <!-- Content Section -->
    <RelightContent @openModal="openModal" />

    <!-- Email Signup Modal -->
    <TransitionRoot appear :show="isModalOpen" as="template">
      <Dialog as="div" @close="closeModal" class="relative z-50">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black/75" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div class="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all">
                <DialogTitle as="h3" class="text-2xl font-bold leading-6 text-gray-900 mb-2">
                  Get Notified When We Launch
                </DialogTitle>
                <DialogDescription class="text-gray-600 mb-6">
                  We’ll email you when Relight Audio launches, as well as about other developments related to Relight (we typically email less than once-a-month).
                </DialogDescription>

                <form 
                  action="https://gmail.us3.list-manage.com/subscribe/post?u=6e48fc50c7b871d3112c8f947&amp;id=b7a94c2e8a" 
                  method="post" 
                  id="mc-embedded-subscribe-form" 
                  name="mc-embedded-subscribe-form" 
                  target="_blank" 
                  novalidate 
                  class="validate"
                  @submit="handleSubmit"
                >
                  <div id="mc_embed_signup_scroll" class="space-y-4">
                    <div class="mc-field-group">
                      <label for="mce-EMAIL" class="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input 
                        type="email" 
                        placeholder="your@email.com" 
                        name="EMAIL" 
                        id="mce-EMAIL" 
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#701828] focus:border-transparent transition-all duration-200"
                        required
                        v-model="email"
                      />
                    </div>
                    
                    <div id="mce-responses" style="display: none;">
                      <div id="mce-error-response" class="response" style="display: none;"></div>
                      <div id="mce-success-response" class="response" style="display: none;"></div>
                    </div>
                    
                    <div aria-hidden="true" style="position: absolute; left: -5000px;">
                      <input type="text" name="b_6e48fc50c7b871d3112c8f947_b7a94c2e8a" tabindex="-1" value="">
                    </div>
                    
                    <div class="flex gap-3 pt-4">
                      <button
                        type="submit"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                        class="flex-1 bg-[#701828] hover:bg-[#5a1320] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                        :disabled="!isValidEmail"
                        :class="{ 'opacity-50 cursor-not-allowed': !isValidEmail }"
                      >
                        Subscribe
                      </button>
                      <button
                        type="button"
                        class="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300"
                        @click="closeModal"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>

                <div class="mt-6 text-xs text-gray-500 text-center">
                  By subscribing, you agree to receive updates about Relight.
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Dialog, DialogPanel, DialogTitle, DialogDescription, TransitionRoot, TransitionChild } from '@headlessui/vue'
import RelightContent from '../components/RelightContent.vue'

// Modal state
const isModalOpen = ref(false)
const email = ref('')

// Email validation
const isValidEmail = computed(() => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email.value)
})

// Modal functions
const openModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  email.value = ''
}

// Form submission
const handleSubmit = (event: Event) => {
  if (!isValidEmail.value) {
    event.preventDefault()
    return
  }
  
  // Let the form submit naturally to Mailchimp
  setTimeout(() => {
    closeModal()
    // Show success message or redirect
  }, 100)
}

// Head management for better SEO and fonts
useHead({
  title: 'Relight Audio - Reformed Audiobooks & Sermons',
  meta: [
    { name: 'description', content: 'A tool for listening to reformed books, sermons, confessions, and catechisms.' },
    { name: 'keywords', content: 'reformed theology, audiobooks, sermons, confessions, catechisms, Westminster, Christian audio' },
    { name: 'author', content: 'Relight' },
    
    // Open Graph / Facebook
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Relight Audio - Reformed Audiobooks & Sermons' },
    { property: 'og:description', content: 'A tool for listening to reformed books, sermons, confessions, and catechisms.' },
    { property: 'og:image', content: '/Images/metaImage.jpg' },
    { property: 'og:url', content: 'https://relight-audio.com' },
    { property: 'og:site_name', content: 'Relight Audio' },
    
    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Relight Audio - Reformed Audiobooks & Sermons' },
    { name: 'twitter:description', content: 'A tool for listening to reformed books, sermons, confessions, and catechisms.' },
    { name: 'twitter:image', content: '/Images/metaImage.jpg' },
    
    // Additional SEO
    { name: 'robots', content: 'index, follow' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'stylesheet', href: 'https://use.typekit.net/eot2ome.css' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
    { rel: 'canonical', href: 'https://relight-audio.com' },
    { rel: 'icon', type: 'image/png', href: '/images/favicon.png' }
  ]
})
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    font-family: 'canada-type-gibson', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: 18px;
    scroll-behavior: smooth;
  }
}

@layer components {
  .btn-primary {
    @apply bg-[#701828] hover:bg-[#5a1320] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5;
  }
  
  .btn-secondary {
    @apply border-2 border-[#701828] text-[#701828] hover:bg-[#701828] hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300;
  }
}

/* Hero background images (desktop vs mobile) */
.hero {
  background-image: url('/Images/relightAudioBackground.jpg');
}

@media (max-width: 640px) {
  .hero {
    background-image: url('/Images/relightAudioBackgroundMobile.jpg');
  }
}
</style>
