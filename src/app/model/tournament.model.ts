export class Tournament {
    id: any;
    constructor(
        public _id: number,
        public title?: String,
        public owner?: String,
        public sportType?: String,
        public location?: String,
        public teamCount?: Number
    ) { }
  }
  