import React, { useEffect, useState } from "react";

import {
  onSnapshot,
  collection,
  query,
  DocumentData,
} from "firebase/firestore";
import { db } from "../firebase";
import { Query } from "@testing-library/react";

interface Channels {
  id: string;
  channel: DocumentData;
}

const useCollection = (data: string) => {
  // const [channels, setChannels] = useState<Channel[]>([]);
  const [documents, setDocuments] = useState<Channels[]>([]);
  const collectionRef: any = query(collection(db, data));

  useEffect(() => {
    onSnapshot(collectionRef, (querySnapshot: any) => {
      const channelsResults: Channels[] = [];
      querySnapshot.docs.forEach((doc: any) =>
        // console.log(doc.id, doc.data()),
        channelsResults.push({
          id: doc.id,
          channel: doc.data(),
        })
      );
      // console.log(channelsResults);
      setDocuments(channelsResults);
    });
  }, []);
  return { documents };
};

export default useCollection;
