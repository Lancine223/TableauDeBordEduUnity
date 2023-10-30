export class Enseignant {
    public id: number;
    public nom: string;
    public prenom: string;
    public domaine: String;
    public niveau: String;
    public email: String;
    public motDePasse: string;
constructor(
    id: number,
    nom: string,
    prenom: string,
    domaine: String,
    niveau: String,
    email: String,
    motDePasse: string,
  ) { 
    this.id = id;
    this.nom= nom;
    this.prenom= prenom;
    this.domaine= domaine;
    this.niveau= niveau;
    this.email= email;
    this.motDePasse= motDePasse;
   }
}
