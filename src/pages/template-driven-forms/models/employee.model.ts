export class EmployeeModel {
    constructor(
        public id: number,
        public name: string,
        public phone: string,
        public department: string,
        public email?: string
    ) {}
}