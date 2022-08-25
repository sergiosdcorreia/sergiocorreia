import { ref, onMounted } from "vue";
import { projectFirestore } from "@/firebase/firebaseInit";
import { query, collection, getDocs } from "firebase/firestore";

export const useCollection = () => {
  const documents = ref([]);

  const getDocuments = async () => {
    let photos = [];
    const q = query(collection(projectFirestore, "photos"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const documents = {
        id: doc.id,
        ...doc.data(),
      };
      photos.push(documents);
    });

    documents.value = photos;
    console.log("Documents: ", documents);
  };
  onMounted(getDocuments);

  return { documents };
};
