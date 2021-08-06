interface SwitchLoginRegisterProps {
  content: string;
  description: string;

  handleRendering: () => void;
}
export function SwitchLoginRegister({
  content,
  description,
  handleRendering,
}: SwitchLoginRegisterProps) {
  return (
    <>
      <span className="me-1">{description}</span>
      <span
        className="text-primary"
        onClick={() => handleRendering()}
        style={{ cursor: "pointer" }}
      >
        {content}
      </span>
    </>
  );
}
