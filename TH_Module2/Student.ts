export type Lop = 'C0223G1' | 'C1033H2' | 'C0844K3';

export class Student {
    constructor(private MaSinhVien: string,
                private TenSinhVien: string,
                private Lop: Lop,
                private QueQuan: string,
                private Diem: number,
                private SoThich: string) {
    }

    getMaSinhVien(): string {
        return this.MaSinhVien;
    }

    getTenSinhVien(): string {
        return this.TenSinhVien;
    }

    getLop(): Lop {
        return this.Lop;
    }

    getQueQuan(): string {
        return this.QueQuan;
    }

    getDiem(): number {
        return this.Diem;
    }

    getSoThich(): string {
        return this.SoThich;
    }

    setMaSinhVien(value: string): void {
        this.MaSinhVien = value;
    }

    setTenSinhVien(value: string): void {
        this.TenSinhVien = value;
    }

    setLop(value: Lop): void {
        this.Lop = value;
    }

    setQueQuan(value: string): void {
        this.QueQuan = value;
    }

    setDiem(value: number): void {
        this.Diem = value;
    }

    setSoThich(value: string): void {
        this.SoThich = value;
    }

}