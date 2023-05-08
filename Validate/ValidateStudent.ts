import {regexName, regexAddress, regexPoint, regexHobby, regexCode} from "../Regex/RegexStudent";

export class ValidateInputStudent {
    static validateCode(code: string): boolean {
        let check: boolean = true;
        if (!regexCode(code)) {
            console.log('Code Not Validate');
            check = false;
        }
        return check;
    }

    static validateName(name: string): boolean {
        let check: boolean = true;
        if (!regexName(name)) {
            console.log('Name Not Validate');
            check = false;
        }
        return check;
    }

    static validateAddress(address: string): boolean {
        let check: boolean = true;
        if (!regexAddress(address)) {
            console.log('Address Not Validate');
            check = false;
        }
        return check;
    }

    static validatePoint(point: string): boolean {
        let check: boolean = true;
        if (!regexPoint(point)) {
            console.log('Point Not Validate');
            check = false;
        }
        return check;
    }

    static validateHobby(hobby: string): boolean {
        let check: boolean = true;
        if (!regexHobby(hobby)) {
            console.log('Hobby Not Validate');
            check = false;
        }
        return check;
    }
}