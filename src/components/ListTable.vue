<template>
 <div class="col-12">
    <b-table class="mt-4" :items="items" :fields="fields1">
    <template slot="Action" slot-scope="row">
      <b-button variant="primary" size="sm" class="mr-2">
        +1
      </b-button>
      <b-button  size="sm" class="mr-2">
        Delete
      </b-button>
    </template>
   <template slot="Action" slot-scope="row">
      <b-button variant="primary" size="sm" class="mr-2">
        +1
      </b-button>
      <b-button size="sm" class="mr-2">
        Delete
      </b-button>
    </template>
  </b-table>
 </div>
</template>


<script>
  import axios from 'axios'
export default {
  data() {
    return {
      fields1: [ 'age', 'name','comment', 'Action' ],
      items:()=>{
        axios.get('http://localhost:3000/employee/1').then(
        result => {
          console.log(result.data)
          this.items = result.data.data
        },
        error => {
          console.error(error)
        }
      )
      },
    };
  }
};
</script>

