const Loading = () => {
  return (
    <div className="flex h-screen bg-primary-100">
      <div className="m-auto">
        <div className="flex gap-2">
          <div className="w-5 h-5 rounded-full animate-bounce [animation-delay:-0.3s] bg-primary_yellow-100"></div>
          <div className="w-5 h-5 rounded-full animate-bounce [animation-delay:-0.15s] bg-primary_yellow-100"></div>
          <div className="w-5 h-5 rounded-full animate-bounce  bg-primary_yellow-100"></div>
        </div>
      </div>
    </div>
  )
}
export default Loading
