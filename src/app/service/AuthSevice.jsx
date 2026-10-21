import { useContext } from "react";
import { getContext } from "../provider/Authaproviter";

export default function useAuth(){
    return useContext(getContext());
}