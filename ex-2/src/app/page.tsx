import CarForm from "@/componets/CarForm";
import CarSearch from "@/componets/CarSearch";
import CarList from "@/componets/CarList";
import CarValue from "@/componets/CarValue";

export default function Home() {
  return (
    <div className="container is-fluid">
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
    </div>
  );
}
