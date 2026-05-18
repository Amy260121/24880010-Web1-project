async function fetchDataByTypes(types=["products"]) {
    const { data, error } = await client
        .from('information')
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
