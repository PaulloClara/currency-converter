<template lang="html">
  <div class="c-field">
    <span class="prefix">
      <slot name="prefix"></slot>
    </span>

    <c-input
      class="input"
      :value="$data.value"
      :name="$attrs.name"
      :autofocus="$props.autofocus"
      v-bind="{ decimal: ',', thousands: '.' }"
      @input="$emit('input', $event)"
      @blur.native="$emit('blur', $event)"
      @focus.native="$emit('focus', $event)"
    ></c-input>
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
    autofocus: {
      type: Boolean,
      default: false,
    },
    newValue: {
      type: String,
      required: false,
    },
  },
  data: () => ({
    value: "",
  }),
  watch: {
    newValue(value) {
      this.$data.value = value;
    },
  },
};
</script>

<style lang="css">
.c-field {
  display: flex;

  border: 6px solid var(--dollar);
  border-radius: 8px 24px 24px 8px;

  background-color: var(--dollar);
}

.c-field .prefix {
  display: flex;

  align-items: center;
  justify-content: center;

  width: 36px;

  color: #fff;
  text-shadow: 0 0 4px #333;
}

.c-field .input {
  width: 100%;
  padding: 4px 12px;

  border: none;
  border-radius: 16px;

  outline: none;
  transition: 0.2s;

  color: #5d686b;
  font-size: 1rem;
  font-weight: 500;
}
</style>
