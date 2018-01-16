import { Painting } from "./painting";
import { User } from "./user";
import { Orders } from "./orders";
export class JsonResponse {
    paintings: Painting[];
    orders: Orders[];
    names: String[];
    status: String;
    message: String;
    usr: User[];
    msg: String;
}