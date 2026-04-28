import dayjs from 'dayjs';
import type { CarryBitInfo, TimeUnitObject } from '../../types';

export const regex = /^(\d{1,2})([smMhHdD])$/;

export const UnitOfTimeTable: Record<string, number> = {
  s: 1000,
  m: 60 * 1000,
  M: 60 * 1000,
  h: 60 * 60 * 1000,
  H: 60 * 60 * 1000,
  d: 24 * 60 * 60 * 1000,
  D: 24 * 60 * 60 * 1000,
};

export const carryBitTable: Record<string, CarryBitInfo> = {
  s: { unit: 'minute', carryUnitTime: UnitOfTimeTable['m'], tickLevel: [1, 2, 6], colors: ['blue', 'orange', 'orangered'], formatTime: 'HH:mm:ss', scale: 0.9 },
  m: { unit: 'hour', carryUnitTime: UnitOfTimeTable['H'], tickLevel: [1, 2, 6], colors: ['black', 'orangered', 'black'], formatTime: 'HH:mm', scale: 1 },
  M: { unit: 'hour', carryUnitTime: UnitOfTimeTable['H'], tickLevel: [1, 2, 6], colors: ['black', 'orangered', 'black'], formatTime: 'HH:mm', scale: 1 },
  h: { unit: 'day', carryUnitTime: UnitOfTimeTable['D'], tickLevel: [0.5, 1, 2, 12], colors: ['black', 'blue', 'black', 'orangered'], formatTime: 'MM-DD:HH', scale: 0.8 },
  H: { unit: 'day', carryUnitTime: UnitOfTimeTable['D'], tickLevel: [0.5, 1, 2, 12], colors: ['black', 'blue', 'black', 'orangered'], formatTime: 'MM-DD:HH', scale: 0.8 },
};

export function parseTimeStringToObject(strTime: string | number): TimeUnitObject | null {
  if (typeof strTime === 'number') {
    return { value: strTime, unit: 's' };
  }
  const result = strTime.match(regex);
  if (result) {
    return {
      value: parseInt(result[1], 10),
      unit: result[2],
    };
  }
  return null;
}

export function parseTimeStringToMillisecond(strTime: string | number): number {
  if (typeof strTime === 'number') {
    return strTime;
  }
  const result = strTime.match(regex);
  if (result) {
    const unit = result[2];
    const unitOfTime = UnitOfTimeTable[unit];
    if (unitOfTime) {
      return parseInt(result[1], 10) * unitOfTime;
    }
  }
  return 0;
}

export function getValueByUnit(timestamp: number | Date, unit: string): number {
  const d = dayjs(timestamp);
  switch (unit) {
    case 's': return d.second();
    case 'm':
    case 'M': return d.minute();
    case 'h':
    case 'H': return d.hour();
    case 'd':
    case 'D': return d.day();
    default: return 0;
  }
}

export function getWholeTimeByUnit(timestamp: number | Date, unit: string): number {
  const info = carryBitTable[unit];
  if (!info) return dayjs(timestamp).valueOf();
  return dayjs(timestamp).startOf(info.unit as any).valueOf();
}
