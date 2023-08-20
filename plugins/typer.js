import { Typer } from 'vue3-typer'
import "vue3-typer/dist/vue-typer.css"


export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Typer, {});
});
