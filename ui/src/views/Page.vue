<style></style>
<template></template>
<script>
import { mapState } from 'vuex';
import transactions from './Transactions';

export default {
  name: 'Page',
  data() {
      return {
          id: 0,
          name: '',
          dateCreated: undefined
      }
  },
  computed: mapState([
    'user'
  ]),
  components: [
      transactions
  ],
  methods: {
    clickUser(param) {
      console.log(`User clicked: ${param}`)
    }
  }
}
</script>
