import { redirect } from "next/navigation";
import { CALENDAR_URL } from "@/lib/calendar";

/**
 * Checkout used to be payment. Now we only schedule.
 * Keep the route so old /checkout?package= links still work.
 */
export default function CheckoutPage() {
  redirect(CALENDAR_URL);
}
