<template>
    <Header />

    <main class="bg-gradient-to-t bg-[#020c2d] min-h-[100vh]">
        <transition enter-active-class="ease-out duration-200" enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-200" leave-active-class="ease-in duration-250"
            leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95" appear>
            <div class="h-full">
                <slot />
            </div>
        </transition>

    </main>

    <!-- <Footer class="px-10 pt-10" /> -->
</template>
