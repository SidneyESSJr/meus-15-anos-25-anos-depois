import { db } from "@/firebase/config";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

export type CorouselI = {
  url: string;
};

export default async function getMosaicImage<T>() {
  const data: CorouselI[] = [];

  const querySnapshot = await getDocs(
    query(collection(db, "mosaicImage"), orderBy("sequence", "asc"))
  );
  
  if (!querySnapshot) throw new Error("Não foi possivel acessar essa coleção");

  querySnapshot.forEach((doc) => {
    if (doc) {
      data.push(doc.data() as CorouselI);
    } else {
      throw new Error("Não há documentos nessa coleção");
    }
  });

  return data;
}
