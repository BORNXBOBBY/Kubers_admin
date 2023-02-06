import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { api_url } from "../../Constant/ConstantApi";
import Modal from '@mui/material/Modal';
import { Box } from "@mui/material";
import "./NewsArticle.css";

export default function EditForm({ open, setOpen }) {
  const [img, setImg] = useState();
  const [title, setTitle] = useState("");
  const [LinkUrl, setLinkUrl] = useState("");
  const [LinkText, setLinkText] = useState("");
  const [desc, setDesc] = useState("");
  const [preview, setPreview] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleImage = (e) => {
    console.log("target", e.target.files);
    setImg(e.target.files[0]);
  };

  // console.log("image-data", img);

  const handleUpload = (e) => {
    e.preventDefault();
    var titleLen = title.trim().length;
    var desclen = desc.trim().length;
    if (titleLen < 1) {
      toast.error("Please Add Title");
    }
    if (desclen < 1) {
      toast.error("Please Add Description");
    }
    if (!img) {
      toast.error("Please Add img");
    }
    if (titleLen > 1 && desclen > 1 && img) {
      setLoading(true);
      console.log(
        "titleLen=",
        titleLen,
        "||",
        "descLen=",
        desclen,
        "||",
        "img==",
        img.name
      );
      let formData = new FormData();
      formData.append("image", img, img.name);
      formData.append("title", title);
      formData.append("link_url", LinkUrl);
      formData.append("link_text", LinkText);
      formData.append("desc", desc);
      fetch(`${api_url}/news_article/`, {
        method: "POST",
        headers: {},
        body: formData,
      }).then((res) => {
        if (res.status === 200 || res.status === 201) {
          console.log("res", res.status);
          toast("Data Uploaded");
          setTitle("");
          setLinkUrl("");
          setLinkText("");
          setDesc("");
          setImg("");
          setLoading(false);
        } else {
          setLoading(false);
          console.log("res", res.status);
          toast.error("Url is not valid");
        }
      });
    }
    // console.log(img);
  };
  useEffect(() => {
    // create the preview
    const file = new Blob([img], { type: "image/jpg" });
    const objectUrl = window.URL.createObjectURL(file);
    setPreview(objectUrl);
    // free memory when ever this component is unmounted
    return () => window.URL.revokeObjectURL(objectUrl);
  }, [img]);

  const handleClose = () => { 
    setOpen(false)
  }
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    maxHeight:600,
    overFlow:'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div  className="formbold-main-wrapper">
          <div className="formbold-form-wrapper">
            <form onSubmit={handleUpload}>
              <div className="formbold-mb-5">
                <label className="formbold-form-label">Title:</label>
                <input
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  name="title"
                  value={title}
                  placeholder="Enter Title"
                  className="formbold-form-input"
                />
              </div>

              <div className="formbold-mb-5">
                <label className="formbold-form-label">Link Text:</label>
                <input
                  type="text"
                  onChange={(e) => setLinkText(e.target.value)}
                  name="LinkText"
                  value={LinkText}
                  placeholder="Enter Link Text"
                  className="formbold-form-input"
                />
              </div>

              <div className="formbold-mb-5">
                <label className="formbold-form-label">Link Url:</label>
                <input
                  type="text"
                  onChange={(e) => setLinkUrl(e.target.value)}
                  name="LinkUrl"
                  value={LinkUrl}
                  placeholder="Enter Link Url"
                  className="formbold-form-input"
                />
              </div>

              <div className="formbold-mb-5">
                <label className="formbold-form-label">Description:</label>
                <textarea
                  cols="30"
                  onChange={(e) => setDesc(e.target.value)}
                  rows="5"
                  value={desc}
                  placeholder="Enter Description"
                  className="formbold-form-input"
                ></textarea>
              </div>

              <div>
                <label className="formbold-form-label formbold-form-label-2">
                  Upload image
                </label>

                <div className="formbold-mb-5 formbold-file-input">
                  <input
                    onChange={handleImage}
                    type="file"
                    name="file"
                    id="file"
                    // value={img}
                  />
                  <label htmlFor="file" style={{ cursor: "copy" }}>
                    <div>
                      <span className="formbold-drop-file">
                        {" "}
                        Drop files here{" "}
                      </span>
                      <span className="formbold-or"> Or </span>
                      <span className="formbold-browse"> Browse </span>
                    </div>
                  </label>
                </div>

                <div className="formbold-file-list formbold-mb-5">
                  {img ? (
                    <>
                      <div className="formbold-file-item">
                        <span className="formbold-file-name">
                          {" "}
                          {img?.name}{" "}
                        </span>
                        <button type="button" onClick={() => setImg("")}>
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                              fill="currentColor"
                            />
                            <path
                              d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                              fill="currentColor"
                            />
                          </svg>
                        </button>
                      </div>
                      <img src={preview} alt="" className="img-fluid" />
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>

              <div>
                <button disabled={loading} className="formbold-btn w-full">
                  {loading ? "loading..." : "Send File"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
}
