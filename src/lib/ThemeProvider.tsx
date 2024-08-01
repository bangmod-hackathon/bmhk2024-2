import { ConfigProvider, ThemeConfig, theme } from 'antd'

const customTheme: ThemeConfig = {
  token: {
    colorPrimary: '#274464',
    colorBgBase: '#0e1823',
    colorError: '#FF5B77',
    colorInfo: '#63a4ff',
    fontSize: 16,
    fontFamily: 'Lora, IBM Plex Sans'
  },
  components: {
    Form: {
      labelRequiredMarkColor: '#EBD176'
    }
  },
  algorithm: theme.darkAlgorithm
}

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <ConfigProvider theme={customTheme}>{children}</ConfigProvider>
}

export default ThemeProvider
