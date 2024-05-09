import React, { useState } from "react";
import { Grid, Avatar, Typography } from "@mui/material";

const ImageUploadCard = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleUploadClick = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = function (e) {
        setSelectedFile(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <label htmlFor="contained-button-file" style={{ cursor: "pointer" }}>
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <Avatar
              width="200px"
              height="200px"
              
              src={selectedFile}
              alt="Uploaded"
              style={{
                border: "2px solid #ccc",
                cursor: "pointer",
                padding: "",
              }}
            />
          </Grid>
          <Typography variant="caption" color="text.secondary">
            Click to Upload
          </Typography>
          <input
            accept="image/*"
            id="contained-button-file"
            type="file"
            onChange={handleUploadClick}
            style={{ display: "none" }}
          />
        </Grid>
      </label>
    </div>
  );
};

export default ImageUploadCard;
