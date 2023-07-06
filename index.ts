/*
let faker = require('faker');

class Student
{
    surname: string = '';
    name_patronymic: string = '';
    group_number: string = '';
    academic_performance: number[] = [];
    average_score: number = 0;

    new_Student(): void //заполнение случайными данными с помощью faker
    {
        this.surname = faker.name.lastName(); //фамилия
        this.name_patronymic = faker.name.findName(); //имя отчество
        this.group_number =  faker.hacker.abbreviation() + "-" + faker.random.number(); //случайный номер группы: аббревиатура-число
        for (let i = 0; i < 5; i++)
        {
            this.academic_performance.push(faker.random.number({min: 2, max: 5})); //оценки
        }
    }

    size_average_score(arr_average: number[]): number //подсчет среднего балла каждого студента
    {
        for (let i = 0; i < 5; i++)
        {
            this.average_score += arr_average[i];
        }
        this.average_score = this.average_score / 5;

        return this.average_score;
    }

    print_Student(): string //вывод данных на экран
    {
        return this.surname + " " + this.name_patronymic + "\t\t" + this.group_number + "   " + this.academic_performance + "   " + this.average_score;
    }
}

let Group_students = new Array(10);
for (let i = 0; i < 10; i++) //10 элементов класса Student
{
    Group_students[i] = new Student();
    Group_students[i].new_Student(); //заполнение ФИО, номером группы, оценками
    Group_students[i].size_average_score(Group_students[i].academic_performance); //заполнение среднего балла у каждого элемента(студента массива)
}

Group_students.sort(function(min, max) //сортировка массива типа Student по возрастанию среднего балла
{
    return min.average_score - max.average_score;
});

for (let i =0; i < 10; i++) //вывод всех 10 элементов массива Group_students, имеющих тип Student
{
    console.log(Group_students[i].print_Student());
}

console.log("Учащиеся с хорошей успеваемостью:");
for (let i = 0; i < 10; i++)
{
    let good_grade = 0;
    for (let j = 0; j < 5; j++)
    {   //если оценка студента больше и/или равны 4
        if (Group_students[i].academic_performance[j] >= 4)
        {
            good_grade += 1;
        }
        //если все оценки студента 4 и/или 5
        if (good_grade == 5)
        {
            //вывод имени и номера группы студента
            console.log(Group_students[i].surname + " " + Group_students[i].group_number);
        }
    }
}
*/

class Money
{
    rubles: number;
    kopecks: number;

    constructor(sumRubles: number, sumKopecks: number)
    {
        this.rubles = sumRubles;
        this.kopecks = sumKopecks;
    }
    getSum(): void
    {
        console.log('%cЦена до скидки:', 'font-size: 15px; font-weight: bold; color: brown', this.rubles + (this.kopecks/100));
        console.log('%cРубли Копейки', 'font-size: 15px; font-weight: bold; color: grey', "\n", this.rubles, " \t", this.kopecks);
    }
}
class Good extends Money
{
    Decrease: number;
    constructor(sumRubles: number, sumKopecks: number, GoodDecrease: number)
    {
        super(sumRubles, sumKopecks);
        this.Decrease=GoodDecrease;
    }
    getDecrease(): void
    {
        let sum = this.rubles + (this.kopecks/100);
        console.log('%cЦена после скидки:', 'font-size: 15px; font-weight: bold; color: brown', (sum-((sum*this.Decrease)/100)));
        console.log('%cРубли Копейки', 'font-size: 15px; font-weight: bold; color: grey', "\n", this.rubles-((this.rubles*this.Decrease)/100), " \t", this.kopecks-((this.kopecks*this.Decrease)/100));
    }
}
let Decrease: Good = new Good(990, 90,  10);

console.log('%c4 лабораторная работа\n', 'font-size: 15px; font-weight: bold; color: red; border-bottom: 1px solid;');
Decrease.getSum();
Decrease.getDecrease();
