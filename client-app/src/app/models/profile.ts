import { User } from "./user"

export interface IProfile {
    username: string
    displayName: string
    image?: string
    bio?: string
    followersCount: number;
    followingsCount: number;
    following: boolean;
    photos?: Photo[]
}
export interface UserActivity {
    id: string;
    title: string;
    category: string;
    date: Date;
}

export class Profile implements IProfile {
    constructor(user: User) {
        this.username = user.username;
        this.displayName = user.displayName;
        this.image = user.image;
    }
    followersCount = 0;
    followingsCount = 0;
    following = false;
    username: string;
    displayName: string;
    image?: string;
    photos?: Photo[];
    bio?: string;
}
export interface Photo {
    id: string;
    url: string;
    isMain: boolean;
}