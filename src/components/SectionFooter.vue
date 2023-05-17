<template>
  <footer class="footer">
    <span class="span">{{$t('footer.span')}} </span>
  </footer>
</template>

<script>
export default {
  name: "SectionFooter",
}
</script>

<style>
  .footer{
    padding:2em 0;
    text-align: center;
    color:var(--blanco);
    position: relative;
    z-index: 2;
  }
</style>