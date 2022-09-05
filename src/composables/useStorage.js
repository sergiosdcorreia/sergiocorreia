import { ref } from "vue";
import {
  projectStorage,
  projectFirestore,
  storageRef,
} from "@/firebase/firebaseInit";
import { uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";

const useStorage = (file, collectionRef, collectionName) => {
  const error = ref(null);
  const url = ref(null);
  const progress = ref(null);

  const storage = storageRef(projectStorage, collectionRef + file.name);
  const uploadTask = uploadBytesResumable(storage, file);
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      progress.value = percentage;
    },
    (err) => {
      error.value = err;
      console.log(err.message);
    },
    async () => {
      await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        url.value = downloadURL;
        addDoc(collection(projectFirestore, collectionName), {
          name: file.name,
          url: downloadURL,
        });
      });
    }
  );
  return { progress, url, error };
};

export default useStorage;
