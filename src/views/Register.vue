<script>
export default {
  data() {
    return {
      isDragging: false,
      files: [],
    };
  },
  methods: {
    remove(i) {
    this.files.splice(i, 1);
    },
    onChange() {
        const self = this;
        let incomingFiles = Array.from(this.$refs.file.files);
        const fileExist = self.files.some((r) =>
            incomingFiles.some(
            (file) => file.name === r.name && file.size === r.size
            )
        );
        if (fileExist) {
            self.showMessage = true;
            alert("New upload contains files that already exist");
        } else {
            self.files.push(...incomingFiles);
        }
    },
    dragover(e) {
      e.preventDefault();
      this.isDragging = true;
    },
    dragleave() {
      this.isDragging = false;
    },
    drop(e) {
      e.preventDefault();
      this.$refs.file.files = e.dataTransfer.files;
      this.onChange();
      this.isDragging = false;
    },
    generateURL(file) {
    let fileSrc = URL.createObjectURL(file);
    setTimeout(() => {
        URL.revokeObjectURL(fileSrc);
    }, 1000);
    return fileSrc;
    },
    
    // axios
    uploadFiles() {
        const files = this.files;
        const formData = new FormData();
        files.forEach((file) => {
            formData.append("selectedFiles", file);
        });

        axios({
            method: "POST",
            url: "http://localhost:8000/api/docs",
            data: formData,
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    },
  },
};
</script>

<template>
  <div class="main">
    <div
      :style="isDragging && 'border-color: green;'"
      class="dropzone-container"
      @dragover="dragover"
      @dragleave="dragleave"
      @drop="drop"
    >
      <input
        type="file"
        multiple
        name="file"
        id="fileInput"
        class="hidden-input"
        @change="onChange"
        ref="file"
        accept=".pdf,.jpg,.jpeg,.png"
      />

      <label for="fileInput" class="file-label">
        <div v-if="isDragging">Release to drop files here.</div>
        <div v-else>Drop files here or <u>click here</u> to upload.</div>
      </label>

      <!-- Note: Only add the code block below -->
      <div class="preview-container mt-4" v-if="files.length">
        <div v-for="file in files" :key="file.name" class="preview-card">
          <div>
            <img class="preview-img"  :src="generateURL(file)"  />
            <p>
              {{ file.name }}
              {{ Math.round(file.size / 1000) + "kb" }}
            </p>
          </div>
          <div>
            <button
              class="ml-2"
              type="button"
              @click="remove(files.indexOf(file))"
              title="Remove file"
            >
              <b>X</b>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="button-container">
        <button class="button-upload" @click="uploadFiles">Upload</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main {
  display: flex;
  flex-grow: 1;
  align-items: center;
  height: 100vh;
  justify-content: center;
  text-align: center;
  flex-direction: column;
}

.dropzone-container {
  padding: 4rem;
  background: #f7fafc;
  border: 1px solid #e2e8f0;

  &:hover {
    border-color: #a2a2a2;
    background-color: #e2e8f0;
  }
}

.hidden-input {
  opacity: 0;
  overflow: hidden;
  position: absolute;
  width: 1px;
  height: 1px;
}

.file-label {
  font-size: 20px;
  display: block;
  cursor: pointer;
}

.preview-container {
  display: flex;
  margin-top: 2rem;
}

.preview-card {
  display: flex;
  border: 1px solid #a2a2a2;
  padding: 5px;
  margin-left: 5px;
}

.preview-img {
  width: 50px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid #a2a2a2;
  background-color: #a2a2a2;
}

.dropzone-container {
  /* . . .  */
  border: 2px dashed;
  border-color: #9e9e9e;
}

.button-container {
    margin-top: 2rem;
    height: 60px;
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #a2a2a2;  

}

.button-upload {
    background-color: #a2a2a2;
    color: white;
    border-radius: 50%;
    height: 60px;
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #a2a2a2;

    :hover {
        background-color: #a2a2a2;
        color: white;
        border-radius: 50%;
        height: 60px;
        width: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background-color: #a2a2a2;
    }
}
</style>
