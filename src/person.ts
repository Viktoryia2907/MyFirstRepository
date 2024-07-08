export class Person {

    // Метод для получения полного имени
    static getFullName(firstName: string, lastName: string): string {
        return `${firstName} ${lastName}`;
    }

    // Метод для проверки совершеннолетия
    static isAdult(age: number): boolean {
        return age >= 18;
    }
    // Метод для приветствия
    static greet(firstName: string): string {
        return `Hello, my name is ${firstName}`;
    }
}