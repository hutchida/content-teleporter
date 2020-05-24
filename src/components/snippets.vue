<template>
  <div>
    <v-data-table
      light
      dense
      :headers="headers"
      :items="data"
      :item-key="id"
      class="elevation-1"
      :search="search"
    >
      <template v-slot:body.prepend>
        <tr>
          <td>
            <v-text-field v-model="PA" type="text" label="Search..."></v-text-field>
          </td>
          <td>
            <v-text-field v-model="id" type="text" label></v-text-field>
          </td>
        </tr>
      </template>
      <template v-slot:item.xml="{ item }">
        {{item.xml}}
        <br />
        <br />
        <button
          class="btn-secondary btn-sm btn-block"
          v-clipboard:copy="item.xml"
          v-clipboard:success="onCopy"
          v-clipboard:error="onError"
        >Copy to clipboard</button>
      </template>
      <template v-slot:item.html="{ item }">
        <span v-html="item.html"></span>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import listOfSnippets from "./data/snippetsData.js";
console.log(listOfSnippets);
console.log(status);
export default {
  data: function() {
    return {
      copySucceeded: true,
      search: "",
      id: "",
      PA: "",
      xml: "",
      html: "",
      data: listOfSnippets
    };
  },
  methods: {
    onCopy: function() {
      alert("Copied successfully! Now go paste into your document...");
    },
    onError: function() {
      alert("Failed to copy, select text manually and do Ctrl + C");
    }
  },
  computed: {
    headers() {
      return [
        {
          align: top,
          text: "PA",
          value: "PA",
          filter: f => {
            return (f + "").toLowerCase().includes(this["PA"].toLowerCase());
          }
        },
        {
          text: "Content ID",
          value: "id",
          filter: f => {
            return (f + "").toLowerCase().includes(this["id"].toLowerCase());
          }
        },
        {
          text: "XML",
          value: "xml",
          filter: f => {
            return (f + "").toLowerCase().includes(this["xml"].toLowerCase());
          }
        },
        {
          text: "HTML",
          value: "html",
          filter: f => {
            return (f + "").toLowerCase().includes(this["html"].toLowerCase());
          }
        }
      ];
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only --><style >
td,
span {
  word-wrap: break-word;
  vertical-align: top;
  padding: 10px;
  font-size: small;
}
.small {
  max-width: 160px;
}
</style>