import { Client } from "@notionhq/client";


export default defineEventHandler(async (event) => {
    const notion = new Client({ auth: process.env.NOTION_API_KEY })

    const code = event.context.params
    const postsReady = await notion.databases.query({
        database_id: process.env.DATABASE_ID,
        filter: {
            property: "ID",
            number: {
                equals: parseInt(code.id)
            },
        }
    })
    return postsReady.results

})
