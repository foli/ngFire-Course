import firebase from "firebase/app";

export class Post {
    id: string;

    author: string;

    authorId: string;

    image: string;

    title: string;

    content: string;

    draft: boolean;

    likes: number;

    published: firebase.firestore.Timestamp;
}

export interface FormData {
    id: string;

    title: string;

    content: string;

    image: string;

    draft: boolean;
}
