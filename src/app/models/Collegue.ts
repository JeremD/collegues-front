/**
 * Collègue
 */
export class Collegue {
  constructor(
    private _matricule: string,
    private _nom: string,
    private _prenom: string,
    private _email: string,
    private _dateDeNaissance: Date,
    private _photoUrl: string) {
  }

  public get matricule(): string {
    return this._matricule;
  }

  public get nom(): string {
    return this._nom;
  }

  public get prenom(): string {
    return this._prenom;
  }

  public get email(): string {
    return this._email;
  }

  public get dateDeNaissance(): Date {
    return this._dateDeNaissance;
  }

  public get photoUrl(): string {
    return this._photoUrl;
  }
}
export default { Collegue };
