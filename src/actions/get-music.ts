import { db } from "@/firebase/config";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

export type Music = {
  nome: string;
  artista: string;
  url: string;
};

export default async function getMusic() {
  const data: Music[] = [];

  const querySnapshot = await getDocs(
    query(collection(db, "audios"), orderBy("sequence", "asc"))
  );
  
  if (!querySnapshot) throw new Error("Não foi possivel acessar essa coleção");

  querySnapshot.forEach((doc) => {
    if (doc) {
      data.push(doc.data() as Music);
    } else {
      throw new Error("Não há documentos nessa coleção");
    }
  });

  return data;
}
