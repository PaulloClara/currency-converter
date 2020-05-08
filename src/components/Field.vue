<template lang="html">
  <div class="c-field">
    <label class="label" :for="$attrs.name">
      <slot name="default"></slot>
    </label>
    <c-input
      class="input"
      :value="value"
      :name="$attrs.name"
      @input="$emit('input', $event)"
    ></c-input>
  </div>
</template>

<script>
import { Money } from "v-money";

export default {
  name: "Field",
  components: {
    "c-input": Money
  },
  props: {
    newValue: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      value: ""
    };
  },
  watch: {
    newValue(value) {
      this.value = value;
    }
  }
};
</script>

<style lang="css" scoped>
.c-field {
  display: flex;
  flex-direction: column;

  color: #fff;
}

.label {
  margin-bottom: 6px;
  font: bold 17px small-caption;
}

.input {
  padding: 6px 12px;

  border: 2px solid var(--dollar);
  border-radius: 16px;

  outline: none;
  text-align: right;

  color: var(--dollar);
  font: bold 17px caption;
}
</style>
