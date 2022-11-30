/*
 * @FilePath: /click/Users/i104/vite3/src/App.jsx
 * @author: dongyang(yang.dong@derbysoft.net)
 */
import AppRoutes from 'src/routes'
import { ConfigProvider } from 'antd';

import 'src/App.css'

function App() {
  return (
    <ConfigProvider direction="ltr">
      <AppRoutes />
    </ConfigProvider>
  )
}

export default App
