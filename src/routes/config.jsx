/*
 * @FilePath: /click/Users/i104/vite3/src/routes/config.jsx
 * @author: dongyang(yang.dong@derbysoft.net)
 */
import { lazy } from 'react'
import ac from './AsyncComponent'
import ErrorRoute from './error'

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
        ]
    },
]

export default routeConfig