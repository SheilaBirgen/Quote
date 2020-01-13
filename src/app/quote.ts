export class Quote {
    
    showDescription: boolean;

        constructor(
            public quote: string, 
            public author: string,  
            public completeDate: Date,
            public likeNo: number,
            public dislikeNo: number
            )

        {
            this.showDescription = false;
            this.likeNo=0;
            this.dislikeNo=0;
        }

}










