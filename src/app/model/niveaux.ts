import { Filiere } from "./filiere.model";

export interface Niveaux {
     id: number;
     nom: string;
     filiere: Filiere[];
     // Autres propriétés du niveau
   }
