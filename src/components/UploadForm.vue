<template>
  <form>
    <label>
      <input type="file" @change="handleChange" />
      <span>Upload Image</span>
    </label>
    <div class="output">
      <div v-if="fileError" class="error">{{ fileError }}</div>
      <div v-if="file">{{ file.name }}</div>
      <ProgressBar
        v-if="file"
        :file="file"
        :collection-ref="collectionRef"
        :collection-name="collectionName"
        @complete="file = null"
      />
    </div>
  </form>
</template>

<script>
import { ref } from "vue";
import ProgressBar from "@/components/ProgressBar.vue";
export default {
  name: "UploadForm",
  components: { ProgressBar },
  props: {
    collectionRef: {
      type: String,
      default: "",
    },
    collectionName: {
      type: String,
      default: "",
    },
  },
  setup() {
    const file = ref(null);
    const fileError = ref(null);
    const types = ["image/png", "image/jpeg"];

    const handleChange = (e) => {
      let selected = e.target.files[0];

      if (selected && types.includes(selected.type)) {
        file.value = selected;
        fileError.value = null;
      } else {
        file.value = null;
        fileError.value = "Please select an image file (png or jpg)";
      }
    };

    return { handleChange, file, fileError };
  },
};
</script>

<style lang="scss" scoped>
form {
  margin: 30px auto 10px;
  text-align: center;

  label {
    display: block;
    background: var(--light-grey);
    width: 150px;
    border: 1px solid var(--primary);
    border-radius: 6px;
    margin: auto;
    line-height: 30px;
    color: var(--primary);
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background: var(--primary);
      color: var(--light-grey);
    }

    input {
      height: 0;
      width: 0;
      opacity: 0;
    }
  }

  .output {
    font-size: 0.8rem;
    margin: 0.3rem;
    color: var(--light-grey);

    .error {
      color: var(--error);
    }
  }
}
</style>
