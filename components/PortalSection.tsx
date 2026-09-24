'use client';

import { useState } from 'react';
import {
  LayoutDashboard,
  FileText,
  Activity,
  BellRing,
  Shield,
  Download,
  Clock,
  CheckCircle2,
} from 'lucide-react';
import { PLATFORM_FEATURES } from '@/lib/data';

const ICON_MAP: Record<string, any> = {
  FileText,
  LayoutDashboard,
  Activity,
  Mic: Activity,
};

export default function PortalSection() {
  const [activeTab, setActiveTab] = useState<'shift' | 'emar' | 'vitals' | 'alerts'>('shift');
  const [selectedResident, setSelectedResident] = useState(0);

  const residents = [
    {
      name: 'Eleanor Vance',
      room: 'Suite 104',
      allergies: 'Sulfa, Penicillin',
      status: 'Dosed & Verified',
      time: '08:15 AM',
      meds: 'Lisinopril 10mg, Atorvastatin 20mg',
      caregiver: 'Sarah Jenkins, CNA #4409',
    },
    {
      name: 'Arthur King',
      room: 'Suite 112',
      allergies: 'NKA',
      status: 'Upcoming Pass',
      time: '12:00 PM',
      meds: 'Metformin 500mg, Vitamin D3',
      caregiver: 'Marcus Chen, CNA #4120',
    },
    {
      name: 'Margaret Dawson',
      room: 'Suite 201',
      allergies: 'Codeine',
      status: 'Refusal Logged',
      time: '09:30 AM',
      meds: 'Aspirin 81mg',
      caregiver: 'Sarah Jenkins, CNA #4409',
    },
    {
      name: 'Robert Miller',
      room: 'Suite 208',
      allergies: 'Latex',
      status: 'Dosed & Verified',
      time: '08:30 AM',
      meds: 'Donepezil 10mg, Amlodipine 5mg',
      caregiver: 'Elena Rostova, LVN #8821',
    },
  ];

  return (
    <section id="the-platform" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-xs font-semibold tracking-wide">
            <LayoutDashboard className="w-3.5 h-3.5" />
            <span>Pillar 2: The Cloud Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Total Facility Transparency,{' '}
            <span className="carehub-gradient-text">Live Every Shift</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            CareHub digitizes prescriptions, daily tasks, vitals records, eMAR forms, and caregiver notes across the cloud portal, caregiver app, and smart dispensers.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PLATFORM_FEATURES.map((item, idx) => {
            const Icon = ICON_MAP[item.icon || 'FileText'] || FileText;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-primary-300 transition-all space-y-3"
              >
                <div className="w-9 h-9 rounded-lg bg-primary-50 border border-primary-200 flex items-center justify-center text-primary-600">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-primary-700 bg-white px-2.5 py-0.5 rounded-full border border-primary-200">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Interactive Dashboard Simulation */}
        <div className="mt-14 rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden">
          {/* Browser Top Bar */}
          <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center space-x-3">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              <span className="text-xs text-slate-400 font-mono pl-2">
                portal.carenovate.com/facility/oakwood-gardens-rcfe
              </span>
            </div>
            <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded bg-primary-500/10 text-primary-300 border border-primary-500/30 text-xs">
              <Shield className="w-3 h-3" />
              <span>HIPAA Encrypted • Title 22 Compliant</span>
            </span>
          </div>

          {/* Tab Navigation */}
          <div className="bg-slate-50 px-4 pt-3 flex flex-wrap gap-2 border-b border-slate-200">
            {[
              { id: 'shift', label: 'Live Shift Monitor', Icon: LayoutDashboard },
              { id: 'emar', label: '1-Click eMAR Report', Icon: FileText },
              { id: 'vitals', label: 'Vitals & Notes', Icon: Activity },
              { id: 'alerts', label: 'Pre-Dose Alerts', Icon: BellRing },
            ].map(({ id, label, Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id as any)}
                className={`px-4 py-2 rounded-t-xl text-xs sm:text-sm font-bold flex items-center space-x-2 transition-all cursor-pointer ${
                  activeTab === id
                    ? 'bg-white text-primary-700 border-t-2 border-primary-600 border-x border-slate-200'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content: Live Shift */}
          {activeTab === 'shift' && (
            <div className="p-4 sm:p-6 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h4 className="font-bold text-slate-900 text-base">
                    Facility Active Shift: Day Shift (07:00 - 15:00)
                  </h4>
                  <p className="text-xs text-slate-500">
                    Showing 4 of 24 Licensed Beds • Auto-sync with 6 CareHub Dispensers
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-200 font-medium">
                    ● 22 Doses Verified
                  </span>
                  <span className="text-xs bg-primary-50 text-primary-700 px-3 py-1 rounded-full border border-primary-200 font-medium">
                    ⏱ 1 Upcoming
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {residents.map((res, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedResident(i)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer ${
                      selectedResident === i
                        ? 'bg-primary-50 border-primary-300 shadow-md'
                        : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-bold text-slate-900 text-sm">{res.name}</span>
                        <span className="text-xs text-slate-500 ml-2 font-mono">({res.room})</span>
                      </div>
                      <span
                        className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                          res.status.includes('Dosed')
                            ? 'bg-emerald-100 text-emerald-700'
                            : res.status.includes('Upcoming')
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-rose-100 text-rose-700'
                        }`}
                      >
                        {res.status}
                      </span>
                    </div>
                    <div className="mt-3 text-xs text-slate-600 space-y-1">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Scheduled:</span>
                        <span className="font-mono text-primary-700">{res.time}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Medication:</span>
                        <span className="truncate max-w-[200px]">{res.meds}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Caregiver:</span>
                        <span>{res.caregiver}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab Content: eMAR */}
          {activeTab === 'emar' && (
            <div className="p-4 sm:p-6 space-y-6">
              <div className="flex items-center justify-between p-4 rounded-xl bg-primary-50 border border-primary-200">
                <div>
                  <span className="text-xs text-primary-700 uppercase font-mono font-semibold">
                    State Licensing Audit Simulator
                  </span>
                  <h4 className="font-bold text-slate-900 text-base">
                    Electronic Medication Administration Record (eMAR)
                  </h4>
                </div>
                <button className="px-4 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-bold text-xs flex items-center space-x-1.5 transition">
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </button>
              </div>

              <div className="border border-slate-200 rounded-xl overflow-x-auto bg-white">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50 text-slate-500 font-mono">
                      <th className="p-3">Timestamp</th>
                      <th className="p-3">Resident</th>
                      <th className="p-3">Medication</th>
                      <th className="p-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    {[
                      ['08:15:22 AM', 'Eleanor Vance (104)', 'Lisinopril 10mg', 'Administered'],
                      ['08:30:14 AM', 'Robert Miller (208)', 'Donepezil 10mg', 'Administered'],
                      ['09:30:02 AM', 'Margaret Dawson (201)', 'Aspirin 81mg', 'Refused'],
                    ].map((row, i) => (
                      <tr key={i}>
                        <td className="p-3 font-mono text-primary-700">{row[0]}</td>
                        <td className="p-3 font-semibold">{row[1]}</td>
                        <td className="p-3">{row[2]}</td>
                        <td className="p-3">
                          <span
                            className={`px-2 py-0.5 rounded font-semibold ${
                              row[3] === 'Administered'
                                ? 'bg-emerald-100 text-emerald-700'
                                : 'bg-amber-100 text-amber-700'
                            }`}
                          >
                            {row[3]}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Tab Content: Vitals */}
          {activeTab === 'vitals' && (
            <div className="p-4 sm:p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs text-slate-500">Current Resident</div>
                  <div className="text-lg font-bold text-slate-900">
                    {residents[selectedResident].name}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    {residents[selectedResident].room}
                  </div>
                  <div className="text-xs text-rose-600 font-medium mt-1">
                    Allergies: {residents[selectedResident].allergies}
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs text-slate-500 mb-2">Vitals Snapshot</div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-white p-2 rounded border border-slate-200">
                      <span className="text-slate-400 block">BP:</span>
                      <strong className="text-primary-700 font-mono text-sm">122/78</strong>
                    </div>
                    <div className="bg-white p-2 rounded border border-slate-200">
                      <span className="text-slate-400 block">Pulse:</span>
                      <strong className="text-primary-700 font-mono text-sm">72 bpm</strong>
                    </div>
                    <div className="bg-white p-2 rounded border border-slate-200">
                      <span className="text-slate-400 block">Temp:</span>
                      <strong className="text-primary-700 font-mono text-sm">98.4°F</strong>
                    </div>
                    <div className="bg-white p-2 rounded border border-slate-200">
                      <span className="text-slate-400 block">SpO2:</span>
                      <strong className="text-primary-700 font-mono text-sm">98%</strong>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs text-slate-500 mb-2">Caregiver Note</div>
                  <div className="p-3 bg-white rounded text-xs text-slate-700 italic border-l-2 border-primary-500">
                    "Resident cheerful, drank 8oz water with meds."
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab Content: Alerts */}
          {activeTab === 'alerts' && (
            <div className="p-4 sm:p-6 space-y-4">
              <div className="p-4 rounded-xl bg-primary-50 border border-primary-200 flex items-start space-x-3">
                <div className="w-8 h-8 rounded-lg bg-primary-100 text-primary-700 flex items-center justify-center flex-shrink-0">
                  <BellRing className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    Real-Time Incident Prevention Alert Matrix
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    If a caregiver has not initiated a scheduled dose within 20 minutes of the prescribed window, multi-channel alerts trigger on dispensers, caregiver badges, and the supervisor dashboard.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                {[
                  { stage: 'Stage 1: Soft Reminder (-30 min)', color: 'text-primary-700', desc: 'LED pulse on resident dispenser unit.' },
                  { stage: 'Stage 2: Caregiver Alert (-15 min)', color: 'text-amber-700', desc: 'Push notification to assigned CNA/LVN.' },
                  { stage: 'Stage 3: Supervisor Escalation (-5 min)', color: 'text-rose-700', desc: 'Automatic escalation to charge nurse.' },
                ].map((s, i) => (
                  <div key={i} className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <span className={`font-bold ${s.color} block mb-1`}>{s.stage}</span>
                    <p className="text-slate-600">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}