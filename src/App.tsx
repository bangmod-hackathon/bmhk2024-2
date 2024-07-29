import ParticipantContacts from './components/Form/ParticipantContactsForm'
import ParticipantForm from './components/Form/ParticipantForm'
import TeacherForm from './components/Form/TeacherForm'
import TeamContacts from './components/Form/TeacherContactsForm'
import TeamForm from './components/Form/TeamForm'
import ThemeProvider from './lib/ThemeProvider'

function App() {
  return (
    <ThemeProvider>
      <div className="flex bg-[#0E2A3F]">
        <div className="m-auto w-[1212px] border-2 border-red-500 px-3">
          <div>
            <div>
              <TeamForm />
            </div>
            <div className="mt-10">
              <TeacherForm />
            </div>
            <div className="mt-10">
              <TeamContacts />
            </div>
            <div className="mt-10">
              <ParticipantForm />
            </div>
            <div className="mt-10">
              <ParticipantContacts />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
