<template>
  <div>

  <div class="columns is-centered">
  <div class="column is-8">

    <div class="columns is-centered">
    <div class="column is-5">
      <textarea class="textarea" placeholder="Enter text" v-model="input" rows="10" style="box-shadow: 0 1px 2px 0 rgba(32,33,36,0.28)"></textarea>
    </div>
    <div class="column is-5">
      <div class="textarea" placeholder="Enter text " v-html="output"  style="overflow:hidden;height:100%;box-shadow: 0 1px 2px 0 rgba(32,33,36,0.28)" >
</div>
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
      output: ''
    }
  },
  methods: {
    change () {
      alert(1)
    },
    isURL (str) {
      var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i') // fragment locator
      return !!pattern.test(str)
    }
  },
  watch: {
    input: function (val) {
      if (this.input.match(/\.(jpeg|jpg|gif|png|svg)$/) != null) {
        this.output = `<img src=${this.input}>`
      } else if (this.isURL(this.input) === true) {
        this.output = `<a href=${this.input} target="_blank">${this.input}</a>`
      } else {
        this.output = this.input
      }
    }
  }
}
</script>
