import { CheckCircle2 } from 'lucide-react';

import InlineMarkup from './InlineMarkup';
import type { ComparisonTableBlock } from '@/payload-types';

export default function ComparisonMatrix({
  data,
}: {
  data: ComparisonTableBlock;
}) {
  const COMPARISON_DATA = data.rows ?? [];
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className="chip-main">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{data.intro.chip}</span>
          </div>
          <h2 className="text-b-32 text-brandGrey-500 text-balance">
            <InlineMarkup text={data.intro.heading} />
          </h2>
          <p className="text-r-16 text-brandGrey-400 max-w-2xl mx-auto">
            {data.intro.description}
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <div className="min-w-[900px] rounded-card border border-brandGrey-50 bg-white overflow-hidden shadow-card">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-brandGrey-50 bg-brandGrey-50">
                  <th className="py-3 px-4 text-m-12 uppercase tracking-wider text-brandGrey-400 w-[18%]">
                    {data.columns.area}
                  </th>
                  <th className="py-3 px-4 text-m-12 uppercase tracking-wider text-brandOrange-700 w-[32%]">
                    {data.columns.traditional}
                  </th>
                  <th className="py-3 px-4 text-m-12 uppercase tracking-wider text-primary-700 w-[35%]">
                    {data.columns.carehub}
                  </th>
                  <th className="py-3 px-4 text-m-12 uppercase tracking-wider text-brandGreen-800 text-right w-[15%]">
                    {data.columns.impact}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brandGrey-50">
                {COMPARISON_DATA.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-brandGrey-50/60 transition-colors"
                  >
                    <td className="py-4 px-4 text-b-14 text-brandGrey-500 align-top">
                      {row.area}
                    </td>
                    <td className="py-4 px-4 text-r-14 text-brandGrey-400 align-top">
                      {row.traditional}
                    </td>
                    <td className="py-4 px-4 text-r-14 text-brandGrey-500 align-top">
                      {row.carehub}
                    </td>
                    <td className="py-4 px-4 text-b-14 text-brandGreen-800 text-right whitespace-nowrap align-top">
                      {row.impact}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}