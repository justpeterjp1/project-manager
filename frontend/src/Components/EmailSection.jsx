import React from "react";
import { Mail, Plus } from "lucide-react";

export default function EmailSection() {
  // Fake email data
  const emails = [
    {
      id: 1,
      from: "Sarah Johnson",
      subject: "Weekly Project Update",
      preview: "Hey team, here’s the summary for this week’s progress...",
      time: "10:42 AM",
    },
    {
      id: 2,
      from: "Michael Lee",
      subject: "UI Feedback",
      preview: "I’ve reviewed the latest UI build — it’s looking great! Just a few tweaks...",
      time: "Yesterday",
    },
    {
      id: 3,
      from: "Team Calendar",
      subject: "Upcoming Meeting Reminder",
      preview: "Don’t forget our sprint planning session on Tuesday at 9 AM.",
      time: "Oct 15",
    },
    {
      id: 4,
      from: "Emma Watson",
      subject: "Client Review Notes",
      preview: "Attached are the updated notes from the last client call.",
      time: "Oct 13",
    },
  ];

  const handleCompose = () => {
    alert("Compose new message (you can later route this to a form/modal)");
  };

  return (
    <div className="p-6 flex flex-col gap-4">
      {/* Header */}
      <div
        className="
          flex items-center justify-between
          bg-[var(--surface-light)] dark:bg-[var(--surface-dark)]
           border-[var(--border-light)] dark:border-[var(--border-dark)]
          rounded-md p-3
        "
      >
        <div className="flex items-center gap-2">
          <Mail className="text-[var(--primary)] w-5 h-5" />
          <h2 className="text-lg font-semibold text-[var(--text-primary-light)] dark:text-[var(--text-primary-dark)]">
            Team Inbox
          </h2>
        </div>

        <button
          onClick={handleCompose}
          className="flex items-center gap-2 bg-[var(--primary)] text-white px-4 py-2 rounded-md hover:opacity-90 transition text-sm"
        >
          <Plus className="w-4 h-4" />
          Compose
        </button>
      </div>

      {/* Email List */}
      <div
        className="
          flex flex-col
          bg-[var(--surface)] 
           border-[var(--border)] 
          rounded-md overflow-hidden divide-y divide-[var(--border-light)] dark:divide-[var(--border-dark)]
        "
      >
        {emails.map((email) => (
          <div
            key={email.id}
            className="flex justify-between items-start p-4 hover:bg-[var(--accent-light)]  transition cursor-pointer"
          >
            <div>
              <h3 className="font-semibold text-[var(--text-primary)] dark:text-[var(--text-primary-dark)]">
                {email.from}
              </h3>
              <p className="text-sm text-[var(--text-secondary-light)] dark:text-[var(--text-secondary-dark)]">
                {email.subject}
              </p>
              <p className="text-xs mt-1 text-[var(--text-tertiary-light)] dark:text-[var(--text-tertiary-dark)]">
                {email.preview}
              </p>
            </div>
            <span className="text-xs text-[var(--text-secondary-light)] dark:text-[var(--text-secondary-dark)] whitespace-nowrap">
              {email.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
