import Vue from 'vue'
// import { isEmpty } from 'lodash'

Vue.mixin({
  methods: {
    elipsify (subject, maxLength = 40) {
      if (subject.length < maxLength) {
        return subject
      } else {
        return subject.substring(0, (maxLength - 4)) + ' ...'
      }
    }
    // isEmpty (item) {
    //   return isEmpty(item)
    // }
  }
})
