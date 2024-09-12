import SearchBar from "@/components/SearchBar";
import TopHeadline from "@/components/TopHeadline";

export default function Home() {
  const url = process.env.API_URL;
  return (
   <>
    <SearchBar apiurl={url}/>
    <TopHeadline apiurl={url}/>
   </>
  );
}
