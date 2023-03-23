<script lang="ts" setup>
import { watch } from "vue";
import { CurrencyInputOptions, useCurrencyInput } from "vue-currency-input";

const props = defineProps<{
  modelValue: number | null;
  options?: Partial<CurrencyInputOptions>;
}>();

const defaultOptions = {
  currency: "BRL",
  autoDecimalDigits: true,
  hideCurrencySymbolOnFocus: false,
  hideGroupingSeparatorOnFocus: false,
  hideNegligibleDecimalDigitsOnFocus: false,
};

const { inputRef, formattedValue, setValue, setOptions } = useCurrencyInput({
  ...defaultOptions,
  ...props.options,
});

watch(
  () => props.modelValue,
  (value) => {
    setValue(value || 0);
  }
);

watch(
  () => props.options,
  (options, previousOptions) => {
    if (options?.currency !== previousOptions?.currency)
      setOptions({ ...defaultOptions, ...options });
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
