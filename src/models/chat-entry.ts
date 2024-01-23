export class ChatEntry{
    public content:string = "";
    public left:boolean = false;

    constructor(content:string, left:boolean){
        this.content = content;
        this.left = left;
    }
}