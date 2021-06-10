import firebase from "firebase/app";

export class Post {
    id: string;

    author: string;

    authorId: string;

    image: any;

    title: string;

    content: string;

    draft: boolean;

    likes: number;

    published: firebase.firestore.Timestamp;
}
