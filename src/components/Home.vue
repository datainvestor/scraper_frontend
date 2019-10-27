<template>
    <div>
        <header class="header">
        <nav class="navbar navbar-dark bg-dark">
            <ul class="header__navbar">
            <li class="header__item"> 
            <button class="btn btn-outline-success pull-left" type="button" style="text-align: center">Main button</button>
            <a href="#" class="header__link">
                <transition name="slide-fade">
                <!-- Header Navigation Menu Icons -->
                <button class="header--button" v-if="show" key="on" @click="show = false">
                    <svg viewBox="0 0 24 24" class="header--icon">
                    <title>Close</title>
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path fill="currentColor" d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" />
                    </svg>
                </button>
                <button class="header--button" v-else key="off" @click="show = true">
                    <svg viewBox="0 0 24 24" class="header--icon">
                    <title>Navigation Menu</title>
                    <path fill="currentColor" d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z" />
                    </svg>
                </button>
                </transition>
            </a>
            <transition name="dropdown">
                <div class="dropdown__menu" v-bind:class="{ active: show }" v-if="show">
                <ul class="dropdown__menu-nav">
                    <picked-list v-for="pick in picked" :pick="pick" :key="pick"></picked-list>
                </ul>
                </div>
            </transition>
            </li>
            </ul>
        </nav>
    </header>

    <search @search="changeMovieResults"></search>
    <movie-list :movies="movies" @movieSelected="movieSelected"></movie-list>
    </div>
</template>

<script>
import Search from './Search'
import MovieList from './MovieList'
import PickedList from "./PickedList"

export default {
    name: 'home',
     components: {
    Search,
    MovieList,
    PickedList
  },
  data () {
    return {
      show:false,
      movies: [],
      picked:["Avengers", "Star Wars", "Pokemon"]
    }
  },
  methods: {
    changeMovieResults (results) {
      this.movies = results
    },
    movieSelected(imdbID) {
      this.picked.push(imdbID);
      console.log(this.picked)
    }
  }
}
</script>



<style lang="scss" scoped>
    .btn-outline-success {
        margin-right: 50px;
        margin-bottom: 20px;
    }

    .header {
    padding: 2rem 5rem 2rem 5rem;
    &__nav {
        position: relative;
    }
    &__navbar {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    &__item {
        padding: 1rem;
    }
    &--icon {
        width: 1.65rem;
        height: 1.65rem;
    }
    &--button {
        top: 0;
        right: 0;
        position: absolute;
        margin: 0;
        padding: 0;
        color: white;
        cursor: pointer;
        border: 1px solid transparent;
        background-color: transparent;
        &:focus {
        outline: 0;
        }
    }


        // Dropdown Menu

    .dropdown__menu {
        top: 100%;
        right: 0;
        position: absolute;
        z-index: 10;
        height: 25rem;
        min-width: 300px;
        margin-top: 1rem;
        overflow-y: auto;
        padding: 2rem 1rem 2rem 0rem;
        border-radius: 12px;
        background-color: white;
        border: 1px solid var(--color-gray);
        background-clip: padding-box;
        &-link {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        text-decoration: none;
        color: rgba(0, 0, 0, 0.6);
        padding: 0.8rem 0 0.8rem 2rem;
        margin-top: 0.2rem;
        margin-bottom: 0.2rem;
        border-radius: 0 50px 50px 0;
        &:hover {
            color: #17bf63;
            background-color: rgba(79, 192, 141, 0.1);
        }
        }
        &-svg {
        width: 1.5rem;
        height: 1.5rem;
        }
        &-text {
        font-weight: 300;
        margin-left: 1rem;
        margin-right: 1rem;
        }
    }

    // Animation Menu Icon

    .slide-fade-enter-active,
    .slide-fade-leave-active {
        transition: all 0.6s;
    }
    .slide-fade-enter,
    .slide-fade-leave-active {
        opacity: 0;
    }
    .slide-fade-enter {
        transform: translateX(31px);
    }
    .slide-fade-leave-active {
        transform: translateX(-31px);
    }

    // Dropdown Menu Animation

    .dropdown-enter-active,
    .dropdown-leave-active {
        transition: all 1s;
    }
    .dropdown-enter,
    .dropdown-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }
    }
</style>
