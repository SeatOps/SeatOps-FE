import { useState } from 'react';

import { Day, DayPicker, type DayProps } from '@daypicker/react';
import '@daypicker/react/style.css';
import { ko } from '@daypicker/react/locale';

//임시데이터
const scheduleDates = [new Date(2026, 9, 7), new Date(2026, 9, 14), new Date(2026, 9, 21)];

function DayWithDot(props: DayProps) {
  return (
    <Day {...props} className={`${props.className ?? ''} relative`}>
      <div className="flex justify-center items-center">
        {props.children}
        {props.modifiers.hasSchedule && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-3.5 left-1/2 size-[15px] -translate-x-1/2 rounded-full bg-blue"
          />
        )}
      </div>
    </Day>
  );
}

export function Calendar() {
  const [selected, setSelected] = useState<Date>();

  return (
    <DayPicker
      className="flex justify-center rounded-[30px] bg-[#FCFCFC] pt-[44px] pb-[41px] min-h-[581px] max-w-[1458px] shadow-[inset_0_0_10px_0_rgba(0,0,0,0.10),10px_10px_10px_0_rgba(0,0,0,0.10)]"
      mode="single"
      selected={selected}
      onSelect={setSelected}
      modifiers={{ hasSchedule: scheduleDates }}
      components={{ Day: DayWithDot }}
      classNames={{
        button_previous: 'rdp-button_previous translate-x-[68px] z-10',
        button_next: 'rdp-button_next -translate-x-[68px] z-10',
        day: 'w-[172px] h-[86px] typo-lll-semibold',
        day_button: 'w-[66px] h-[66px]',
        selected: '[&_button]:bg-blue! [&_button]:text-white! [&_button]:rounded-full!',
        today: '[&_button]:bg-gray-30! [&_button]:text-gray-80! [&_button]:rounded-full!',
        chevron: 'size-[19px] fill-gray-70',
        caption_label: 'typo-xl-semibold text-gray-80',
        outside: 'text-gray-10',
        month_grid: 'mt-[32px]',
      }}
      navLayout="around"
      locale={ko}
      hideWeekdays
      showOutsideDays
      formatters={{ formatCaption: (date) => `${date.getMonth() + 1}월` }}
    />
  );
}
