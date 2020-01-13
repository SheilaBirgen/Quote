export class Quote {
    
    showDescription: boolean;

        constructor(
            public id: number, 
            public quote: string, 
            public author: string, 
            public by:string, 
            public complete: Date,
            public likeNo: number,
            public dislikeNo: number
            )
        {
            this.showDescription = false;
            this.likeNo=0;
            this.dislikeNo=0;
        }

}










