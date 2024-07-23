import ThemeProvider from './lib/ThemeProvider'
import TeamForm from './components/Form/TeamForm'
import TeacherForm from './components/Form/TeacherForm'
import TeamContacts from './components/Form/TeamContacts'
import ParticipantContacts from './components/Form/ParticipantContacts'
import ParticipantForm from './components/Form/ParticipantForm'

function App() {
  return (
    <ThemeProvider>
      <div className="flex bg-[#0E2A3F]">
        <div className="m-auto px-3 border-2 border-red-500 w-[1212px]">
          <div>
            <div>
              <TeamForm />
            </div>
            <div className='mt-10'>
              <TeacherForm />
            </div>
            <div className='mt-10'>
              <TeamContacts />
            </div>
            <div className='mt-10'>
              <ParticipantForm />
            </div>
            <div className='mt-10'>
              <ParticipantContacts />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
