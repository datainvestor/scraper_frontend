<template>
    <li class="dropdown__menu-item">
      <a href="#" class="dropdown__menu-link" title="Account">
        <div class="dropdown__menu-svg">
        </div>
        <div class="dropdown__menu-text">{{pick}}</div>
      </a>
    </li>
</template>

<script>
    export default {
        name: "PickedList.vue",
        props: {
            pick: {
              type: Object,
              required: true
            }
        },
    }
</script>

<style scoped>
    .dropdown__menu-link {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        text-decoration: none;
        color: rgba(0, 0, 0, 0.6);
        padding: 0.8rem 0 0.8rem 2rem;
        margin-top: 0.2rem;
        margin-bottom: 0.2rem;
        border-radius: 0 50px 50px 0;
      }
    .dropdown__menu-link:hover {
        color: #17bf63;
        background-color: rgba(79, 192, 141, 0.1);
    }
    .dropdown__menu-text {
        font-weight: 300;
        margin-left: 0rem;
        margin-right: 1rem;
    }
</style>