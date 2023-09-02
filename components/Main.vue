<template>
    <div class=" text-white w-full h-[651px] flex ">
        <div class="w-1/2 bg-black h-1/2 rounded-lg mt-2">
            <div class="w-full h-8 bg-gray-600 rounded-t-lg flex items-center space-x-2 px-4">
                <div class="flex items-center space-x-2 w-1/2">
                    <div class="rounded-full bg-red-600 w-3 h-3"></div>
                    <div class="rounded-full bg-yellow-400 w-3 h-3"></div>
                    <div class="rounded-full bg-green-500 w-3 h-3"></div>
                </div>
                <div class="flex  w-full justify-start px-7 items-center">Aliakbar Boistov</div>
            </div>
            <div class="px-2">
                <h1>
                    <span v-html="typedText" />
                    <br>
                    <br>
                </h1>
                <!-- <div class=" font-small" v-html="typedTextWise" /> -->
            </div>
        </div>
        <div class="w-1/2 flex h-1/2 justify-end items-start mt-2">
            <div class="  h-90">
                <div class="circle">
                    <img src='../assets/images/face-photo.jpeg' alt=''>
                </div>

            </div>
        </div>
    </div>
</template>
<script setup>

import { ref, onMounted } from 'vue'
const currentIndex = ref(0)
const currentIndeX2 = ref(0)
const text = ref(`Salom aleykum everyone, Hey you know about full-stack Developer from tajikistan, that now work in Megafon-Tajikistan  I'm Aliakbar Bistov form Tajikistan,  `)
// const typeTextWise = ref(`
// <span>_%#/__________%#/%#/____________%#/__%#/______@@@@@@@@@x____________________________</span><br/>
// <span>__%#/_________%#/_%#/__________%#/___%#/_______@@_____@@@______________________________</span><br/>
// <span>___%#/_______%#/___%#/________%#/____%#/________@@_______________________________</span><br/>
// <span>____%#/_____%#/_____%#/______%#/_____%#/_________@@_____________________________</span><br/>
// <span>_____%#/____%#/______%#/____%#/______%#/__________@@_____________________________</span><br/>
// <span>______%#/__%#/________%#/__%#/_______%#/__++______@@______________________________</span><br/>
// <span>_______%#/%#/__________%#/%#/________%#/___@@%@@@_________________________________</span><br/>
// <span>_____%#/__________________________________________________________________________________</span><br/>
// <span>______%#/_________________________________________________________________________________</span><br/>
// <span>_______%#/________________________________________________________________________________</span><br/>
// <span>________%#/_______________________________________________________________________________</span><br/>
// <span>_________%#/______________________________________________________________________________</span><br/>
// <span>__________%#/_____________________________________________________________________________</span><br/>
// <span>___________%#/____________________________________________________________________________</span><br/>
// `)
const typedText = ref('');
const typedTextWise = ref('');

const typeText = () => {
    if (currentIndex.value < text.value.length) {

        typedText.value += text.value.charAt(currentIndex.value);
        currentIndex.value++;
        setTimeout(typeText, 100); // Change delay as needed
    }
}

// const typewiseFn = () => {
//     if (currentIndeX2.value < typeTextWise.value.length) {
//         typedTextWise.value += typeTextWise.value.charAt(currentIndeX2.value);
//         currentIndeX2.value++;
//         setTimeout(typewiseFn, 1); // Change delay as needed
//     }
// }

onMounted(() => {
    typeText()
    // typewiseFn()
})

</script>
<style>
.vue-typer .char.typed {
    color: white
}

.wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.circle {
    background: plum;
    width: 400px;
    height: 400px;
    border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
    overflow: hidden;
    animation: morph 3s linear infinite;
}

.circle img {
    width: 100%;
}


@keyframes morph {

    0%,
    100% {
        border-radius: 40% 60% 70% 30% / 40% 40% 60% 50%;
    }

    34% {
        border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%;
    }

    67% {
        border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%;
    }
}
</style>
