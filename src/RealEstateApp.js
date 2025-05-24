import { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/tabs";
import { Input } from "./components/ui/input";

const mockListings = [
  {
    id: 1,
    image: "/house1.jpg",
    title: "Modern 3-Bedroom Home",
    description: "Located in Richmond Hill. Close to schools and parks.",
    realtor: {
      name: "Jane One",
      photo: "/realtors/realtor1.jpg",
      likes: 123,
      comments: 45,
    }
  },
  {
    id: 2,
    image: "/house2.jpg",
    title: "Luxury Bungalow",
    description: "Spacious backyard and open kitchen plan.",
    realtor: {
      name: "Jane Two",
      photo: "/realtors/realtor2.jpg",
      likes: 123,
      comments: 45,
    }
  },  {
    id: 3,
    image: "/house3.jpg",
    title: "Modern 3-Bedroom Home",
    description: "Located in Richmond Hill. Close to schools and parks.",
    realtor: {
      name: "Jane Three",
      photo: "/realtors/realtor1.jpg",
      likes: 123,
      comments: 45,
    }
  },
  {
    id: 4,
    image: "/house4.jpg",
    title: "Luxury Bungalow",
    description: "Spacious backyard and open kitchen plan.",
    realtor: {
      name: "Jane Four",
      photo: "/realtors/realtor2.jpg",
      likes: 123,
      comments: 45,
    }
  }
];

export default function RealEstateApp() {
  const [selectedListing, setSelectedListing] = useState(null);
  const [tab, setTab] = useState("feed");

  const goBack = () => setSelectedListing(null);

  return (
    <Tabs defaultValue="feed" value={tab} onValueChange={setTab} className="w-full max-w-md mx-auto p-2">
      <TabsList className="grid grid-cols-2">
        <TabsTrigger value="feed">Feed</TabsTrigger>
        <TabsTrigger value="settings">Account</TabsTrigger>
      </TabsList>

      <TabsContent value="feed">
        {selectedListing ? (
          <Card>
            <CardContent className="space-y-2">
              <img src={selectedListing.image} alt="House" className="rounded-xl" />
              <h2 className="text-xl font-bold">{selectedListing.title}</h2>
              <p>{selectedListing.description}</p>
              <p className="italic text-sm">Realtor: {selectedListing.realtor}</p>
              <Button onClick={goBack}>Back to Feed</Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {mockListings.map((listing) => (
              <Card key={listing.id} onClick={() => setSelectedListing(listing)} className="cursor-pointer">
                <CardContent className="p-0">
                  <img src={listing.image} alt="House" className="rounded-xl w-full h-64 object-cover" />
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </TabsContent>

      <TabsContent value="settings">
        <Card>
          <CardContent className="space-y-2">
            <h2 className="text-xl font-bold">Account Settings</h2>
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <Input placeholder="Preferred City" />
            <Button>Save Settings</Button>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
