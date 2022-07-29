<template>
  <div class="create-post">
    <div class="container">
      <div :class="{ invisible: !error }" class="err-message">
        <p><span>Error:</span>{{ errorMsg }}</p>
      </div>
      <div class="blog-info">
        <input type="text" placeholder="Enter Post Title" v-model="postTitle" />
        <input
          v-model="postDescription"
          type="text"
          placeholder="Enter Post Description"
        />
        <input
          v-model="postContent"
          type="text"
          placeholder="Enter Post Content"
        />
        <div class="upload-file">
          <label for="post-photo">Upload Cover Photo</label>
          <input
            id="post-photo"
            ref="postPhoto"
            type="file"
            accept=".png, .jpg, .jpeg"
          />
          <button
            class="preview"
            :class="{ 'button-inactive': !$store.state.blogPhotoFileURL }"
          >
            Preview Photo
          </button>
          <span>File Chosen: {{ $store.state.blogPhotoName }}</span>
        </div>
        <button>Submit Post</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreatePost",
  data() {
    return {
      error: null,
      errorMsg: null,
      postTitle: "",
      postDescription: "",
      postContent: "",
      postPhoto: "",
    };
  },
};
</script>
