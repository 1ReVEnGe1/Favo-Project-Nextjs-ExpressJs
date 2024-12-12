
export const tokenVerifier = async (token) => {

        const response = await fetch('http://localhost:8080/api/auth/verify-user-token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token }),
        });

        return await response.json();
        


}