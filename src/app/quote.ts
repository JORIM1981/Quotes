export class Quote {

    constructor(
        public text: string,
        public author: string,
        public submitter: string,
        public completeDate: Date,
        public upvotes: number,
        public downvotes: number
      ) {  }
    
}
