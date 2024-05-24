import { db } from "@/firebase/config";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

export type Music = {
  nome: string;
  artista: string;
  url: string;
};

export type FetchData<T> = {
  data: T[];
  erro: string | null;
  ok: boolean;
};

export default async function getMusic<T>() {
  const fetchData: FetchData<T> = { data: [], erro: null, ok: true };

  try {
    const querySnapshot = await getDocs(
      query(collection(db, "audios"), orderBy("sequence", "asc"))
    );
    if (!querySnapshot)
      throw new Error("Não foi possivel acessar essa coleção");

    querySnapshot.forEach((doc) => {
      if (doc) {
        fetchData.data.push(doc.data() as T);
      } else {
        throw new Error("Não há documentos nessa coleção");
      }
    });

    return { fetchData };
  } catch (error: unknown) {
    if (error instanceof Error) fetchData.erro = error.message;
    else fetchData.erro = "Erro genérico";
    fetchData.ok = false;
    return { fetchData };
  }
}
