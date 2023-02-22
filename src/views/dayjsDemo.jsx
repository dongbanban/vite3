/*
 * @FilePath: /Users/i104/vite3/src/views/dayjsDemo.jsx
 * @author: dongyang(yang.dong@derbysoft.net)
 */

import React from 'react'
import { Space } from 'antd'
import {
    calendar,
    getRelativeByTo,
    getRelativeByFrom,
    getDayOfYear,
    setDayOfYear,
    getWeekOfYear,
    setWeekOfYear
} from 'utils/day'
const DayjsDemo = () => {
    console.log('getRelativeByFrom', getRelativeByFrom())
    console.log('getRelativeByTo', getRelativeByTo('2024-02-22'))
    console.log('getDayOfYear', getDayOfYear('2023-01-10'))
    console.log('setDayOfYear', setDayOfYear(undefined, 365))
    console.log('calendar', calendar())
    console.log('getWeekOfYear', getWeekOfYear(11))
    console.log('setWeekOfYear', setWeekOfYear(undefined, 1))
    return (
        <Space>
            dayjs demo
        </Space>
    )
}

export default DayjsDemo
