import { User } from "src/student-registration/users/entities/user.entity";
import { ModeOfEntry } from "../../../student-registration/studentRegistration.types";
export declare class Student {
    id: number;
    department: string;
    matriculationNumber: string;
    modeOfEntry: ModeOfEntry;
    programOfStudy: string;
    yearOfEntry: number;
    user: User;
}
