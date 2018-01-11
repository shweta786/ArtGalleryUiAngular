import { Painting } from "./painting";
import { User } from "./user";
export class JsonResponse {
    paintings: Painting[] ;
    names: String[];
    status: String;
    message: String;
    usr: User[];
}