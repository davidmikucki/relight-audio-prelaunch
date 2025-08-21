<template>
    <section id="relight-info" class="bg-white py-16">
        <div class="max-w-6xl mx-auto px-6">

            <!-- Main Title -->
            <div class="text-center mb-16">
                <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Relight <span class="text-burgundy">Audio</span>
                </h1>
                <h2 class="text-2xl md:text-3xl text-gray-700 mb-8">
                    Using AI Voices to Read Reformed Classics
                </h2>
                <p class="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed text-left">
                    We’re leveraging the power of AI text-to-speech to take classic reformed books, sermons,
                    confessions, and catechisms—and turn them into something you can listen to anywhere. You can even
                    <strong>read-along</strong> with each word being highlighted as it’s spoken. <a
                        href="#testDrive">See sample below</a>.
                </p>
            </div>

            <!-- How to Listen Section -->
            <div class="mb-20">
                <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">
                    How to Listen
                </h2>

                <!-- Three Cards Grid -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <!-- Free App Card -->
                    <div class="bg-gray-50 rounded-xl p-8 text-center">
                        <div class="mb-6">
                            <div class="w-16 h-16 bg-burgundy rounded-full flex items-center justify-center mx-auto">
                                <span class="material-icons text-white text-3xl">smartphone</span>
                            </div>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-4">
                            Through the App for Free
                        </h3>
                        <p class="text-gray-600 leading-relaxed text-left">
                            We’re making an app that will support iOS and Android (possibly only iOS at launch, since we
                            don’t currently have an Android testing device). You’ll be able to listen to 15 hours of
                            content for free.
                        </p>
                    </div>

                    <!-- Library Card -->
                    <div class="bg-gray-50 rounded-xl p-8 text-center">
                        <div class="mb-6">
                            <div class="w-16 h-16 bg-burgundy rounded-full flex items-center justify-center mx-auto">
                                <span class="material-icons text-white text-3xl">local_library</span>
                            </div>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-4">
                            Through Hoopla and Libby
                        </h3>
                        <p class="text-gray-600 leading-relaxed text-left">
                            Having fun will be even less hard if you’ve got a library card. Through your local library,
                            you’ll be able to access many (if not all) of our titles for free using the Hoopla or Libby
                            app.
                        </p>
                    </div>

                    <!-- Paid Subscription -->
                    <div class="bg-gray-50 rounded-xl p-8 text-center">
                        <div class="mb-6">
                            <div class="w-16 h-16 bg-burgundy rounded-full flex items-center justify-center mx-auto">
                                <span class="material-icons text-white text-3xl">credit_card</span>
                            </div>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-4">
                            Unlimited for $5 Monthly
                        </h3>
                        <p class="text-gray-600 leading-relaxed text-left">
                            It costs money to host the audio files, so for unlimited access to all resources, we ask
                            that you pay us $5 per month. Extra funds will help support the production of
                            more resources like Relight and Relight Audio titles and features.
                        </p>
                    </div>

                </div>
            </div>

            <!-- Test Drive Section -->
            <div class="mb-20">
                <div class="grid lg:grid-cols-2 gap-12 items-start">

                    <!-- Left Side - Explanation -->
                    <div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-6" id="testDrive">
                            Take a Short Test Drive
                        </h3>
                        <p class="text-lg text-gray-600 leading-relaxed">
                            The final interface isn’t fully built yet, but you can see the basic principle here. We also
                            fully acknowledge this this isn’t nearly as good as if we were to pay a professional to read
                            the resources. But we still think it’s useful, and we’re
                            planning to give this same basic treatment to (eventually) dozens, if not hundreds of reformed
                            resources.
                        </p>
                        <button @click="openModal"
                            class="bg-[#701828] hover:bg-[#5a1320] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-base mt-4">
                            Get Notified
                        </button>
                    </div>

                    <!-- Right Side - Preview -->
                    <div class="bg-gray-50 rounded-xl p-8">
                        <h4 class="text-lg font-bold text-gray-900 mb-6">
                            Westminster Confession of Faith Chapter 21, Article 1
                        </h4>

                        <!-- Text Content -->
                        <div class="text-gray-700 leading-relaxed freightTextPro">
                            <template v-for="(wordData, index) in timingData.words" :key="index">
                                <span :class="{ 'highlighted-word': currentWordIndex === index }">{{ wordData.word.trim() }}</span>{{ wordData.word.slice(wordData.word.trim().length) }}
                            </template>
                        </div>

                        <!-- Play Button -->
                        <div class="mt-6 flex justify-center">
                            <button @click="togglePlay"
                                class="bg-burgundy hover:bg-burgundy-dark text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors duration-200">
                                <img v-if="!isPlaying" src="/Images/play.svg" alt="Play" class="w-6 h-6 filter brightness-0 invert" />
                                <img v-else src="/Images/pause.svg" alt="Pause" class="w-6 h-6 filter brightness-0 invert" />
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            <!-- Support Section -->
            <div class="text-center bg-gray-50 rounded-xl p-12">
                <h2 class="text-3xl font-bold text-gray-900 mb-6">
                    Support the Development of This Project
                </h2>
                <p class="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                    If you’re as eager to see this project get off the ground as we are, you can volunteer to help
                    support its development ahead of time through the link below. We appreciate anything you can give,
                    even if it’s just a dollar.
                </p>
                <a href="https://relight.app/support-us#waysToSupportArticle" target="_blank" rel="noopener noreferrer"
                    class="inline-block bg-burgundy hover:bg-burgundy-dark text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg">
                    Support Relight
                </a>
            </div>

        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Define emits
