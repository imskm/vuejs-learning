<template>
  <!-- <button @click="increment">Count <span>{{ count }}</span></button> -->
  <!-- <button @click="count++">Count <span>{{ count }}</span></button> -->

  <!-- <button @click="showOrHide">{{ buttonText }}</button> -->

  <!-- <h1 v-if="shouldShow">Message: Test message</h1> -->
  <router-view></router-view>
</template>


<script>
  export default {
    data() {
      return {
        count: 0,
        shouldShow: false,
        buttonText: "Show",
      };
    },

    methods: {
      increment() {
        this.count++;
      },

      showOrHide() {
        this.shouldShow = !this.shouldShow;
        // if (this.shouldShow)
        //   this.shouldShow = false;
        // else
        //   this.shouldShow = true;
      }

      // ...
    }
  }
</script>