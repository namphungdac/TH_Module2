// import * as readlineSync from 'readline-sync'
import {Student} from "./Student";
import {Lop} from "./Student";
import {InputFunction} from "../Funcition/InputFuncition";

const readlineSync = require('readline-sync')

export class StudentManager {
    private static studentList: Student[] = [];

    static showStudentList(): void {
        if (this.studentList.length === 0) console.log('List Student is empty.');
        else console.table(this.studentList);
    }

    static findStudentByName(): void {
        if (this.studentList.length === 0) console.log('List Student is empty.');
        else {
            let name: string = InputFunction.inputName();
            let result = this.studentList.filter(element => element.getTenSinhVien() === name);
            if (!result[0]) console.log('Khong co du lieu phu hop');
            else console.table(result);
        }
    }

    static addStudent(): void {
        let code: string = InputFunction.inputCode();
        let name: string = InputFunction.inputName();
        let lop: Lop;
        const lopList: string[] = ['C0223G1', 'C1033H2', 'C0844K3'];
        let index = readlineSync.keyInSelect(lopList, "Enter class: ");
        if (index === 0) lop = 'C0223G1';
        else if (index === 1) lop = 'C1033H2';
        else lop = 'C0844K3';
        let address: string = InputFunction.inputAddress();
        let point: number = +InputFunction.inputPoint();
        let hobby: string = InputFunction.inputHobby();
        this.studentList.push(new Student(code, name, lop, address, point, hobby));
        console.log('Successfully added');
    }

    static updateStudent(): void {
        if (this.studentList.length === 0) console.log('List Student is empty.');
        else {
            let code: string = InputFunction.inputCode();
            let studentNeedsUpdate = this.studentList.find(element => element.getMaSinhVien() === code);
            if (!studentNeedsUpdate) console.log('Khong ton tai SV can update.');
            else {
                let name: string = InputFunction.inputName();
                let lop: Lop;
                const lopList: string[] = ['C0223G1', 'C1033H2', 'C0844K3'];
                let index = readlineSync.keyInSelect(lopList, "Enter class: ");
                if (index === 0) lop = 'C0223G1';
                else if (index === 1) lop = 'C1033H2';
                else lop = 'C0844K3';
                let address: string = InputFunction.inputAddress();
                let point: number = +InputFunction.inputPoint();
                let hobby: string = InputFunction.inputHobby();
                studentNeedsUpdate.setTenSinhVien(name);
                studentNeedsUpdate.setLop(lop);
                studentNeedsUpdate.setQueQuan(address);
                studentNeedsUpdate.setDiem(point);
                studentNeedsUpdate.setSoThich(hobby);
                console.log('Successfully updated');
            }
        }
    }

    static deleteStudent(): void {
        if (this.studentList.length === 0) console.log('List Student is empty.');
        else {
            let code: string = InputFunction.inputCode();
            let studentNeedsDelete = this.studentList.find(element => element.getMaSinhVien() === code);
            if (!studentNeedsDelete) console.log('Khong ton tai SV can delete.');
            else {
                this.studentList = this.studentList.filter(element => element.getMaSinhVien() !== code);
                console.log('Successfully deleted');
            }
        }
    }

}