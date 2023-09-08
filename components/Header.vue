<template>
    <nav
        class="bg-gradient-to-t to-blue-900 from-black  dark:bg-gray-900 fixed w-full z-20 top-0 left-0  dark:border-gray-600">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/" class="flex items-center text-white">
                <span class="self-center text-2xl uppercase font-semibold whitespace-nowrap dark:text-white">Wise Dev</span>
            </a>

            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                <ul
                    class="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li v-for="menu, i in menus" :key="i">
                        <a class="block py-2 pl-3 pr-4 text-white bg-green-700 rounded md:bg-transparent md:p-0"
                            aria-current="page">{{ menu.name }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script setup>

const menus = [
    {
        name: "About me",
        href: '/'
    },
    {
        name: "Knowledge",
        href: "about",
    },
    {
        name: "Projects",
        href: "service",
    },
    {
        name: "Contacts",
        href: "contacts",
    },
]
</script>
