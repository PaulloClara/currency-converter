<script lang="ts" setup>
import { watch } from "vue";
import { CurrencyInputOptions, useCurrencyInput } from "vue-currency-input";

const props = defineProps<{
  modelValue: number | null;
  options?: Partial<CurrencyInputOptions>;
}>();

const { inputRef, formattedValue, setValue } = useCurrencyInput({
  currency: "BRL",
  autoDecimalDigits: true,
  hideCurrencySymbolOnFocus: false,
  hideGroupingSeparatorOnFocus: false,
  hideNegligibleDecimalDigitsOnFocus: false,
  ...props.options,
});

watch(
  () => props.modelValue,
  (value) => {
    setValue(value || 0);
  }
);
</script>

<template>
  <input v-model="formattedValue" class="currency-input" ref="inputRef" />
</template>

<style lang="scss">
.currency-input {
  width: 100%;
  padding: 0.75em 0;
  border: none;
  outline: none;
  background-color: transparent;
  color: var(--primary-text-color);
  font-weight: 600;
}
</style>
