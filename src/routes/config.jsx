/*
 * @FilePath: /Users/i104/vite3/src/routes/config.jsx
 * @author: dongyang(yang.dong@derbysoft.net)
 */
import { lazy } from 'react'
import ac from './AsyncComponent'
import ErrorRoute from './errorRoute'

const routeConfig = [
    {
        path: "/",
        element: ac(lazy(() => import('src/layout'))),
        errorElement: <ErrorRoute />,
        children: [
            {
                path: "/memoTest",
                element: ac(lazy(() => import('views/memoTest'))),
                errorElement: <ErrorRoute />
            },
            {
                path: "/contextDemo/:id",
                element: ac(lazy(() => import('views/contextDemo'))),
                errorElement: <ErrorRoute />
            },
            {
                path: "/requestQueue",
                element: ac(lazy(() => import('views/requestQueue'))),
                errorElement: <ErrorRoute />
            },
            {
                path: "/zustand",
                element: ac(lazy(() => import('views/zustandDemo'))),
                errorElement: <ErrorRoute />
            },
            {
                path: "/cssDemo",
                element: ac(lazy(() => import('views/cssDemo'))),
                errorElement: <ErrorRoute />
            },
            {
                path: "/file&blob",
                element: ac(lazy(() => import('views/file&blob'))),
                errorElement: <ErrorRoute />
            },
        ]
    },
]

export default routeConfig