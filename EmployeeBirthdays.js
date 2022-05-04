const date = [
    {
        name: 'Ваня Иванов',
        day: 22,
        month: 7,
        year: 2003
    },
    {
        name: 'User1',
        day: 28,
        month: 7,
        year: 2003
    },
    {
        name: 'Саша Прокопенко',
        day: 14,
        month: 1,
        year: 2001
    },
    {
        name: 'Аня Дубцова',
        day: 12,
        month: 9,
        year: 2004
    },
    {
        name: 'User2',
        day: 12,
        month: 9,
        year: 2002
    },
    {
        name: 'Влад Волков',
        day: 9,
        month: 11,
        year: 1999
    }
]; 

function AgeStr(age) {
    count = age % 100;
    if (count >= 5 && count <= 20) {
        return 'лет';
    } else {
        count = count % 10;
        if (count == 1) {
            return 'год';
        } else if (count >= 2 && count <= 4) {
            return 'года';
        } else {
            return 'лет';
        }
    }
}

function EmployeeBirthdays(date, amount) {
    const monthNow = 5;
    const yearNow = 2022;
    const monthsStr = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

    date.sort(function (a, b) {
        if (a.month > b.month) {
            return 1;
        }
        if (a.month < b.month) {
            return -1;
        }
        if (a.day > b.day) {
            return 1;
        }
        if (a.day < b.day) {
            return -1;
        }
        if (a.year > b.year) {
            return 1;
        }
        if (a.year < b.year) {
            return -1;
        }
        return 0;
    });
    for (let i = 0; i <= amount; i++) {
        let flag = false;
        let month = (monthNow + i - 1) % 12;
        console.log(`${monthsStr[month]} ${yearNow + (Math.floor(i / 12))}:`);
        date.map(el => {
            if (el.month === (month % 12) + 1) {
                let age = yearNow - el.year + (Math.floor(i / 12));
                console.log(` (${el.day}) - ${el.name} (${age} ${AgeStr(age)})`);
                flag = true;
            }            
        });
        if (!flag) {
            console.log(' Пусто...')
        }
    }
}

EmployeeBirthdays(date, 23); // 1 - 12 месяц