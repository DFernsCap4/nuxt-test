import { Client } from "@notionhq/client";


export default defineEventHandler(async (event)=>{
    const notion = new Client({ auth: process.env.NOTION_API_KEY })
    
    try{
        const code  = event.context.params
        const postsReady = await notion.databases.query({
            database_id: process.env.DATABASE_ID,
            filter: {
                property: "ID",
                number: {
                    equals: parseFloat(code) 
                },
            }
        })
        console.log(postsReady);
        return postsReady.results
    } catch(error) {
        console.error('Error:', error.message);
    }
    
})
