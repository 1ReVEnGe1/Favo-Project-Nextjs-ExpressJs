
const base_url = process.env.NEXT_PUBLIC_BASE_URL_FRONT

export const tokenVerifier = async (token) => {

        const response = await fetch(`${base_url}/api/auth/verify-user-token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token }),
        });

        return await response.json();
        


}