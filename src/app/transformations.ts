import {BasicResponse, DummyResponse} from "../interfaces/interfaces";

export function basicTransformation(data: BasicResponse): DummyResponse {
    return {
        id: data.id.toString(10),
        userId: data.userId.toString(10)
    }
}
