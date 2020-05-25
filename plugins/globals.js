import Vue from 'vue'

Vue.mixin({
  methods: {
    elipsify (subject, maxLength = 40) {
      if (subject.length < maxLength) {
        return subject
      } else {
        return subject.substring(0, (maxLength - 4)) + ' ...'
      }
    },
  },
})
