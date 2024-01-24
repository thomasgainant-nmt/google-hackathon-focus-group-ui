export class ChatEntry{
    public content:string = "";
    public isAI:boolean = false;
    public isWaiting:boolean = false;

    constructor(content:string, isAI:boolean, isWaiting:boolean = false){
        this.content = content;
        this.isAI = isAI;
        this.isWaiting = isWaiting;
    }
}