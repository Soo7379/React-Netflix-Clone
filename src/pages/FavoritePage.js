import React, { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { Favorite, Footer } from "../components";

const FavoritePage = () => {
  const [favoriteList, setFavoriteList] = useState([]);
  const [itemId, setItemId] = useState([]);
  //console.log(itemId);

  useEffect(() => {
    const unsubscribe = db.collection("favorites").onSnapshot((snapshot) => {
      setFavoriteList(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );

      setItemId(snapshot.docs.map((doc) => doc.data().item.id));
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <Favorite favoriteList={favoriteList} itemId={itemId} />
      <Footer />
    </div>
  );
};

export default FavoritePage;
