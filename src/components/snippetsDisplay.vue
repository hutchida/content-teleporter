<template>
  <div class="charts">
    <!--<h1>{{practiceArea}} snippets available</h1>-->
    <snippets :paProp="practiceArea"></snippets>
  </div>
</template>

<script>
import snippets from "@/components/snippets";
import info from "@/components/info";

export default {
  components: { snippets, info },

  data() {
    return {
      practiceArea: this.$route.params.pa,
      name: "piechart"
    };
  }
};
</script>

<style scoped>
</style>