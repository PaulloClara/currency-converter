<template lang="html">
  <div class="c-field">
    <label class="label" :for="$attrs.name">
      <slot name="default"></slot>
    </label>

    <div class="content">
      <span class="prefix">
        <slot name="prefix"></slot>
      </span>

      <c-input
        class="input"
        :value="value"
        :name="$attrs.name"
        v-bind="{ decimal: ',', thousands: '.' }"
        @input="$emit('input', $event)"
      ></c-input>
    </div>
  </div>
</template>

<script>
import { Money } from "v-money";

export default {
  name: "Field",
  components: {
    "c-input": Money,
  },
  props: {
    newValue: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      value: "",
    };
  },
  watch: {
    newValue(value) {
      this.value = value;
    },
  },
};
</script>

<style lang="css" scoped>
.c-field {
  display: flex;
  flex-direction: column;

  color: #fff;
  font: bold 18px small-caption;
}

.label {
  margin-bottom: 2px;
  text-shadow: 0 0 2px #000;
}

.content {
  display: flex;
  height: 36px;

  border: 4px solid var(--dollar);
  border-radius: 4px 18px 4px 4px;

  background-color: var(--dollar);
}

.prefix {
  display: inline-flex;

  align-items: center;
  justify-content: center;

  width: 32px;
  border-radius: 4px;

  text-shadow: 0 0 4px #0008;
  background-color: var(--dollar);
}

.input {
  width: 100%;

  padding: 0 12px;

  border: none;
  border-radius: 12px 18px 2px 12px;

  outline: none;
  box-shadow: inset 0 0;

  transition: 0.2s;

  color: var(--dollar);
  font-size: 16px;
}

.input:focus {
  box-shadow: inset 0 0 0 2px var(--dollar);
}
</style>
