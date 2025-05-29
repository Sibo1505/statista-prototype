"use client";

// Import components and local JSON data
import Searchbar from "@/components/Searchbar";
import data from "@/data/statistics.json";
import ListItem from "@/components/ListItem";


// Homepage component
export default function Home() {
  return (
    <div>
      {/* Search input at the top */}
      <Searchbar />
      {/* Render list of ListItem components from JSON data */}
      <div className="max-w-4xl mx-auto space-y-4 mt-6">
        {data.items.slice(0, 4).map((item) => (
          <ListItem
            key={item.identifier}
            title={item.title}
            description={item.subject}
            link={item.link}
            image={item.teaser_image_urls}
          />
        ))}
      </div>
    </div>
  );
}