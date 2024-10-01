
export const fetchUsers = async () => {
    const sessionData = sessionStorage.getItem('users');
    if (sessionData) {
        console.log("sessionData exists")
        console.log(JSON.parse(sessionData))
        return JSON.parse(sessionData);
    } else {
        try {
            console.log("fetching users")
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            sessionStorage.setItem('users', JSON.stringify(data));
            return data;

        } catch (error) {
            throw new Error(`Fetch error: ${error.message}`);
        }
    }
};