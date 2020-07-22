<template lang="html">
  <footer class="c-footerbar">
    <div class="profile">
      <a
        class="link"
        href="https://github.com/paulloclara"
        target="_blank"
        title="Open github profile"
      >
        <img
          class="image"
          src="https://avatars1.githubusercontent.com/u/47908861"
          alt="Profile"
        />
      </a>

      <h5 class="description">
        Otaku full time and student of Systems Analysis and Development at the
        Federal Institute of Piaui in my free time.
      </h5>
    </div>

    <div class="icons">
      <a
        class="link"
        href="https://github.com/paulloclara/currency-converter"
        target="_blank"
        title="Open the repository on github"
      >
        <c-icon name="github"></c-icon>
      </a>
      <a
        class="link"
        href="https://docs.awesomeapi.com.br/api-de-moedas"
        target="_blank"
        title="Open the API documentation"
      >
        <c-icon name="api"></c-icon>
      </a>
    </div>
  </footer>
</template>

<script>
import Icon from "@/components/Icon";

export default {
  name: "Footerbar",
  components: {
    "c-icon": Icon,
  },
};
</script>

<style lang="css">
.c-footerbar {
  display: flex;
  justify-content: space-between;

  padding: 12px 24px;

  background-color: var(--bg-secondary);
}

.c-footerbar .profile {
  display: flex;
  align-items: center;

  width: 40%;
  margin-right: 12px;
}

.c-footerbar .profile .image {
  height: 80px;
}

.c-footerbar .profile .description {
  margin-left: 12px;

  color: #fff;
  font-size: 1.1rem;

  text-align: justify;
  line-height: 1.2rem;
}

.c-footerbar .icons {
  display: flex;

  align-items: center;
  justify-content: center;
}

.c-footerbar .icons .c-icon {
  height: 40px;

  fill: #fff;
  color: #fff;
}

.c-footerbar .icons .link + .link {
  margin-left: 12px;
}

@media only screen and (max-width: 1024px) {
  .c-footerbar .profile {
    width: 60%;
  }
}

@media only screen and (max-width: 640px) {
  .c-footerbar .profile {
    width: 80%;
  }
}

@media only screen and (max-width: 480px) {
  .c-footerbar {
    flex-direction: column;
  }

  .c-footerbar .profile {
    width: 100%;

    margin-right: 0;
    margin-bottom: 12px;
  }
}

@media only screen and (max-width: 360px) {
  .c-footerbar {
    padding: 4px;
  }

  .c-footerbar .profile .description {
    font-size: 0.9rem;
    margin-left: 4px;
  }
}
</style>
