import { ref } from "vue";
import { projectStorage, storageRef } from "@/firebase/firebaseInit";
import { uploadBytesResumable, getDownloadURL } from "firebase/storage";

const useStorage = (file) => {
  const error = ref(null);
  const url = ref(null);
  const progress = ref(null);

  const storage = storageRef(projectStorage, "photos/" + file.name);
  const uploadTask = uploadBytesResumable(storage, file);
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      console.log(snapshot);
    },
    (err) => {
      error.value = err;
      console.log(err.message);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log("file available at", downloadURL);
      });
    }
  );
  return { progress, url, error };
};

export default useStorage;
