/*
 * @FilePath: /Users/i104/vite3/src/utils/day/plugin.js
 * @author: dongyang(yang.dong@derbysoft.net)
 */
import dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import relativeTime from 'dayjs/plugin/relativeTime'; // 相对时间
import dayOfYear from 'dayjs/plugin/dayOfYear'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import weekYear from 'dayjs/plugin/weekYear'

Array.of(
    calendar,
    customParseFormat,
    relativeTime,
    dayOfYear,
    weekOfYear,
    weekYear
).forEach(item => dayjs.extend(item))