export const customizeRequiredMark = (label: React.ReactNode, { required }: { required: boolean }) => (
  <>
    <label className="font-body text-text_color-10">
      {label}
      {required && <span className="text-primary_yellow-100 mx-1">*</span>}
    </label>
  </>
)
