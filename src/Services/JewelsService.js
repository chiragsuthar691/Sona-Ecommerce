import { toast } from "react-toastify";
import { renderMsg } from "../Helper/Common";
import {
  setCRUDLoading,
  setCart,
  setCategories,
  setCollectionList,
  setCustomerChoices,
  setFavouriteList,
  setLoading,
  setReviews,
} from "../Store/Reducers/JewelsSlice";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.config";

/**
 * @desc Get Collection List
 */
export const getCollectionList = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const collectionsRef = collection(db, "collections");
    const docSnap = await getDocs(collectionsRef);
    let list = [];

    docSnap?.forEach((doc) => {
      list.push({
        ...doc.data(),
      });
    });

    dispatch(setCollectionList(list?.[0]?.img));
    return true;
  } catch (e) {
    toast.error(renderMsg(e));
    return false;
  } finally {
    dispatch(setLoading(false));
  }
};

/**
 * @desc Get Cart
 */
export const getCart = () => async (dispatch) => {
  try {
    dispatch(setCRUDLoading(true));
    const collectionsRef = collection(db, "cart");
    const docSnap = await getDocs(collectionsRef);
    let list = [];
    docSnap?.forEach((doc) => {
      list.push({
        id: doc.id,
        ...doc.data(),
        created_at: new Date(doc.data()?.created_at?.seconds * 1000),
      });
    });
    dispatch(setCart(list));
    return true;
  } catch (e) {
    toast.error(renderMsg(e));
    return false;
  } finally {
    dispatch(setCRUDLoading(false));
  }
};

/**
 * @desc Get Categories
 */
export const getCategories = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const collectionsRef = collection(db, "categories");
    const docSnap = await getDocs(collectionsRef);
    let list = [];
    docSnap?.forEach((doc) => {
      list.push({
        ...doc.data(),
      });
    });

    dispatch(setCategories(list));
    return true;
  } catch (e) {
    toast.error(renderMsg(e));
    return false;
  } finally {
    dispatch(setLoading(false));
  }
};

/**
 * @desc Get Reviews
 */
export const getReviews = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const collectionsRef = collection(db, "reviews");
    const docSnap = await getDocs(collectionsRef);
    let list = [];
    docSnap?.forEach((doc) => {
      list.push({
        id: doc.id,
        ...doc.data(),
        created_at: new Date(doc.data()?.created_at?.seconds * 1000),
      });
    });
    dispatch(setReviews(list));
    return true;
  } catch (e) {
    toast.error(renderMsg(e));
    return false;
  } finally {
    dispatch(setLoading(false));
  }
};

/**
 * @desc Get Customer Choices
 */
export const getCustomerChoices = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const collectionsRef = collection(db, "customer_choice");
    const docSnap = await getDocs(collectionsRef);
    let list = [];
    docSnap?.forEach((doc) => {
      list.push({
        id: doc.id,
        ...doc.data(),
        created_at: new Date(doc.data()?.created_at?.seconds * 1000),
      });
    });
    dispatch(setCustomerChoices(list));
    return true;
  } catch (e) {
    toast.error(renderMsg(e));
    return false;
  } finally {
    dispatch(setLoading(false));
  }
};

/**
 * @desc Get Favourite List
 */
export const getFavouriteList = () => async (dispatch) => {
  try {
    dispatch(setCRUDLoading(true));
    const collectionsRef = collection(db, "favourites");
    const docSnap = await getDocs(collectionsRef);
    let list = [];
    docSnap?.forEach((doc) => {
      list.push({
        id: doc.id,
        ...doc.data(),
        created_at: new Date(doc.data()?.created_at?.seconds * 1000),
      });
    });
    dispatch(setFavouriteList(list));
    return true;
  } catch (e) {
    toast.error(renderMsg(e));
    return false;
  } finally {
    dispatch(setCRUDLoading(false));
  }
};

/**
 * @desc Add Item To Cart
 */
export const addItemToCart = (payload) => async (dispatch) => {
  try {
    if (payload) {
      dispatch(setCRUDLoading(true));
      const res = await addDoc(collection(db, "cart"), payload);
      if (res) {
        toast.success(`Product added to cart`);
        return true;
      }
      return false;
    }
  } catch (e) {
    toast.error(renderMsg(e));
    return false;
  } finally {
    dispatch(setCRUDLoading(false));
  }
};

/**
 * @desc Add Item To Favourites
 */
export const addItemToFavourites = (payload) => async (dispatch) => {
  try {
    if (payload) {
      dispatch(setCRUDLoading(true));
      const res = await addDoc(collection(db, "favourites"), payload);
      if (res) {
        toast.success(`Product added to Favourites`);
        return true;
      }
      return false;
    }
  } catch (e) {
    toast.error(renderMsg(e));
    return false;
  } finally {
    dispatch(setCRUDLoading(false));
  }
};
