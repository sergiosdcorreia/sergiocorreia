import { ref, onMounted } from "vue";
import { query, collection, getDocs, orderBy } from "firebase/firestore";
import { db } from "@/firebase/firebaseInit";

export const getSkills = () => {
  const skills = ref([]);

  const getFBSkills = async () => {
    let fbSkills = [];
    const q = query(collection(db, "skills"), orderBy("skillPercent", "desc"));
    const querySnapshot = await getDocs(q);
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

export const getWorkExperience = () => {
  const workExperience = ref([]);

  const getFBWorkExperience = async () => {
    let fbWorkExperience = [];
    const q = query(collection(db, "work experience"), orderBy("year", "desc"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const workExperience = {
        id: doc.id,
        ...doc.data(),
      };
      fbWorkExperience.push(workExperience);
    });
    workExperience.value = fbWorkExperience;
  };
  onMounted(getFBWorkExperience);

  return { workExperience };
};
