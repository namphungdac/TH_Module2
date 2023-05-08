// import * as readlineSync from 'readline-sync'
const readlineSync = require('readline-sync')
import {StudentManager} from "./TH_Module2/StudentManager";

function getUserChoice(options: string[]) {
    const index = readlineSync.keyInSelect(options, "Enter your choice: ");
    if (index === -1) {
        return 0;
    }
    return index + 1;
}

function main() {
    const MainMenu: string[] = ['Hien thi danh sach SV', 'Tim kim SV theo Ten', 'Nhap SV moi', 'Chinh sua thong tin 1 SV', 'Xoa 1 SV', 'Exit'];
    let exit: boolean = true;
    while (exit) {
        switch (getUserChoice(MainMenu)) {
            case 1:
                StudentManager.showStudentList();
                break;
            case 2:
                StudentManager.findStudentByName();
                break;
            case 3:
                StudentManager.addStudent();
                break;
            case 4:
                StudentManager.updateStudent();
                break;
            case 5:
                StudentManager.deleteStudent();
                break;
            case 6:
                if (readlineSync.keyInYN('Confirm Exit: ')) {
                    exit = false;
                }
                break;
            default:
                console.log("Invalid choice");
        }
    }
}

main();