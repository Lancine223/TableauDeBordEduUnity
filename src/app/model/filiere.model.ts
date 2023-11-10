import { Classe } from "./classe.model";

export interface Filiere {
    idFiliere: number;
    nom:       string;
    niveau:    string;
    classe: Classe[];
}