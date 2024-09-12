import { parseUrl } from "next/dist/shared/lib/router/utils/parse-url";
import { NextResponse } from "next/server";

const API_KEY = process.env.NEWS_API_KEY

export async function GET(request) {
    const req = await request.url;
    const searchOptions = parseUrl(req);
    let url = 'https://gnews.io/api/v4/search';
    url += searchOptions.search;
    // if(!searchOptions.query.lang){
    //     url+='&lang=en&country=in'
    // }
    url+="&max=10&apikey="+API_KEY;

    const response = await fetch(url,{
        next : {revalidate:3600}
    });
    
    const data = await response.json();
    return NextResponse.json(data)
}