async function fetchDataByTypes(types=["products"]) {
    const { data, error } = await client
        .from("information")
        .select(
            `
                *,
                categories!information_category_id_fkey!inner(type)
            `,
        )
        .in("categories.type", types);

        if(error){
            console.error(error);
            return [];
        }

    return (data ?? []).map(({ categories, ...info })=> ({
        ...info,
        type: categories?.type ?? null,
    }));
}
async function fetchDataById(id) {
        const { data,error}= await client
        .from("information")
        .select()
        .eq("id",id)
        .single();
    
    if(error){
        console.error(error);
        return null;
    }
    return data;
}
async function subscribe(email) {
    const {error} = await client.from('subscriptions').insert({email});
    if (error) throw error;

    
}