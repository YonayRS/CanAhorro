import {get, ref} from "firebase/database";
import db from "./firebase.config.js";

const refProducts = ref(db, "/Products");

const getAllProducts = () => {
    return get (refProducts)
}

export default {
    getAllProducts
}