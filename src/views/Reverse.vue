<template>
  <div>

  <div class="columns is-centered">
  <div class="column is-8">

    <div class="columns is-centered">
    <div class="column is-5">
      <textarea class="textarea" placeholder="Enter text" v-model="input" style="box-shadow: 0 1px 2px 0 rgba(32,33,36,0.28)" ></textarea>
    </div>
    <div class="column is-5">
      <textarea class="textarea" placeholder="" v-html="output" style="box-shadow: 0 1px 2px 0 rgba(32,33,36,0.28)" >
</textarea>
    </div>
    </div>

  </div>
  </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      input: '',
      output: '',
      output2: ''
    }
  },
  methods: {
    isalpha (c) {
      return (((c >= 'a') && (c <= 'z')) || ((c >= 'A') && (c <= 'Z')))
    }
  },
  watch: {
    input: function (val) {
      let r = this.input.length - 1
      let l = 0
      this.output2 = this.input.split('')
      while (l < r) {
        if (this.isalpha(this.output2[l]) === false) {
          l++
        } else if (this.isalpha(this.output2[r]) === false) {
          r--
        } else {
          let tmp = this.output2[l]
          this.output2[l] = this.output2[r]
          this.output2[r] = tmp
          l++
          r--
        }
      }
      this.output = this.output2.join('')
    }
  }
}
</script>
