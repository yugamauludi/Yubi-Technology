<script>
    import { mapActions, mapState } from 'pinia';
    import { useAppStore } from '../stores/app';
    
    export default {
        computed: {
            ...mapState(useAppStore, ["detailMovie"])
        },
        methods: {
            ...mapActions(useAppStore, ['fetchDetailMovie'])
        },
        created(){
            const movieId = this.$route.params.id;
            this.fetchDetailMovie(movieId)
        }
    }

</script>

<template>
    <div
    class="h-screen w-screen grayscale-0"
    :style="{
        backgroundImage: 'url('+'https://image.tmdb.org/t/p/original/'+detailMovie.backdrop_path+')'
    }"
    >
        <div class="w-full h-full bg-gradient-to-r from-black to-transparent">
            <div class="pt-20 w-full h-full grid grid-cols-2 items-center">
                <img
                class="w-[400px] mx-auto rounded-lg"
                :src="'https://image.tmdb.org/t/p/original'+detailMovie.poster_path"
                />
                <div>
                    <h1 class="text-4xl font-semibold text-neutral-300 mb-4">{{ detailMovie.title }}</h1>
                    <p class="text-sm text-neutral-300 w-2/3">{{ detailMovie.overview }}</p>
                    <div class="flex flex-col text-sm text-neutral-300 gap-2 mt-3">
                        <div class="flex items-center gap-2">
                            <svg class="h-8 w-8 text-red-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="5" width="16" height="16" rx="2" />  <line x1="16" y1="3" x2="16" y2="7" />  <line x1="8" y1="3" x2="8" y2="7" />  <line x1="4" y1="11" x2="20" y2="11" />  <rect x="8" y="15" width="2" height="2" /></svg>
                            <span>{{ detailMovie.release_date }}</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <svg class="h-8 w-8 text-red-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" /></svg>
                            <span>{{ Math.round(detailMovie.vote_average) }}/10</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <svg class="h-8 w-8 text-red-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                            </svg>

                            <span>{{ detailMovie.popularity }} </span>
                        </div>
                        <div class="flex items-center gap-2">
                            <svg class="h-8 w-8 text-red-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <polyline points="12 7 12 12 15 15" /></svg>                            <span>{{ Math.round(detailMovie.runtime / 60) }}h / {{ detailMovie.runtime }} minutes</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <img
                            class="w-8"
                            :src="`https://countryflagsapi.com/png/${detailMovie.production_countries[0].iso_3166_1.toLowerCase()}`"
                            crossorigin="anonymous"
                            />
                            <span>{{ detailMovie.production_countries[0].iso_3166_1 }}</span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>