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
      :disable-sort="true"
      mobile-breakpoint="0"
    >
      <template v-slot:body.prepend>
        <tr>
          <td>
            <v-text-field v-model="PA" type="text" label="Enter PA..."></v-text-field>
          </td>
          <!--<td>
            <b-dropdown
              split
              split-variant="outline-primary"
              variant="primary"
              text="Select practice area"
              class="m-2"
            >
              <b-dropdown-item v-for="pa in PAs" v-bind:key="pa"  v-model="PA" href="#">{{ pa }}</b-dropdown-item>
            </b-dropdown>
          </td>
          
          <td>
            <v-text-field v-model="id" type="text" label></v-text-field>
          </td>-->
        </tr>
      </template>
      
      <template v-slot:item.html="{ item }">
        <td>
          
        <br />
          <button
          class="btn-secondary btn-sm btn-block"
          v-clipboard:copy="item.xml"
          v-clipboard:success="onCopy"
          v-clipboard:error="onError"
        >Copy to clipboard</button>
        <br />
        <h5>{{item.PA}}</h5>
          <span v-html="item.html"></span>
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import listOfSnippets from "./data/snippetsData.js";
const practiceAreas = [
  "ARBITRATION",
  "BANKINGANDFINANCE",
  "COMMERCIAL",
  "COMPETITION",
  "CONSTRUCTION",
  "CORPORATE",
  "CORPORATECRIME",
  "DISPUTERESOLUTION",
  "EMPLOYMENT",
  "ENERGY",
  "ENVIRONMENT",
  "FAMILYLAW",
  "FINANCIALSERVICES",
  "IPANDIT",
  "IMMIGRATION",
  "INHOUSE",
  "INFORMATIONLAW",
  "INSURANCEANDREINSURANCE",
  "LIFESCIENCES",
  "LOCALGOVERNMENT",
  "PENSIONS",
  "PERSONALINJURY",
  "PLANNING",
  "PRACTICECOMPLIANCE",
  "PRACTICEMANAGEMENT",
  "PRIVATECLIENT",
  "PROPERTY",
  "PROPERTYDISPUTES",
  "PUBLICLAW",
  "RESTRUCTURINGANDINSOLVENCY",
  "RISKANDCOMPLIANCE",
  "SHARESCHEMES",
  "TMT",
  "TAXLAW",
  "WILLSANDPROBATE"
];
export default {
  data: function() {
    return {
      copySucceeded: true,
      search: "",
      id: "",
      PA: "",
      xml: "",
      html: "",
      data: listOfSnippets,
      PAs: practiceAreas
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
td {margin: 0px;padding: 0px;}

span {
  word-wrap: break-word;
  vertical-align: top;
  padding: 0px;
  font-size: small;margin: 0px;
}
.small {
  max-width: 160px;
}
.main_heading {
  font-size: 24px;
  font-weight: bold;
  font-family: Arial;
  margin: 0 0 6px 0;
}

p {
  font-family: Arial;
  margin: 0 0 0 0;
  font-size: 10px;
}
li {
  font-family: Arial;
  font-size: 10px;
}

.draftingnotesection {
  margin: 8px 0 0 8px;
  border: 4px solid orange;
  color: orange;
}

.draftingnotesection h3 {
  font-size: 12px;
  font-weight: bold;
  font-family: Arial;
  margin: 0 0 0 0;
  color: white;
  background-color: orange;
}

.draftingnotesection h4 {
  font-size: 16px;
  font-weight: bold;
  font-family: Arial;
  margin: 8px 0 0 8px;
}

.draftingnotesection p {
  margin: 8px 16px;
}
</style>