<template lang="html">
  <div class="field">
    <div id="field-label" class="field-label has-text-left">
      <label class="label" v-text="label" />
    </div>

    <div class="field-body">
      <div class="field">
        <money v-model="coin" class="input is-primary" @input="inputEvt" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Field",
  props: ["label"],
  data() {
    return {
      coin: "",
      coinCode: ""
    };
  },
  methods: {
    inputEvt(value) {
      this.$emit("input", { value, code: this.coinCode });
    }
  },
  created() {
    this.coinCode = this.label.split(" ")[1].toLowerCase();
  }
};
</script>

<style lang="css" scoped>
#field-label {
  margin-left: 6px;
}
</style>
