const base_url = process.env.NEXT_PUBLIC_BASE_URL_FRONT

export const getUser = async (token) => {
    try {

        const response = await fetch(`${base_url}/api/auth/get-user`, {
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