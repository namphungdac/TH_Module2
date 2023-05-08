// import * as readlineSync from 'readline-sync'
const readlineSync = require('readline-sync')
import {ValidateInputStudent} from "../Validate/ValidateStudent";

export class InputFunction {
    static inputCode(): string {
        let code: string;
        do {
            code = readlineSync.question('Enter Ma sinh vien: ');
        } while (!ValidateInputStudent.validateCode(code));
        return code;
    }

    static inputName(): string {
        let name: string;
        do {
            name = readlineSync.question('Enter Ten sinh vien: ');
        } while (!ValidateInputStudent.validateName(name));
        return name;
    }

    static inputAddress(): string {
        let address: string;
        do {
            address = readlineSync.question('Enter Dia chi sinh vien: ');
        } while (!ValidateInputStudent.validateAddress(address));
        return address;
    }

    static inputPoint(): string {
        let point: string;
        do {
            point = readlineSync.question('Enter Diem sinh vien: ');
        } while (!ValidateInputStudent.validatePoint(point));
        return point;
    }

    static inputHobby(): string {
        let hobby: string;
        do {
            hobby = readlineSync.question('Enter So thich sinh vien: ');
        } while (!ValidateInputStudent.validateHobby(hobby));
        return hobby;
    }
}