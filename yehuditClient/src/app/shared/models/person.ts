import { HMO } from './HMO';
import { ChildPerson } from './childPerson';

export class Person {
    id: number;
    tz: string;
    firstName: string;
    lastName: string;
    bornDate: Date;
    gender: number;
    HMOId: number;
    children: ChildPerson[] = []
}