import { ref, onMounted } from "vue";
import { projectFirestore } from "@/firebase/firebaseInit";
import { query, collection, getDocs } from "firebase/firestore";

export const useCollection = (collectionName) => {
  const documents = ref([]);

  const getDocuments = async () => {
    let fbDocuments = [];
    const q = query(collection(projectFirestore, collectionName));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const documents = {
        id: doc.id,
        ...doc.data(),
      };
      fbDocuments.push(documents);
    });

    documents.value = fbDocuments;
  };
  onMounted(getDocuments);

  return { documents };
};
