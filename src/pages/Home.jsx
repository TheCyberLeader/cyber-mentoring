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
    <div className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
      {/* Full-page swirl layer — visible in white content area */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Right side — large orange arc descending through page */}
        <path d="M1100,100 C980,200 1060,400 940,520 C820,640 900,800 780,880" fill="none" stroke="#F47920" strokeWidth="2.5" strokeOpacity="0.10" />
        <path d="M1080,60 C1000,180 1080,380 960,500 C840,620 920,780 800,860" fill="none" stroke="#F47920" strokeWidth="1.5" strokeOpacity="0.07" />
        {/* Left side — grey arc */}
        <path d="M-80,300 C60,380 20,560 140,660 C260,760 200,900 340,960" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeOpacity="0.10" />
        <path d="M-60,340 C80,420 40,600 160,700 C280,800 220,940 360,1000" fill="none" stroke="#9CA3AF" strokeWidth="1.2" strokeOpacity="0.07" />
        {/* Bottom-center — orange swirl */}
        <path d="M300,900 C380,820 500,860 520,780 C540,700 460,660 540,600 C620,540 700,580 720,500" fill="none" stroke="#F47920" strokeWidth="2" strokeOpacity="0.09" />
        {/* Right-center — grey loop */}
        <path d="M820,500 C780,420 840,360 900,400 C960,440 940,520 880,540 C820,560 800,500 840,480" fill="none" stroke="#9CA3AF" strokeWidth="1.5" strokeOpacity="0.12" />
      </svg>

      {/* Hero section */}
      <section className="relative bg-light-gray py-16 px-4 text-center overflow-hidden">
        {/* Hero swirls */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Top-left orange swirls */}
          <path d="M-60,40 C20,0 80,120 0,160 C-80,200 -40,300 60,280 C160,260 200,160 160,80" fill="none" stroke="#F47920" strokeWidth="2.5" strokeOpacity="0.20" />
          <path d="M-80,80 C10,30 100,150 20,200 C-60,250 -20,360 100,330 C220,300 260,180 200,90" fill="none" stroke="#F47920" strokeWidth="1.5" strokeOpacity="0.12" />
          <path d="M-40,10 C40,-20 100,80 40,120 C-20,160 10,240 90,220 C170,200 180,120 140,60" fill="none" stroke="#F47920" strokeWidth="1" strokeOpacity="0.10" />
          {/* Right side orange swirls */}
          <path d="M880,60 C860,20 920,0 940,40 C960,80 920,120 880,100 C840,80 860,40 900,50" fill="none" stroke="#F47920" strokeWidth="2" strokeOpacity="0.22" />
          <path d="M920,20 C900,-10 960,-20 980,30 C1000,80 950,130 910,110 C870,90 890,40 930,40" fill="none" stroke="#F47920" strokeWidth="1.2" strokeOpacity="0.13" />
          <path d="M860,100 C830,60 880,30 910,70 C940,110 900,160 860,140 C820,120 840,80 870,85" fill="none" stroke="#F47920" strokeWidth="1" strokeOpacity="0.10" />
          {/* Top-right grey swirls */}
          <path d="M900,10 C820,70 760,-20 800,80 C840,180 760,220 840,190 C920,160 940,80 900,40" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeOpacity="0.14" />
          <path d="M940,30 C860,90 800,-10 840,90 C880,190 800,230 880,200 C960,170 980,90 940,50" fill="none" stroke="#9CA3AF" strokeWidth="1.2" strokeOpacity="0.09" />
          {/* Bottom-left grey swirls */}
          <path d="M40,180 C20,140 60,110 80,140 C100,170 80,210 50,200 C20,190 30,160 55,165" fill="none" stroke="#9CA3AF" strokeWidth="1.8" strokeOpacity="0.18" />
          <path d="M20,200 C0,160 40,125 65,155 C90,185 68,228 38,218 C8,208 18,175 42,178" fill="none" stroke="#9CA3AF" strokeWidth="1" strokeOpacity="0.11" />
          {/* Center-bottom orange wisp */}
          <path d="M380,200 C420,160 480,180 470,220 C460,260 400,270 390,240 C380,210 410,195 430,210" fill="none" stroke="#F47920" strokeWidth="1.2" strokeOpacity="0.13" />
          {/* Center-top grey wisp */}
          <path d="M460,0 C490,-20 530,20 510,50 C490,80 450,70 450,45 C450,20 475,5 490,20" fill="none" stroke="#9CA3AF" strokeWidth="1" strokeOpacity="0.12" />
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
