import React, { useEffect, useState } from "react";

// import {
//   onSnapshot,
//   collection,
//   query,
//   DocumentData,
// } from "firebase/firestore";
import { db } from "../firebase";
import { Query } from "@testing-library/react";
import { useAppSelector } from "../app/hooks";
import {
  collection,
  CollectionReference,
  DocumentData,
  serverTimestamp,
  Timestamp,
  DocumentReference,
  addDoc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";


interface Messages {
    timestamp: Timestamp;
    message: string;
    user: {
      uid: string;
      photo: string;
      email: string;
      displayName: string;
    };
  }

const useSubCollection = (collectionName: string,subCollectionName: string) => {
  const channelId = useAppSelector((state) => state.channel.channelId);
  const [subDocuments, setSubDocuments] = useState<Messages[]>([]);

  useEffect(() => {
    let collectionRef = collection(
      db,
      collectionName,
      String(channelId),
      subCollectionName
    );

    const collectionRefOrderBy = query(
      collectionRef,
      orderBy("timestamp", "desc")
    );

    onSnapshot(collectionRefOrderBy, (snapshot) => {
      let results: Messages[] = [];
      snapshot.docs.forEach((doc) => {
        results.push({
          timestamp: doc.data().timestamp,
          message: doc.data().message,
          user: doc.data().user,
        });
      });
      setSubDocuments(results);
      // console.log(results);
    });
  }, [channelId]);
  return { subDocuments };
};

export default useSubCollection;
