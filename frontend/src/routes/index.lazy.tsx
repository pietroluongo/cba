import { createLazyFileRoute } from "@tanstack/react-router";
import Homepage from "../pages/Home";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return <Homepage />;
}
