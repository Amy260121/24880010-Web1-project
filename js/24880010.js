const SUPABASE_URL="https://vfbjppyaucjiknklkpim.supabase.co";
const SUPABASE_ANON_KEY="sb_publishable_uPEWEl3KNj4OGq_dV27mvA_kpH3e0Lr";

const { createClient } = supabase;
const client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function renderView(templatedID, viewID, data){
    let source = document.querySelector(`#${templatedID}`).innerHTML;
        let template = Handlebars.compile(source);
        document.querySelector(`#${viewID}`).innerHTML = template({data});
        // console.log(products);
}