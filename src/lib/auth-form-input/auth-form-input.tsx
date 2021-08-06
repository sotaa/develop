import styles from "./auth-form-input.module.css";

interface AuthFormInputProps {
  labelContent: string;
  placeholder?: string;
  error?: string;
  name: string;
  type: string;
  disabled?: boolean;
  value?: string;
  style?: React.CSSProperties;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function AuthFormInput({
  labelContent,
  handleInputChange,
  error,
  name,
  type,
  disabled,
  value,
  style,
}: AuthFormInputProps) {
  return (
    <>
      <label className="text-muted">{labelContent}</label>
      <input
        style={{ ...style }}
        type={type}
        name={name}
        value={value}
        disabled={disabled}
        className="form-control mt-2"
        onChange={handleInputChange}
      />
      {error && error.length > 0 && (
        <small className={`form-text text-danger ${styles.error}`}>
          {error}
        </small>
      )}
    </>
  );
}
