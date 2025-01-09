import { useContext } from "react";
import { contextCommers } from "../context/GlobalContext";

export const useContextCommers = () => useContext(contextCommers);
