import { ConfigProvider, ThemeConfig, theme } from 'antd'

const customTheme: ThemeConfig = {
  token: {
    colorPrimary: '#274464',
    colorBgBase: '#0e1823',
    colorError: '#f48a8a',
    colorInfo: '#63a4ff'
  },
  algorithm: theme.darkAlgorithm
}

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <ConfigProvider theme={customTheme}>{children}</ConfigProvider>
}

export default ThemeProvider
