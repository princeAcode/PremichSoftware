import type { IconName } from "@/components/Icon";

export type Service = {
  id: string;
  icon: IconName;
  title: string;
  summary: string;
  /** Signs this might be the right fit. */
  signs: string[];
  /** Things this could include, depending on the business. */
  couldInclude: string[];
};

export const services: Service[] = [
  {
    id: "custom-software",
    icon: "blocks",
    title: "Custom business software",
    summary:
      "Software shaped around the way your business actually runs, instead of forcing your team into a tool built for someone else.",
    signs: [
      "Off-the-shelf apps only cover part of what you do",
      "Your team keeps workarounds in spreadsheets on the side",
      "Important knowledge lives in one person's head",
    ],
    couldInclude: [
      "An internal system for your team's day-to-day work",
      "Role-based access for staff, managers and owners",
      "Simple reports that answer the questions you ask every week",
    ],
  },
  {
    id: "automation-integrations",
    icon: "link",
    title: "Workflow automation and system integrations",
    summary:
      "Connect the tools you already use so information moves on its own, and your team stops copying the same details from one place to another.",
    signs: [
      "The same information is typed into two or three systems",
      "Mistakes creep in when details are copied across",
      "Admin work eats into time that should go to customers",
    ],
    couldInclude: [
      "Linking your website, accounting and operations tools",
      "Automatic notifications, reminders and follow-ups",
      "Scheduled exports and clean data handovers",
    ],
  },
  {
    id: "booking-scheduling",
    icon: "calendar",
    title: "Booking and staff scheduling",
    summary:
      "Let customers book online and give your team a clear view of who is working where, and when.",
    signs: [
      "Bookings arrive by phone, WhatsApp and email all at once",
      "Double bookings or no-shows are costing you money",
      "Staff rosters are rebuilt by hand every week",
    ],
    couldInclude: [
      "Online booking that matches your real availability",
      "Staff calendars, shifts and leave in one place",
      "Confirmation and reminder messages for customers",
    ],
  },
  {
    id: "customer-portals",
    icon: "users",
    title: "Customer portals",
    summary:
      "Give customers a secure place to check progress, see documents and send requests, so fewer calls and messages go back and forth.",
    signs: [
      "Customers phone or message to ask “where are we with this?”",
      "Documents and updates are scattered across emails",
      "You'd like to look more professional to bigger clients",
    ],
    couldInclude: [
      "Customer logins with their own jobs, orders or documents",
      "Request forms that land straight in your workflow",
      "Status updates your team can post in a few clicks",
    ],
  },
  {
    id: "quoting-jobs-invoicing",
    icon: "clipboard",
    title: "Quoting, job tracking and invoicing",
    summary:
      "Take work from first enquiry to paid invoice in one clear flow, so nothing slips through the cracks.",
    signs: [
      "Quotes are built from old spreadsheets or Word documents",
      "Job cards are on paper and sometimes go missing",
      "Work gets done but invoices go out late, or not at all",
    ],
    couldInclude: [
      "Quote templates using your own pricing rules",
      "Job tracking from accepted quote to completion",
      "Invoice handover to your accounting system",
    ],
  },
  {
    id: "stock-inventory",
    icon: "boxes",
    title: "Stock and inventory management",
    summary:
      "Know what you have, where it is and when to reorder, without counting by hand or guessing.",
    signs: [
      "Stock levels in the system don't match the shelf",
      "You run out of fast movers or over-order slow ones",
      "Stock is spread across branches, vans or a warehouse",
    ],
    couldInclude: [
      "Stock in and out, transfers and adjustments",
      "Low-stock alerts and simple reorder lists",
      "Barcode or QR scanning where it makes sense",
    ],
  },
  {
    id: "website-payments",
    icon: "card",
    title: "Website and payment integrations",
    summary:
      "Connect your website to the rest of your business, and take payments through South African providers your customers already trust.",
    signs: [
      "Website enquiries or orders are re-captured by hand",
      "You want customers to pay deposits or invoices online",
      "Payments and your records never quite line up",
    ],
    couldInclude: [
      "Payment flows using providers such as PayFast, Yoco or Ozow",
      "Website forms and orders feeding into your systems",
      "Links to accounting tools such as Sage or Xero",
    ],
  },
];
