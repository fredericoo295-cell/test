import {
  CalendarClock,
  CheckCircle2,
  ClipboardList,
  MessageSquare,
  Ruler,
  Send,
} from "lucide-react";
import { StatusBadge } from "@/components/status-badge";

const milestones = [
  { phase: "Concept Design", owner: "Architect", date: "Completed on Feb 02" },
  { phase: "3D Preview & Materials", owner: "Architect", date: "In review by client" },
  { phase: "Permit Drawings", owner: "Architect", date: "Starts on Feb 15" },
  { phase: "Site Execution", owner: "Contractor", date: "Pending" },
];

const updates = [
  {
    by: "Sarah Kim • Architect",
    message: "Uploaded kitchen layout option B with revised island dimensions.",
    time: "2h ago",
  },
  {
    by: "Michael Stone • Client",
    message: "Approved materials board. Please proceed with the permit set.",
    time: "45m ago",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50/40 p-6 md:p-10">
      <section className="mx-auto max-w-6xl space-y-8">
        <header className="rounded-3xl bg-slateBlue p-8 text-white shadow-xl">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-sm">
            <Ruler size={16} /> BuildFlow Workspace
          </p>
          <h1 className="text-3xl font-semibold md:text-4xl">
            Keep clients and architects aligned without extra calls.
          </h1>
          <p className="mt-3 max-w-3xl text-slate-200">
            Share updates, approve milestones, and keep communication in one focused
            space built for architecture projects.
          </p>
        </header>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatusBadge icon={ClipboardList} label="Current Phase" value="3D Preview" />
          <StatusBadge icon={CalendarClock} label="Next Milestone" value="Permit Drawings" />
          <StatusBadge icon={CheckCircle2} label="Completed Tasks" value="18 / 24" />
          <StatusBadge icon={MessageSquare} label="Unread Messages" value="4" />
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-xl font-semibold text-slateBlue">Project Milestones</h2>
            <ul className="space-y-4">
              {milestones.map((item) => (
                <li
                  key={item.phase}
                  className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-4 py-3"
                >
                  <div>
                    <p className="font-medium text-slateBlue">{item.phase}</p>
                    <p className="text-sm text-slate-500">Owner: {item.owner}</p>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-600">
                    {item.date}
                  </span>
                </li>
              ))}
            </ul>
          </article>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold text-slateBlue">Recent Updates</h2>
              <div className="space-y-4">
                {updates.map((update) => (
                  <div key={update.time} className="rounded-xl bg-slate-50 p-4">
                    <p className="text-sm font-medium text-slateBlue">{update.by}</p>
                    <p className="mt-1 text-sm text-slate-600">{update.message}</p>
                    <p className="mt-2 text-xs text-slate-400">{update.time}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slateBlue">Quick Reply</h3>
              <p className="mt-2 text-sm text-slate-600">
                Reply to the latest update or request clarification directly in the
                project thread.
              </p>
              <button className="mt-4 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
                <Send size={16} /> Send Update
              </button>
            </div>
          </aside>
        </section>
      </section>
    </main>
  );
}
