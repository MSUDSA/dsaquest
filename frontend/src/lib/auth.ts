interface userAuth {
    email: string,
    password: string,
    name?: string
}

export async function signUserIn({ email, password }: userAuth) {
    const res = await fetch("http://localhost:8081/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
    })
    return await res.json()
}

export async function signUserUp({ name, email, password }: userAuth) {
    const res = await fetch("http://localhost:8081/signup", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, name })
    })
    return await res.json()
}