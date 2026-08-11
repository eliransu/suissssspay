import { redirect } from "next/navigation";
import { CALENDAR_URL } from "@/lib/calendar";

export default function CheckoutSuccessPage() {
  redirect(CALENDAR_URL);
}
