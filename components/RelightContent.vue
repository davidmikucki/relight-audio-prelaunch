<template>
    <section id="relight-info" class="bg-white py-16">
        <div class="max-w-6xl mx-auto px-6">

            <!-- Main Title -->
            <div 
                v-motion
                :initial="{ opacity: 0, y: 60 }"
                :visible-once="{ opacity: 1, y: 0, transition: { duration: 640, ease: 'easeOut' } }"
                class="text-center mb-16"
            >
                <h1 
                    v-motion
                    :initial="{ opacity: 0, y: 40, scale: 0.95 }"
                    :visible-once="{ opacity: 1, y: 0, scale: 1, transition: { delay: 160, duration: 640, ease: 'easeOut' } }"
                    class="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                >
                    Relight <span class="text-burgundy">Audio</span>
                </h1>
                <h2 
                    v-motion
                    :initial="{ opacity: 0, y: 30 }"
                    :visible-once="{ opacity: 1, y: 0, transition: { delay: 320, duration: 560, ease: 'easeOut' } }"
                    class="text-2xl md:text-3xl text-gray-700 mb-8"
                >
                    Using AI Voices to Read Reformed Classics
                </h2>
                <p 
                    v-motion
                    :initial="{ opacity: 0, y: 20 }"
                    :visible-once="{ opacity: 1, y: 0, transition: { delay: 480, duration: 480, ease: 'easeOut' } }"
                    class="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed text-left"
                >
                    We’re leveraging the power of AI text-to-speech to take classic reformed books, sermons,
                    confessions, and catechisms—and turn them into something you can listen to anywhere. You can even
                    <strong>read-along</strong> with each word being highlighted as it’s spoken. <a
                        href="#testDrive">See sample below</a>.
                </p>
            </div>

            <!-- How to Listen Section -->
            <div class="mb-20">
                <h2 
                    v-motion
                    :initial="{ opacity: 0, y: 40 }"
                    :visible-once="{ opacity: 1, y: 0, transition: { duration: 560, ease: 'easeOut' } }"
                    class="text-3xl font-bold text-gray-900 mb-12 text-center"
                >
                    How to Listen
                </h2>

                <!-- Three Cards Grid -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

                    <!-- Free App Card -->
                    <div 
                        v-motion
                        :initial="{ opacity: 0, y: 50, scale: 0.95 }"
                        :visible-once="{ opacity: 1, y: 0, scale: 1, transition: { delay: 80, duration: 480, ease: 'easeOut' } }"
                        class="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
                    >
                        <div 
                            v-motion
                            :initial="{ opacity: 0, scale: 0.8 }"
                            :visible-once="{ opacity: 1, scale: 1, transition: { delay: 240, duration: 400, ease: 'backOut' } }"
                            class="mb-6"
                        >
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
                    <div 
                        v-motion
                        :initial="{ opacity: 0, y: 50, scale: 0.95 }"
                        :visible-once="{ opacity: 1, y: 0, scale: 1, transition: { delay: 160, duration: 480, ease: 'easeOut' } }"
                        class="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
                    >
                        <div 
                            v-motion
                            :initial="{ opacity: 0, scale: 0.8 }"
                            :visible-once="{ opacity: 1, scale: 1, transition: { delay: 320, duration: 400, ease: 'backOut' } }"
                            class="mb-6"
                        >
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
                    <div 
                        v-motion
                        :initial="{ opacity: 0, y: 50, scale: 0.95 }"
                        :visible-once="{ opacity: 1, y: 0, scale: 1, transition: { delay: 240, duration: 480, ease: 'easeOut' } }"
                        class="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
                    >
                        <div 
                            v-motion
                            :initial="{ opacity: 0, scale: 0.8 }"
                            :visible-once="{ opacity: 1, scale: 1, transition: { delay: 400, duration: 400, ease: 'backOut' } }"
                            class="mb-6"
                        >
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
                <div class="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">

                    <!-- Left Side - Explanation -->
                    <div
                        v-motion
                        :initial="{ opacity: 0, x: -50 }"
                        :visible-once="{ opacity: 1, x: 0, transition: { duration: 560, ease: 'easeOut' } }"
                    >
                        <h3 
                            v-motion
                            :initial="{ opacity: 0, y: 30 }"
                            :visible-once="{ opacity: 1, y: 0, transition: { delay: 160, duration: 480, ease: 'easeOut' } }"
                            class="text-2xl font-bold text-gray-900 mb-6" id="testDrive"
                        >
                            Take a Short Test Drive
                        </h3>
                        <p 
                            v-motion
                            :initial="{ opacity: 0, y: 20 }"
                            :visible-once="{ opacity: 1, y: 0, transition: { delay: 320, duration: 480, ease: 'easeOut' } }"
                            class="text-lg text-gray-600 leading-relaxed"
                        >
                            The final interface isn't fully built yet, but you can see the basic principle here. We also
                            fully acknowledge this this isn't nearly as good as if we were to pay a professional to read
                            the resources. But we still think it's useful, and we're
                            planning to give this same basic treatment to (eventually) dozens, if not hundreds of reformed
                            resources.
                        </p>
                        <button 
                            v-motion
                            :initial="{ opacity: 0, scale: 0.9 }"
                            :visible-once="{ opacity: 1, scale: 1, transition: { delay: 480, duration: 400, ease: 'backOut' } }"
                            @click="openModal"
                            class="bg-[#701828] hover:bg-[#5a1320] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-base mt-4"
                        >
                            Get Notified
                        </button>
                    </div>

                    <!-- Right Side - Preview -->
                    <div 
                        v-motion
                        :initial="{ opacity: 0, x: 50, scale: 0.95 }"
                        :visible-once="{ opacity: 1, x: 0, scale: 1, transition: { delay: 240, duration: 560, ease: 'easeOut' } }"
                        class="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
                    >
                        <h4 
                            v-motion
                            :initial="{ opacity: 0, y: 20 }"
                            :visible-once="{ opacity: 1, y: 0, transition: { delay: 400, duration: 400, ease: 'easeOut' } }"
                            class="text-lg font-bold text-gray-900 mb-6"
                        >
                            Westminster Confession of Faith 21.1
                        </h4>

                        <!-- Text Content -->
                        <div 
                            v-motion
                            :initial="{ opacity: 0 }"
                            :visible-once="{ opacity: 1, transition: { delay: 560, duration: 480, ease: 'easeOut' } }"
                            class="text-gray-700 leading-relaxed freightTextPro"
                        >
                            <template v-for="(wordData, index) in timingData.words" :key="index">
                                <span :class="{ 'highlighted-word': currentWordIndex === index }">{{ wordData.word.trim() }}</span>{{ wordData.word.slice(wordData.word.trim().length) }}
                            </template>
                        </div>

                        <!-- Audio Controls -->
                        <div 
                            v-motion
                            :initial="{ opacity: 0, scale: 0.8 }"
                            :visible-once="{ opacity: 1, scale: 1, transition: { delay: 720, duration: 400, ease: 'backOut' } }"
                            class="mt-6 space-y-4"
                        >
                            <!-- Play Controls Row -->
                            <div class="flex justify-center items-center gap-4">
                                <!-- Seek Backward Button -->
                                <button 
                                    v-motion
                                    :initial="{ opacity: 0, x: -20 }"
                                    :visible-once="{ opacity: 1, x: 0, transition: { delay: 800, duration: 300, ease: 'easeOut' } }"
                                    @click="seekBackward"
                                    class="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-md"
                                >
                                    <img src="/Images/seekBackwardFive.svg" alt="Seek backward 5s" class="w-5 h-5" />
                                </button>

                                <!-- Play/Pause Button -->
                                <button 
                                    v-motion
                                    :initial="{ opacity: 0, scale: 0.8 }"
                                    :visible-once="{ opacity: 1, scale: 1, transition: { delay: 840, duration: 300, ease: 'backOut' } }"
                                    @click="togglePlay"
                                    class="bg-burgundy hover:bg-burgundy-dark text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg"
                                >
                                    <img v-if="!isPlaying" src="/Images/play.svg" alt="Play" class="w-6 h-6 filter brightness-0 invert" />
                                    <img v-else src="/Images/pause.svg" alt="Pause" class="w-6 h-6 filter brightness-0 invert" />
                                </button>

                                <!-- Seek Forward Button -->
                                <button 
                                    v-motion
                                    :initial="{ opacity: 0, x: 20 }"
                                    :visible-once="{ opacity: 1, x: 0, transition: { delay: 880, duration: 300, ease: 'easeOut' } }"
                                    @click="seekForward"
                                    class="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-md"
                                >
                                    <img src="/Images/seekForwardFive.svg" alt="Seek forward 5s" class="w-5 h-5" />
                                </button>
                            </div>

                            <!-- Speed Control -->
                            <div 
                                v-motion
                                :initial="{ opacity: 0, y: 20 }"
                                :visible-once="{ opacity: 1, y: 0, transition: { delay: 920, duration: 400, ease: 'easeOut' } }"
                                class="flex items-center justify-center gap-3"
                            >
                                <span class="text-sm text-gray-600 font-medium">Speed:</span>
                                <div class="flex items-center gap-2">
                                    <span class="text-xs text-gray-500">0.5x</span>
                                    <input 
                                        v-model="playbackSpeed"
                                        @input="updatePlaybackSpeed"
                                        type="range" 
                                        min="0.5" 
                                        max="2" 
                                        step="0.25"
                                        class="speed-slider w-24 h-2 rounded-lg appearance-none cursor-pointer transition-colors duration-200"
                                    />
                                    <span class="text-xs text-gray-500">2x</span>
                                </div>
                                <span class="text-sm text-burgundy font-semibold min-w-[3rem]">{{ playbackSpeed }}x</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <!-- Support Section -->
            <div 
                v-motion
                :initial="{ opacity: 0, y: 60, scale: 0.95 }"
                :visible-once="{ opacity: 1, y: 0, scale: 1, transition: { duration: 640, ease: 'easeOut' } }"
                class="text-center bg-gray-50 rounded-xl p-12 hover:shadow-lg transition-shadow duration-300"
            >
                <h2 
                    v-motion
                    :initial="{ opacity: 0, y: 30 }"
                    :visible-once="{ opacity: 1, y: 0, transition: { delay: 160, duration: 480, ease: 'easeOut' } }"
                    class="text-3xl font-bold text-gray-900 mb-6"
                >
                    Support the Development of This Project
                </h2>
                <p 
                    v-motion
                    :initial="{ opacity: 0, y: 20 }"
                    :visible-once="{ opacity: 1, y: 0, transition: { delay: 320, duration: 480, ease: 'easeOut' } }"
                    class="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
                >
                    If you're as eager to see this project get off the ground as we are, you can volunteer to help
                    support its development ahead of time through the link below. We appreciate anything you can give,
                    even if it's just a dollar.
                </p>
                <a 
                    v-motion
                    :initial="{ opacity: 0, scale: 0.9 }"
                    :visible-once="{ opacity: 1, scale: 1, transition: { delay: 480, duration: 400, ease: 'backOut' } }"
                    href="https://relight.app/support-us#waysToSupportArticle" target="_blank" rel="noopener noreferrer"
                    class="inline-block bg-burgundy hover:bg-burgundy-dark text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 hover:scale-105 text-lg"
                >
                    Support Relight
                </a>
            </div>

            <!-- Footer Section -->
            <div 
                v-motion
                :initial="{ opacity: 0, y: 40 }"
                :visible-once="{ opacity: 1, y: 0, transition: { delay: 200, duration: 560, ease: 'easeOut' } }"
                class="mt-20 pt-12 border-t border-gray-200 text-center"
            >
                <h2 
                    v-motion
                    :initial="{ opacity: 0, y: 20 }"
                    :visible-once="{ opacity: 1, y: 0, transition: { delay: 360, duration: 480, ease: 'easeOut' } }"
                    class="text-2xl font-bold text-gray-900 mb-4"
                >
                    Made By the Creators of Relight
                </h2>
                <p 
                    v-motion
                    :initial="{ opacity: 0, y: 15 }"
                    :visible-once="{ opacity: 1, y: 0, transition: { delay: 520, duration: 480, ease: 'easeOut' } }"
                    class="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
                >
                    We're same husband and wife team that make the 
                    <a href="https://relight.app" target="_blank" rel="noopener noreferrer" class="text-burgundy hover:underline font-medium">Relight study app</a>. 
                    If Relight Audio interests you, you might want to 
                    <a href="https://www.youtube.com/watch?v=Y2N-vh1Bh0I" target="_blank" rel="noopener noreferrer" class="text-burgundy hover:underline font-medium">learn more about that project.</a>
                </p>
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
const playbackSpeed = ref(1)
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

