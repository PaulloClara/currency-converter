<template lang="html">
  <figure class="c-icon">
    <img class="img" :src="getImage()" @load="SVGInject($event.target)" />

    <figcaption v-if="$props.text" class="text">
      <slot name="default"></slot>
    </figcaption>
  </figure>
</template>

<script>
import SVGInject from "@iconfu/svg-inject";

export default {
  name: "Icon",
  props: {
    name: {
      type: String,
      required: true,
    },
    text: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    SVGInject,
    getImage() {
      return require(`@/assets/${this.$props.name}.svg`);
    },
  },
};
</script>

<style lang="css">
.c-icon {
  display: flex;
  height: 1.2rem;
}

.c-icon .img {
  width: inherit;
  height: inherit;
}

.c-icon .text {
  margin-left: 8px;

  overflow: hidden;
  white-space: nowrap;

  color: #fff;
  text-overflow: ellipsis;
}
</style>
