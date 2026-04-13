import { Link } from "react-router-dom";
import { useState } from "react";
import { config } from "../data/config";
import { getData, clearAll } from "../utils/localStorage";

export default function Home() {
  const [cleared, setCleared] = useState(false);
  const [confirmText, setConfirmText] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);

  const profile = getData("profile");
  const sessions = getData("sessions");
  const goals = getData("goals");

  const sessionCount = sessions ? sessions.length : 0;
  const hasGoals = goals && Object.values(goals).some((v) => v && v !== "");
  const hasProfile = !!profile;

  function handleClearAll() {
    if (confirmText === "DELETE") {
      clearAll();
      setCleared(true);
      setShowConfirm(false);
      setConfirmText("");
      window.location.reload();
    }
  }

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Hero section */}
      <section className="relative bg-light-gray py-16 px-4 text-center overflow-hidden">
        {/* Decorative swirls */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Large orange swirl — top-left */}
          <path
            d="M-60,40 C20,0 80,120 0,160 C-80,200 -40,300 60,280 C160,260 200,160 160,80"
            fill="none"
            stroke="#F47920"
            strokeWidth="2.5"
            strokeOpacity="0.18"
          />
          <path
            d="M-80,80 C10,30 100,150 20,200 C-60,250 -20,360 100,330 C220,300 260,180 200,90"
            fill="none"
            stroke="#F47920"
            strokeWidth="1.5"
            strokeOpacity="0.10"
          />
          {/* Large grey swirl — bottom-right */}
          <path
            d="M110%,30 C90%,80 70%,0 85%,60 C100%,120 80%,180 95%,140"
            fill="none"
            stroke="#9CA3AF"
            strokeWidth="2"
            strokeOpacity="0.15"
          />
          <path
            d="M900,10 C820,70 760,-20 800,80 C840,180 760,220 840,190 C920,160 940,80 900,40"
            fill="none"
            stroke="#9CA3AF"
            strokeWidth="2"
            strokeOpacity="0.12"
          />
          {/* Small orange accent swirl — right side */}
          <path
            d="M880,60 C860,20 920,0 940,40 C960,80 920,120 880,100 C840,80 860,40 900,50"
            fill="none"
            stroke="#F47920"
            strokeWidth="1.5"
            strokeOpacity="0.20"
          />
          {/* Small grey swirl — left side */}
          <path
            d="M40,180 C20,140 60,110 80,140 C100,170 80,210 50,200 C20,190 30,160 55,165"
            fill="none"
            stroke="#9CA3AF"
            strokeWidth="1.5"
            strokeOpacity="0.18"
          />
        </svg>

        <div className="relative z-10">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-navy">
            Cybersecurity Mentoring Toolkit
          </h1>
          <img
            src={`${import.meta.env.BASE_URL}assets/maries-mentor-mondays.png`}
            alt="Marie's Mentor Mondays"
            className="mx-auto mt-4 h-24"
          />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Role selection / Getting started */}
        {!hasProfile ? (
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy text-center mb-6">
              Get Started
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <Link
                to="/setup?role=mentor"
                className="group block rounded-xl border-2 border-teal bg-white p-8 text-center shadow-sm hover:shadow-lg hover:border-accent-orange transition-all"
              >
                <div className="text-4xl mb-3">🧭</div>
                <h3 className="text-xl font-bold text-navy mb-2">
                  I'm a Mentor
                </h3>
                <p className="text-sm text-dark/60">
                  Set up your profile, access session guides, email templates,
                  and track your mentee's progress.
                </p>
              </Link>
              <Link
                to="/setup?role=mentee"
                className="group block rounded-xl border-2 border-teal bg-white p-8 text-center shadow-sm hover:shadow-lg hover:border-accent-orange transition-all"
              >
                <div className="text-4xl mb-3">🚀</div>
                <h3 className="text-xl font-bold text-navy mb-2">
                  I'm a Mentee
                </h3>
                <p className="text-sm text-dark/60">
                  Set goals, explore career resources, log sessions, and track
                  your growth in cybersecurity.
                </p>
              </Link>
            </div>
          </section>
        ) : (
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-navy mb-2">
              Welcome back, {profile.name || "there"}!
            </h2>
            <p className="text-dark/60 mb-6">
              Role: <span className="capitalize font-medium">{profile.role}</span>
              {profile.targetRole && (
                <> &middot; Track: {profile.targetRole}</>
              )}
            </p>

            {/* Summary cards */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="rounded-lg bg-light-blue p-5 text-center">
                <div className="text-3xl font-bold text-navy">{sessionCount} of {config.maxSessions}</div>
                <div className="text-sm text-dark/60 mt-1">
                  Session{sessionCount !== 1 ? "s" : ""} Completed
                </div>
              </div>
              <div className="rounded-lg bg-light-blue p-5 text-center">
                <div className="text-3xl font-bold text-navy">
                  {hasGoals ? "Yes" : "No"}
                </div>
                <div className="text-sm text-dark/60 mt-1">Goals Set</div>
              </div>
              <div className="rounded-lg bg-light-blue p-5 text-center">
                <div className="text-3xl font-bold text-navy">
                  {profile.partnerName || "—"}
                </div>
                <div className="text-sm text-dark/60 mt-1">
                  {profile.role === "mentor" ? "Mentee" : "Mentor"}
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div className="flex flex-wrap gap-3">
              <Link
                to="/sessions"
                className="inline-flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-lg font-medium hover:bg-accent/90 transition-colors"
              >
                Log a Session
              </Link>
              <Link
                to="/goals"
                className="inline-flex items-center gap-2 bg-purple text-white px-5 py-2.5 rounded-lg font-medium hover:bg-purple/90 transition-colors"
              >
                {hasGoals ? "Update Goals" : "Set Goals"}
              </Link>
              <Link
                to="/resources"
                className="inline-flex items-center gap-2 bg-teal text-white px-5 py-2.5 rounded-lg font-medium hover:bg-teal/90 transition-colors"
              >
                Resources
              </Link>
            </div>
          </section>
        )}

        {/* Privacy notice */}
        <section className="rounded-lg border border-light-blue bg-light-gray p-5 mb-8">
          <div className="flex items-start gap-3">
            <span className="text-xl mt-0.5">🔒</span>
            <div>
              <h3 className="font-semibold text-navy text-sm mb-1">
                Your Privacy
              </h3>
              <p className="text-sm text-dark/70">
                All data is saved locally on your device only. Nothing is sent
                to any server. Export your data regularly as a backup.
              </p>
            </div>
          </div>
        </section>

        {/* Start Fresh */}
        {hasProfile && (
          <section className="text-center">
            <p className="text-xs text-dark/30 mb-2">
              Using a shared device? Export your data and use Start Fresh when done.
            </p>
            {!showConfirm ? (
              <button
                onClick={() => setShowConfirm(true)}
                className="text-sm text-dark/40 hover:text-red-600 transition-colors underline"
              >
                Start Fresh — Clear All Data
              </button>
            ) : (
              <div className="inline-flex flex-col items-center gap-3 rounded-lg border border-red-200 bg-red-50 p-5">
                <p className="text-sm text-red-700 font-medium">
                  Type <strong>DELETE</strong> to confirm clearing all data:
                </p>
                <input
                  type="text"
                  value={confirmText}
                  onChange={(e) => setConfirmText(e.target.value)}
                  className="border border-red-300 rounded px-3 py-1.5 text-sm text-center w-40"
                  placeholder="Type DELETE"
                  aria-label="Type DELETE to confirm"
                />
                <div className="flex gap-2">
                  <button
                    onClick={handleClearAll}
                    disabled={confirmText !== "DELETE"}
                    className="bg-red-600 text-white px-4 py-1.5 rounded text-sm font-medium disabled:opacity-40 hover:bg-red-700 transition-colors"
                  >
                    Clear All Data
                  </button>
                  <button
                    onClick={() => {
                      setShowConfirm(false);
                      setConfirmText("");
                    }}
                    className="bg-white border border-gray-300 text-dark px-4 py-1.5 rounded text-sm hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </section>
        )}
      </div>

    </div>
  );
}
