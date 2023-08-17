import { Client } from "@notionhq/client";

export default defineEventHandler(async (event)=>{

    const { code } = event.context.params;
    console.log(code)
    const notion = new Client({ auth: process.env.NOTION_API_KEY })


    //console.log(`code is: ${code}` );

    try{
        const postsReady = await notion.pages.retrieve({
            page_id: `${code}`
        });
        return postsReady
    }catch(error){
        //console.error(error);
    }
});