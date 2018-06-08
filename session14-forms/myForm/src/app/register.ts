export class Register {
    username: string;
    password: string;

    constructor(values: Object = {}) {
        //Constructor initialization
        Object.assign(this, values);
    }
}
