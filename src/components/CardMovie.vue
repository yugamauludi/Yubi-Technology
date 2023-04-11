<script>
    export default {
        props: ['item']
    }
</script>

<template>
    <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
        <img class="object-cover w-full rounded-md h-full xl:h-80" :src="'https://image.tmdb.org/t/p/original/'+item.poster_path" alt="Movie's poster">
        <h4 class="mt-2 text-lg font-medium text-black-700 dark:text-black-200 h-[60px] items-center">{{ item.title }}</h4>
        <p class="text-blue-500">Rating : {{ item.vote_average }}</p>
        <button @click.prevent="handleAddFavourite(item.id)" class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
            <span class="mx-1">Favourite</span>
        </button>
        <button @click.prevent=" this.$router.push(`/movies/${item.id}`)" class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
            <span class="mx-1">Detail</span>
        </button>
    </div>

</template>