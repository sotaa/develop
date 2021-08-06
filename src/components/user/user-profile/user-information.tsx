import { AuthFormInput, Button } from "../../../lib";

interface UserInformationProps {
  username: string;
  mobile: string;
  email: string;
  errors: { password: string; email: string; mobile: string };
  isEditMode: boolean;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleEditMode: () => void;
}

export function UserInformation({
  username,
  mobile,
  email,
  isEditMode,
  errors,
  handleInputChange,
  handleSubmit,
  handleEditMode,
}: UserInformationProps) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3 text-start">
        <AuthFormInput
          labelContent="username"
          name="username"
          type="text"
          value={username}
          handleInputChange={handleInputChange}
          disabled={true}
          style={{ border: "none" }}
        />
      </div>
      <div className="mb-3 text-start">
        <AuthFormInput
          labelContent="mobile"
          name="mobile"
          type="text"
          error={errors.mobile}
          value={mobile}
          handleInputChange={handleInputChange}
          disabled={!isEditMode}
          style={{
            border: "none",
            backgroundColor: isEditMode ? "#e9ecef" : "",
          }}
        />
      </div>
      <div className="mb-3 text-start">
        <AuthFormInput
          labelContent="email"
          name="email"
          type="email"
          value={email}
          error={errors.email}
          handleInputChange={handleInputChange}
          disabled={!isEditMode}
          style={{
            border: "none",
            backgroundColor: isEditMode ? "#e9ecef" : "",
          }}
        />
      </div>
      <div className="mb-3 text-start">
        <AuthFormInput
          labelContent="password"
          name="password"
          type="password"
          error={errors.password}
          handleInputChange={handleInputChange}
          disabled={!isEditMode}
          style={{
            border: "none",
            backgroundColor: isEditMode ? "#e9ecef" : "",
          }}
        />
      </div>
      <div className="d-grid gap-2">
        {isEditMode ? (
          <Button className="mt-3" type="primary" size="sm">
            Submit
          </Button>
        ) : (
          <p
            className="text-primary"
            style={{ cursor: "pointer" }}
            onClick={handleEditMode}
          >
            Edit information
          </p>
        )}
      </div>
    </form>
  );
}
