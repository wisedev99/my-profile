<template>
    <div class=" text-white w-full h-[651px] flex">
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
                <Typer erase-style='backspace' :repeat='0' text='Hello World! I was registered globally!' />
            </div>
        </div>
        <div class="w-1/2">

        </div>
    </div>
</template>
<script setup>
// ES6
import { Typer } from 'vue3-typer'
import "vue3-typer/dist/vue-typer.css"
// Global
// const VueTypers = window.Vue3Typer.VueTyper
</script>
<style>
.vue-typer .char.typed {
    color: white
}
</style>
