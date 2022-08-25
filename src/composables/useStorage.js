import { ref } from "vue";
import {
  projectStorage,
  projectFirestore,
  storageRef,
} from "@/firebase/firebaseInit";
import { uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";

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
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      progress.value = percentage;
    },
    (err) => {
      error.value = err;
      console.log(err.message);
    },
    async () => {
      await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log("file available at", downloadURL);
        url.value = downloadURL;
        addDoc(collection(projectFirestore, "photos"), {
          name: file.name,
          url: downloadURL,
        });
      });
    }
  );
  return { progress, url, error };
};

export default useStorage;
