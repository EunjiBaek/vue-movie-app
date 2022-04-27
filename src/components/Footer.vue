<template>
  <footer>
    <Logo />
    <a
      href="https://github.com/ParkYoungWoon"
      target="_blank">
      (c){{ new Date().getFullYear() }} HEROPY
    </a>
  </footer>
</template>

<script>
import Logo from './Logo.vue';

export default {
    components: {
        Logo
    }
}
</script>

<style lang="scss" scoped>
footer {
    padding: 70px 0;
    text-align: center;
    opacity: .3;
    .logo {
        display: block;
        margin-block: 4px;
    }
}
</style>