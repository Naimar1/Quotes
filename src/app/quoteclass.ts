export class Quoteclass {
    public showImagequote:boolean;
    constructor(public id:number, public name:string,public image:string, public completeDate:Date, public upvote:number,public downvote:number){
        this.showImagequote=false;

    }
}

