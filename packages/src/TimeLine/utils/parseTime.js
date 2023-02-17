import moment from 'moment'
/**
 * 匹配 秒  s
 *     分钟 m/M
 *     小时 h/H
 *     天   d/D
 * @type {RegExp}
 */
export const regex = /^(\d{1,2})([smMhHdD])$/;

export const UnitOfTimeTable = {
    s: 1000,
    m: 60 * 1000,
    M: 60 * 1000,
    h: 60 * 60 * 1000,
    H: 60 * 60 * 1000,
    d: 24 * 60 * 60 * 1000,
    D: 24 * 60 * 60 * 1000
};

export const carryBitTable = {
    s: { unit: 'minute', carryUnitTime: UnitOfTimeTable['m'], tickLevel: [1, 2, 6], colors: ['blue', 'orange', 'orangered'], formatTime: 'HH:mm:ss', scale: 0.9 },
    m: { unit: 'hour', carryUnitTime: UnitOfTimeTable['H'], tickLevel: [1, 2, 6], colors: ['black', 'orangered', 'black'], formatTime: 'HH:mm', scale: 1 },
    M: { unit: 'hour', carryUnitTime: UnitOfTimeTable['H'], tickLevel: [1, 2, 6], colors: ['black', 'orangered', 'black'], formatTime: 'HH:mm', scale: 1 },
    h: { unit: 'day', carryUnitTime: UnitOfTimeTable['D'], tickLevel: [0.5, 1, 2, 12], colors: ['black', 'blue', 'black', 'orangered'], formatTime: 'MM-DD:HH', scale: 0.8 },
    H: { unit: 'day', carryUnitTime: UnitOfTimeTable['D'], tickLevel: [0.5, 1, 2, 12], colors: ['black', 'blue', 'black', 'orangered'], formatTime: 'MM-DD:HH', scale: 0.8 },
}

/**
 * 解析字符串时间 为 对象
 * @param strTime
 * @return {{unit: *, value: *}|*}
 */
export function parseTimeStringToObject (strTime) {
    let result;
    if(strTime && (result = strTime.match(regex))) {
        return {
            value: result[1] | 0,
            unit: result[2],
        }
    }
    return result;
}


/**
 * 解析字符串时间 为 毫秒
 * @param strTime
 * @return {{unit: *, value: *}|*}
 */
export function parseTimeStringToMillisecond (strTime) {
    let result;
    let unitOfTime;
    if(strTime && (result = strTime.match(regex))) {
        const unit = result[2];
        if (unitOfTime = UnitOfTimeTable[unit]) {
            return result[1] * unitOfTime
        }
    }
    return 0;
}

export function getValueByUnit(timestamp, unit) {
    switch (unit) {
        case 's': return moment(timestamp).second(); break
        case 'm': return moment(timestamp).minute(); break
        case 'M': return moment(timestamp).minute(); break
        case 'h': return moment(timestamp).hour(); break
        case 'H': return moment(timestamp).hour(); break
        case 'd': return moment(timestamp).day(); break
        case 'D': return moment(timestamp).day(); break
    }
}

export function getWholeTimeByUnit(timestamp, unit) {
   return moment(timestamp).startOf(carryBitTable[unit].unit)
}
