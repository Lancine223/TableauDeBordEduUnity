export class Etudiant {
    public id: number;
        public nom: string;
        public prenom: string;
        public email: string;
        public motDePasse: string;
        public role: string;
    constructor(
    nom: string,
    prenom: string,
    email: string,
    motDePasse: string,
    role: string,
      ) { 
        this.nom= nom; 
        this.prenom= prenom; 
        this.email= email;
        this.motDePasse= motDePasse;
        this.role= role;
       }
}
