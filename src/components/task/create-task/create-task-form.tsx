import { Button } from "../../../lib";

interface CreateTaskFormProps {
  title: string;
  description: string;
  isEditMode: boolean;
  handleSubmitNewModal: (e: React.FormEvent<HTMLFormElement>) => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function CreateTaskForm({
  title,
  description,
  isEditMode,
  handleInputChange,
  handleSubmitNewModal,
}: CreateTaskFormProps) {
  return (
    <>
      <button
        id="addModal"
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#addtaskModal"
        style={{ display: "none" }}
      ></button>
      <div
        className="modal fade"
        id="addtaskModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content" style={{ borderRadius: "15px" }}>
            <button
              id="closeAddModal"
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              style={{ display: "none" }}
            ></button>
            <div className="card bg-white" style={{ borderRadius: "15px" }}>
              <div className="card-body">
                <form onSubmit={handleSubmitNewModal}>
                  <div className="mb-2">
                    <input
                      type="text"
                      className="form-control py-2"
                      aria-describedby="emailHelp"
                      placeholder="title ..."
                      name="title"
                      value={title}
                      style={{ borderRadius: "15px" }}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="text"
                      className="form-control py-2"
                      aria-describedby="emailHelp"
                      placeholder="description ..."
                      name="description"
                      value={description}
                      style={{ borderRadius: "15px" }}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="d-grid gap-2 mt-4">
                    <Button className="mb-2" size="sm" type="primary">
                      {isEditMode ? "Edit" : "Add"}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
