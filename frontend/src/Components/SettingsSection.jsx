

export default function SettingsSection() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      
      {/* Profile Settings */}
      <div className="p-4  rounded-2xl shadow-sm bg-[var(--surface)] border-[var(--border-light)] ">
        <h2 className="text-lg font-semibold mb-4">Profile & Account</h2>

        <div className="mb-3">
          <label className="block text-sm mb-1">Display Name</label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full p-2  rounded-md bg-transparent border-[var(--border-light)] dark:border-[var(--border-dark)]"
          />
        </div>

        <div className="mb-3">
          <label className="block text-sm mb-1">Email Address</label>
          <input
            type="email"
            placeholder="johndoe@email.com"
            className="w-full p-2 rounded-md bg-transparent border-[var(--border-light)] dark:border-[var(--border-dark)]"
          />
        </div>

        <button className="mt-2 bg-[var(--primary)] text-white px-4 py-2 rounded-md hover:opacity-90 transition">
          Update Profile
        </button>
      </div>

      {/* Appearance Settings */}
      <div className="p-4 rounded-2xl shadow-sm bg-[var(--surface)]  border-[var(--border)] ">
        <h2 className="text-lg font-semibold mb-4">Appearance</h2>

        <div className="flex items-center justify-between py-2">
          <span>Dark Mode</span>
          <input type="checkbox" className="accent-[var(--primary)] h-4 w-4" />
        </div>

        <div className="flex items-center justify-between py-2">
          <span>Compact Layout</span>
          <input type="checkbox" className="accent-[var(--primary)] h-4 w-4" />
        </div>

        <div className="py-2">
          <label className="block text-sm mb-1">Accent Color</label>
          <select className="w-full p-2 rounded-md bg-transparent border-[var(--border-light)] dark:border-[var(--border-dark)]">
            <option>Blue</option>
            <option>Green</option>
            <option>Purple</option>
            <option>Red</option>
          </select>
        </div>
      </div>

      {/* Notifications */}
      <div className="p-4  rounded-2xl shadow-sm bg-[var(--surface)] border-[var(--border)] ">
        <h2 className="text-lg font-semibold mb-4">Notifications</h2>

        <div className="flex items-center justify-between py-2">
          <span>Email Updates</span>
          <input type="checkbox" className="accent-[var(--primary)] h-4 w-4" />
        </div>

        <div className="flex items-center justify-between py-2">
          <span>Task Reminders</span>
          <input type="checkbox" className="accent-[var(--primary)] h-4 w-4" />
        </div>

        <div className="flex items-center justify-between py-2">
          <span>Weekly Summary</span>
          <input type="checkbox" className="accent-[var(--primary)] h-4 w-4" />
        </div>
      </div>

      {/* System / App Settings */}
      <div className="p-4 rounded-2xl shadow-sm bg-[var(--surface)]  border-[var(--border-light)] ">
        <h2 className="text-lg font-semibold mb-4">System Settings</h2>

        <div className="flex items-center justify-between py-2">
          <span>Auto Backup Data</span>
          <input type="checkbox" className="accent-[var(--primary)] h-4 w-4" />
        </div>

        <div className="flex items-center justify-between py-2">
          <span>Show Activity Status</span>
          <input type="checkbox" className="accent-[var(--primary)] h-4 w-4" />
        </div>

        <button className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm transition">
          Reset to Defaults
        </button>
      </div>

    </div>
  );
}
