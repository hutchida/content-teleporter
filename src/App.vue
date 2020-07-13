<template>
  <div class="home">
    <div class="container">
      <h5>Content Teleporting Database</h5>
      <snippets />
    </div>
  </div>
</template>

<script>
import snippets from "./components/snippets";

export default {
  name: "App",

  components: {
    snippets
  },
          
   filters: {
      trunc(str, len = 87) {
        _.trim(str);
        return _.truncate(str, {'length': len});
      },
    },

  data: () => ({
    title: "Content Teleporting"
  })
}
;
</script>
