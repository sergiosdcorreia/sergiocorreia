import { ref, onMounted } from "vue";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebaseInit";

export const getSkills = () => {
  const skills = ref([]);

  const getFBSkills = async () => {
    let fbSkills = [];
    const querySnapshot = await getDocs(collection(db, "skills"));
    querySnapshot.forEach((doc) => {
      const skills = {
        id: doc.id,
        ...doc.data(),
      };
      fbSkills.push(skills);
    });
    skills.value = fbSkills;
  };
  onMounted(getFBSkills);

  return { skills };
};
