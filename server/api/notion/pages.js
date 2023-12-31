import { Client } from "@notionhq/client";

export default defineEventHandler(async (event)=>{
    const notion = new Client({ auth: process.env.NOTION_API_KEY })

    try{
        const postsReady = await notion.databases.query({
            database_id: process.env.DATABASE_ID
        })
        return postsReady.results
    } catch(error) {
        console.error('Error:', error.message);
    }
    
})
