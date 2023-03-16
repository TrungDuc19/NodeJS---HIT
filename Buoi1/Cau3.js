function Cau3(users) {
    const convertArr = users.map(user => {
        const { id, ...othersUserAttributes } = user;
        return { [id]: othersUserAttributes };
    });

    console.log(convertArr);
}

let users = [
    { id: 1, name: 'Hung', age: 17, role: 'admin' },
    { id: 32, name: 'HungThu2', age: 71, role: 'admin' },
    { id: 65, name: 'Dung', age: 21, role: 'user' },
    { id: 87, name: 'Quy', age: 99, role: 'user' },
    { id: 123, name: 'Chi', age: 8, role: 'user' },
];

Cau3(users);