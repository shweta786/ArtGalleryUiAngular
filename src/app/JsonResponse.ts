import { Painting } from "./painting";

export class JsonResponse {
    paintings: Painting[] ;
    names: String[];
    status: String;
    message: String;
}