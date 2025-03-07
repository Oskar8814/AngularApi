import { Iartist } from "./iartist";

export interface Ialbum {
    name: string;
    artists: Iartist[];
    href: string;
}
