export class ChatEntry{
    public content:string = "";
    public isAI:boolean = false;

    constructor(content:string, isAI:boolean){
        this.content = content;
        this.isAI = isAI;
    }
}