interface User {
    name:string,
    email:string,
    image:string
    id:string
}

interface chat {
    id:string
    message:Message[]
}

interface Message {
    id:string
    senderId:string
    receiverId: string
    text: string
    timestamp:number
}

interface friendRequest{
    id:string
    senderId:string
    receiverId:string
}