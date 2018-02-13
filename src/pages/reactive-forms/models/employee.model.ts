export class EmployeeModel {
    constructor(
        public id: number,
        public name: string,
        public phone: string,
        public department: string,
        public email?: string
    ) {}
}

export const departments: string[] = ['Designer', 'Develop', 'Marketing'];

export const employees: EmployeeModel[] = [
    {
        id: 1,
        name: '桐生戦兎',
        phone: '09012345678',
        department: 'Develop',
        email: 'rabbit@tank.com'
    },
    {
        id: 2,
        name: '万丈龍我',
        phone: '09098765432',
        department: 'Desiner',
        email: 'dragon@cross-z.com'
    }
];
