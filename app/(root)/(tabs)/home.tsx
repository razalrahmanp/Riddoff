// import AvatarRow from "@/components/AvatarRow";
import EventCard from "@/components/EventCard";
// import EventCardFeatured from "@/components/EventCardFeatured";
import { ScrollView, Text } from "react-native";

const Home = () => {
  return (
    <ScrollView className="flex-1 bg-white px-4 py-2">
      {/* <AvatarRow /> */}

      <Text className="font-bold text-lg my-4">Featured</Text>
      {/* <EventCardFeatured /> */}

      <Text className="font-bold text-lg mt-6 mb-2">Upcoming Trips</Text>
      <EventCard />

      <EventCard />
    </ScrollView>
  );
};

export default Home;

