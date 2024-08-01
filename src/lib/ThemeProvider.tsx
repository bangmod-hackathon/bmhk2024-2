import { ConfigProvider, ThemeConfig } from 'antd'

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
      labelRequiredMarkColor: '#EBD176',
      labelColor: '#FFF9F3'
    }
  }
}

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <ConfigProvider theme={customTheme}>{children}</ConfigProvider>
}

export default ThemeProvider
