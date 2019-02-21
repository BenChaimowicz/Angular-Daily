export class Daily {
  private _id: number;
  private _name: string;
  private _dateCreated: Date;
  private _timeSpentDoing: number;
  private _timeLimit: number;
  private _goalReached: boolean;

  constructor(id: number, name: string, timeLimit: number) {
    this._dateCreated = new Date();
    this.id = id;
    this.name = name;
    this.timeLimit = timeLimit;
    this.timespentdoing = 0;
  }

  get id() { return this._id; }
  get name() { return this._name; }
  get date() { return this._dateCreated; }
  get timespentdoing() { return this._timeSpentDoing; }
  get timeLimit() { return this._timeLimit; }
  get isReached() { return this._goalReached; }
  set id(id: number) { this._id = id; }
  set name(name: string) { this._name = name; }
  set timespentdoing(time: number) { this._timeSpentDoing = time; }
  set timeLimit(time: number) { this._timeLimit = time; }
  set isReached(reached: boolean) { this._goalReached = reached; }
}
