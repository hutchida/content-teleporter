<template>
  <div class="container">
    <p>This list of snippets was last updated on: 13/05/20</p>
    <div class="table-responsive">
      <table class="table-bordered text-left table-striped table-hover display" v-if="data">
        <thead>
          <tr>
            <th>PA</th>
            <th>Content ID</th>
            <th>XML to Insert</th>
            <th>HTML Preview</th>
          </tr>
        </thead>
        <tbody>
          
          <tr v-for="item in this.data" v-bind:key="item.id">
            <td class="small">{{ item.PA }}</td>
            <td class="small">{{ item.id }}</td>
            <td class="small">
              {{ item.xml }}
              <br />
              <br />
              <button
                class="btn-secondary btn-sm btn-block"
                v-clipboard:copy="item.xml"
                v-clipboard:success="handleCopyStatus(true)"
                v-clipboard:error="handleCopyStatus(false)"
              >Copy to clipboard</button>
              
              <!-- <p v-if="copySucceeded === true">Copied!</p>
              <p v-if="copySucceeded === false">Press CTRL+C to copy.</p>-->
            </td>
            <td>
              <span v-html="item.html"></span>
            </td>
            <!-- and so on -->
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import listOfSnippets from './data/snippetsData.js'
console.log(listOfSnippets)
export default {
  data: function () {
    return {
      copySucceeded: null,
      data: listOfSnippets
      
    };
  },
  methods: {
    handleCopyStatus(status) {
      this.copySucceeded = status;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only --><style scoped>

td {
  word-wrap: break-word;
  vertical-align: top;
  padding: 10px;
}
.small {
  max-width: 160px;
}
</style>