import defaultAvatar from "../../../assets/avatar.png";

interface UserDetailProps {
  id: string;
  username: string;
  email: string;
  mobile: string;
  avatar: string;
}

export function UserDetail({
  id,
  username,
  email,
  mobile,
  avatar,
}: UserDetailProps) {
  return (
    <>
      <button
        id="detailModal"
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#userDetailModal"
        style={{ display: "none" }}
      ></button>
      <div
        className="modal fade"
        id="userDetailModal"
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
              className="card bg-white text-center py-3"
              style={{ borderRadius: "15px" }}
            >
              <div className="card-body">
                <div className="row d-flex justify-content-center">
                  <div className="col-8 col-md-5">
                    <img
                      src={avatar ? avatar : defaultAvatar}
                      className="img-fluid rounded-circle w-75"
                      alt="..."
                    />
                  </div>
                  <label className="fw-bold mt-4 text-primary">username</label>
                  <div className="col-12">{username}</div>
                  <label className="fw-bold mt-3 text-primary">mobile</label>
                  <div className="col-12">{mobile}</div>
                  <label className="fw-bold mt-3  text-primary">email</label>
                  <div className="col-12">{email}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
