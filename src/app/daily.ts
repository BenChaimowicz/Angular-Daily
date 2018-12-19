export class Daily {
    private _id: number;
    private _name: string;
    private _dateCreated: Date;

    constructor(id: number, name: string) {
        this._dateCreated = new Date();
        this.id = id;
        this.name = name;
    }

    get id() { return this._id; }
    get name() { return this._name; }
    get date() { return this._dateCreated; }
    set id(id: number) { this._id = id; }
    set name(name: string) { this._name = name; }
}