const emit = defineEmits(['openModal'])

// Audio and timing data
const isPlaying = ref(false)
const currentWordIndex = ref(-1)
const audio = ref<HTMLAudioElement | null>(null)
const timingData = ref<any>({})
let animationFrame: number | null = null

// Load timing data
onMounted(async () => {
    try {
        const response = await fetch('/wcf-21-1.json')
        timingData.value = await response.json()
    } catch (error) {
        console.error('Failed to load timing data:', error)
    }

    // Initialize audio
    audio.value = new Audio('https://mock-relight-audio.us-lax-1.linodeobjects.com/wcf-21-1.mp3')
    audio.value.addEventListener('ended', () => {
        isPlaying.value = false
        currentWordIndex.value = -1
        if (animationFrame) {
            cancelAnimationFrame(animationFrame)
            animationFrame = null
        }
    })
})

onUnmounted(() => {
    if (animationFrame) {
        cancelAnimationFrame(animationFrame)
    }
    if (audio.value) {
        audio.value.pause()
        audio.value = null
    }
})

// Update word highlighting based on audio time
const updateWordHighlight = () => {
    if (!audio.value || !timingData.value.words) return

    const currentTime = audio.value.currentTime * 1000 // Convert to milliseconds

    // Find the current word based on timing
    let wordIndex = -1
    for (let i = 0; i < timingData.value.words.length; i++) {
        const word = timingData.value.words[i]
        if (currentTime >= word.startMs && currentTime <= word.endMs) {
            wordIndex = i
            break
        }
    }

    currentWordIndex.value = wordIndex

    if (isPlaying.value) {
        animationFrame = requestAnimationFrame(updateWordHighlight)
    }
}

const togglePlay = () => {
    if (!audio.value) return

    if (isPlaying.value) {
        // Pause
        isPlaying.value = false
        audio.value.pause()
        if (animationFrame) {
            cancelAnimationFrame(animationFrame)
            animationFrame = null
        }
    } else {
        // Play
        isPlaying.value = true
        audio.value.play()
        updateWordHighlight()
    }
}

const openModal = () => {
    emit('openModal')
}
</script>

<style scoped>
.text-burgundy {
    color: #701828;
}

.bg-burgundy {
    background-color: #701828;
}

.bg-burgundy-dark {
    background-color: #5a1320;
}

.hover\:bg-burgundy-dark:hover {
    background-color: #5a1320;
}

.freightTextPro {
    font-family: freight-text-pro, serif;
    font-size: 1.3rem;
    line-height: 1.65;
}

.highlighted-word {
    background-color: #fef08a;
    transform: scale(1.06);
    transition: all 0.2s ease;
    display: inline-block;
}
</style>
