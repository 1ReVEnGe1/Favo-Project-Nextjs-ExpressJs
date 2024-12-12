export const getUser = async (token) => {
    try {

        const response = await fetch('http://localhost:8080/api/auth/get-user', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`, // ارسال توکن در هدر درخواست
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch user data');
        }

        const data = await response.json();
        return data

    } catch (err) {
        console.error('Error fetching user data:', err);
        throw err;
    }
}