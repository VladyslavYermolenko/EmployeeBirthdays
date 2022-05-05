const data = [
    {
        name: 'Ваня Иванов',
        date: '22.07.2003'
    },
    {
        name: 'Женя Сокол',
        date: '28.07.2003'
    },
    {
        name: 'Саша Прокопенко',
        date: '14.01.2001'
    },
    {
        name: 'Аня Дубцова',
        date: '12.09.2004'
    },
    {
        name: 'Коля Зайценко',
        date: '12.09.2002'
    },
    {
        name: 'Влад Волков',
        date: '09.11.1999'
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

function dayToNumber(date){
    if (date === undefined)
        return undefined;
    let formatDate = date.split('.').reverse().join('-')
    return new Date(formatDate).getDate();
}

function monthToNumber(date){
    if (date === undefined)
        return undefined;
    let formatDate = date.split('.').reverse().join('-')
    return new Date(formatDate).getMonth() + 1;
}

function yearToNumber(date) {
    if (date === undefined)
        return undefined;
    let formatDate = date.split('.').reverse().join('-')
    return new Date(formatDate).getFullYear();
}

function EmployeeBirthdays(data, amount) {
    const monthNow = new Date(new Date().toDateString()).getMonth() + 1;
    const yearNow = new Date(new Date().toDateString()).getFullYear();
    const monthsStr = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

    const dataMap = data.reduce((prevV, currV) => {
        console.log(`| ${monthToNumber(prevV['date'])} - ${monthToNumber(currV['date'])} |`);
        prevV.get(monthToNumber(prevV['date']))?.push(currV) ??
        prevV.set(monthToNumber(currV['date']), [currV]);
    }, new Map());
    console.log(dataMap);
    // data.sort(function (a, b) {
    //     if (monthToNumber(a.date) > monthToNumber(b.date)) {
    //         return 1;
    //     }
    //     if (monthToNumber(a.date) < monthToNumber(b.date)) {
    //         return -1;
    //     }
    //     if (dayToNumber(a.date) > dayToNumber(b.date)) {
    //         return 1;
    //     }
    //     if (dayToNumber(a.date) < dayToNumber(b.date)) {
    //         return -1;
    //     }
    //     if (yearToNumber(a.date) > yearToNumber(b.date)) {
    //         return 1;
    //     }
    //     if (yearToNumber(a.date) < yearToNumber(b.date)) {
    //         return -1;
    //     }
    //     return 0;
    // });

    // for (let i = 0; i <= amount; i++) {
    //     let flag = false;
    //     let month = (monthNow + i - 1) % 12;
    //     console.log(`${monthsStr[month]} ${yearNow + (Math.floor(i / 12))}:`);
    //     let dataMap = data.map(el => {
    //         if (monthToNumber(el.date) === (month % 12) + 1) {
    //             let age = yearNow - yearToNumber(el.date) + (Math.floor(i / 12));
    //             console.log(` (${dayToNumber(el.date)}) - ${el.name} (${age} ${AgeStr(age)})`);
    //             flag = true;
    //         }
    //     });
    //     if (!flag) {
    //         console.log(' Пусто...')
    //     }
    // }
}

EmployeeBirthdays(data, 23); // 1 - 12 месяц
