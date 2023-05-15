const token = 'd25660bb08761ff0b01ae81418da64d384464ebfc4f46fa3'


export const server_calls = {
    get: async () => {
        const response = await fetch(`https://hill-misty-boot.glitch.me/api/cards`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Basic ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }



        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://hill-misty-boot.glitch.me/api/cards`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Basic ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok) {
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
    },

    update: async (id:string, data: any = {}) => {
        const response = await fetch(`https://hill-misty-boot.glitch.me/api/cards/${id}`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Basic ${token}`
            },
            body: JSON.stringify(data)
        })
        
        if (!response.ok) {
            throw new Error('Failed to Update data on server')
        }

        return await response.json()        
    },

    delete: async (id:string) => {
        const response = await fetch(`https://hill-misty-boot.glitch.me/api/cards/${id}`,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Basic ${token}`
            }
        })
        
        if (!response.ok) {
            throw new Error('Failed to Delete data on server')
        }
        
        return;
    },
}