async function Cau5() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const result = await response.json();

        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

Cau5();