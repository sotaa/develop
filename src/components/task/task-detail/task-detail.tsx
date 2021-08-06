import moment from "moment";
import { Button } from "../../../lib";
import { ITask } from "../../../models";

interface TaskDetailProps extends ITask {
  handleEditTask: () => void;
}

export function TaskDetail({
  id,
  title,
  description,
  date,
  handleEditTask,
}: TaskDetailProps) {
  return (
    <>
      <button
        id="detailModal"
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#taskdetailModal"
        style={{ display: "none" }}
      ></button>
      <div
        className="modal fade"
        id="taskdetailModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content" style={{ borderRadius: "15px" }}>
            <button
              id="closeDetailModal"
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              style={{ display: "none" }}
            ></button>
            <div
              className="card bg-white text-start"
              style={{ borderRadius: "15px" }}
            >
              <div className="card-body">
                <div className="row">
                  <label className="fw-bold">Title</label>
                  <div className="col-12 ps-4">{title}</div>
                  <label className="fw-bold mt-2">Description</label>
                  <div className="col-12 ps-4">{description}</div>
                  <label className="fw-bold mt-2">Create date</label>
                  <div className="col-12 ps-4">
                    {moment(date).format("YYYY-MM-DD")}
                  </div>
                </div>

                <Button
                  className="mt-4 mb-2 px-4"
                  size="sm"
                  type="primary"
                  icon={
                    <small>
                      <i className="bi bi-pen-fill"></i>
                    </small>
                  }
                  onClick={handleEditTask}
                >
                  edit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