const seekBackward = () => {
    if (!audio.value) return
    audio.value.currentTime = Math.max(0, audio.value.currentTime - 5)
}

const seekForward = () => {
    if (!audio.value) return
    audio.value.currentTime = Math.min(audio.value.duration || 0, audio.value.currentTime + 5)
}

const updatePlaybackSpeed = () => {
    if (!audio.value) return
    audio.value.playbackRate = playbackSpeed.value
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

/* Speed Slider Styling */
.speed-slider {
    -webkit-appearance: none;
    appearance: none;
    background: #6b7280;
    height: 8px;
    border-radius: 4px;
    border: 1px solid #374151;
    cursor: pointer;
}

.speed-slider::-webkit-slider-track {
    background: #6b7280;
    height: 8px;
    border-radius: 4px;
    border: 1px solid #374151;
}

.speed-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #701828;
    cursor: pointer;
    border: 2px solid white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease;
}

.speed-slider::-webkit-slider-thumb:hover {
    background: #5a1320;
    transform: scale(1.1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.speed-slider::-moz-range-track {
    background: #6b7280;
    height: 8px;
    border-radius: 4px;
    border: 1px solid #374151;
}

.speed-slider::-moz-range-thumb {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #701828;
    cursor: pointer;
    border: 2px solid white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease;
}

.speed-slider::-moz-range-thumb:hover {
    background: #5a1320;
    transform: scale(1.1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
