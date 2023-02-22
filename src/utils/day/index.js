/*
 * @FilePath: /Users/i104/vite3/src/utils/day/index.js
 * @author: dongyang(yang.dong@derbysoft.net)
 */
import dayjs from 'dayjs'; // 引入dayjs插件
import 'dayjs/locale/zh-cn'; // 引入中文语言包   默认英文语言包
import './plugin'

dayjs.locale('zh-cn')

const calendar = date => dayjs().calendar(null, {
    sameDay: '[Today at] h:mm A', // The same day ( Today at 2:30 AM )
    nextDay: '[Tomorrow at] h:mm A', // The next day ( Tomorrow at 2:30 AM )
    nextWeek: 'dddd [at] h:mm A', // The next week ( Sunday at 2:30 AM )
    lastDay: '[Yesterday at] h:mm A', // The day before ( Yesterday at 2:30 AM )
    lastWeek: '[Last] dddd [at] h:mm A', // Last week ( Last Monday at 2:30 AM )
    sameElse: 'DD/MM/YYYY' // Everything else ( 17/10/2011 )
})

/**
 * @description:  获取距离date的相对时间,date为空则返回距离现在的相对时间
 * @param {*} date
 * @param {*} withoutSuffix
 * @return {*}
 */
const getRelativeByTo = (date = undefined, withoutSuffix = false) => !date ? dayjs().toNow() : dayjs().to(dayjs(date), withoutSuffix)

/**
 * @description:  获取到date的相对时间,date为空则返回到现在的相对时间
 * @param {*} date
 * @param {*} withoutSuffix
 * @return {*}
 */
const getRelativeByFrom = (date = undefined, withoutSuffix = false) => !date ? dayjs().from() : dayjs().from(dayjs(date), withoutSuffix)

/**
 * @description: 获取date是当年的第几天
 * @param {*} date
 * @param {*} number
 * @param {*} format
 * @return {*}
 */
const getDayOfYear = (date = undefined) => dayjs(date).dayOfYear()

/**
 * @description: 返回date对应年份的第number天的格式化
 * @param {*} date
 * @param {*} number
 * @param {*} format
 * @return {*}
 */
const setDayOfYear = (date = undefined, number = undefined, format = 'YYYY-MM-DD') => dayjs(date).dayOfYear(number).format(format)

/**
 * @description: 获取date处于当年的第几周
 * @param {*} date
 * @return {*}
 */
const getWeekOfYear = (date = undefined) => dayjs(date).week()

/**
 * @description: 返回date对应年份的第number周的同一天，如date为周三，返回的则是周三对应的日期格式化
 * @param {*} date
 * @param {*} number
 * @param {*} format
 * @return {*}
 */
const setWeekOfYear = (date = undefined, number = undefined, format = 'YYYY-MM-DD') => dayjs(date).week(number).format(format)

export {
    calendar,
    getRelativeByTo,
    getRelativeByFrom,
    getDayOfYear,
    setDayOfYear,
    getWeekOfYear,
    setWeekOfYear,
}