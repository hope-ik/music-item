<template>
  <div class="Recommendation">
    <content-g></content-g>
  </div>
</template>
<script>
import ContentG from "../../components/childRecomContent/Content";
export default {
  components: {
    ContentG,
  },
};
</script>
<style lang="less" scoped>
.Recommendation {
  width: 100%;
  height: 100%;
  position: relative;
  top: 20px;
}
</style>