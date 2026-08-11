import { redirect } from "next/navigation";
import { CALENDAR_URL } from "@/lib/calendar";

export default function CheckoutFailurePage() {
  redirect(CALENDAR_URL);
}
