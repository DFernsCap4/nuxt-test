import { Client } from "@notionhq/client";

export default defineEventHandler(async (event)=>{
    const notion = new Client({ auth: process.env.NOTION_API_KEY })

    try{
        let response = [];
        const postsReady = await notion.databases.query({
            database_id: process.env.DATABASE_ID
        })
        postsReady.results.forEach((e)=>{
            response.push({
                id:e.id,
                icon:e.icon,
                url:e.url,
                name:e.object
            })
        })
        return response
    } catch(error) {
        console.error('Error:', error.message);
    }
    
})
