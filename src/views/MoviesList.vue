<script>
    import { mapActions, mapState } from 'pinia';
    import { useAppStore } from '../stores/app';
    import CardMovie from '../components/CardMovie.vue';
    export default {
        components: {
            CardMovie
        },
        computed: {
            ...mapState(useAppStore, ['movie'])
            // ...mapState(useAppStore, ['movie', 'genre', 'totalPages']),
            // ...mapWritableState(useAppStore, ['query'])
        },
        methods: {
            ...mapActions(useAppStore, ['fetchDataMovie']),
            
            // queryFilter(params, value){
            //     if (params === 'page'){
            //         this.query.page = value
            //     } if (params === 'filter'){
            //         this.query.filter = value
            //     }
            //     this.fetchDataMovie()
            // }
            
        },
        created() {
            this.fetchDataMovie()
            // this.fetchDataGenre()
        }
    }
</script>

<template>
    <div class="pt-20 pl-[240px] flex flex-col gap-y-12">
    <div class="flex ml-[400px]">
    <!-- <div class="mb-3 xl:w-96">
        <div class="input-group relative flex flex-wrap items-stretch w-full mb-4">
        <input v-model="query.search" type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon3">
        </div>
    </div> -->
        <!-- <div class="input-group relative flex flex-wrap items-stretch w-full mb-[27px] xl:w-96">
            <button class="btn inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" type="button" id="button-addon3" @click.prevent="fetchDataMovie">Search</button>
        </div> -->
    </div>
    <div class="p-2 mt-[-122px] ml-[200px]">
    <div class="dropdown inline-block relative">
    <!-- <button class="bg-gray-300 text-gray-700 font-semibold py-[7px] px-4 rounded inline-flex items-center">
        <span class="mr-7">Filter By Genre</span>
        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
    </button> -->
    <!-- <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
        <li v-for="item in genre" :key="item.id" class=""><a @click.prevent="queryFilter('filter', item.id)" class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="">{{ item.name }}</a></li>
    </ul> -->
    </div>
    </div>
    <div class="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
        <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" >
            <CardMovie v-for="item in movie.results" :key="item.id" :item="item" />
        </div>
    </div>
    <!-- <div class="pb-10 pl-[500px] flex flex-col gap-y-12">
        <ul class="inline-flex -space-x-px">
            <li v-for="item in +totalPages">
            <a @click.prevent="queryFilter('page', item)" href="" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{{item}}</a>
            </li>
        </ul>
    </div> -->

</div>
</template>

<style>
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>