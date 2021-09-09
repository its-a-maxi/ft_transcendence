import { UserI } from "src/users/user-service/models/user.interface";
import { RoomI } from "../room/room.interface";


export interface MessageI
{
    id?: number;
    text: string;
    user: UserI;
    room: RoomI;
    crated_at?: Date;
    update_at?: Date;
}