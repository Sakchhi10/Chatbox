import PropTypes from "prop-types";

// material-ui
import { Box, Chip, Grid, Stack, Typography } from "@mui/material";

// project import
import MainCard from "../../MainCard";
import { RiseOutlined, FallOutlined } from "@ant-design/icons";
import { MdMessage } from "react-icons/md";

// ==============================|| STATISTICS - ECOMMERCE CARD  ||============================== //

const AnalyticEcommerce = ({
  color,
  title,
  count,
  percentage,
  isLoss,
  extra,
}) => (
  <MainCard contentSX={{ p: 2.25 }} sx={{ border: "2px solid #e7e7e7" }}>
    <Stack spacing={0.5}>
      <Typography variant="h5" color="#000" fontWeight="bold">
        <MdMessage
          style={{
            fontSize: "35px",
            color: "#fff",
            borderRadius: "5px",
            backgroundColor: "#4942E4",
          }}
        />
        {"    "} {title}
      </Typography>
      <Grid container alignItems="center">
        <Grid item md={6}>
          <Typography variant="h2" fontWeight="bold" color="inherit">
            {count}
          </Typography>
        </Grid>
        {percentage && (
          <Grid item md={6} align="end" mt={1}>
            <Chip
              variant="combined"
              color={color}
              icon={
                <>
                  {!isLoss && (
                    <RiseOutlined
                      style={{ fontSize: "1.75rem", color: "inherit" }}
                    />
                  )}
                  {isLoss && (
                    <FallOutlined
                      style={{ fontSize: "1.75rem", color: "inherit" }}
                    />
                  )}
                </>
              }
              label={`${percentage}%`}
              sx={{ ml: 1.25, pl: 1,fontSize: "1rem" }} // Set the color to black
              // size="small"
            />
            <br />
            <Typography variant="caption" color="#000">
              VS last{" "}
              <Typography
                component="span"
                variant="caption"
                sx={{ color: `${color || "primary"}.main` }}
              >
                {extra}
              </Typography>{" "}
              Days
            </Typography>
          </Grid>
        )}
      </Grid>
    </Stack>
    <Box sx={{ pt: 2.25 }}></Box>
  </MainCard>
);

AnalyticEcommerce.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  count: PropTypes.string,
  percentage: PropTypes.number,
  isLoss: PropTypes.bool,
  extra: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};

AnalyticEcommerce.defaultProps = {
  color: "primary",
};

export default AnalyticEcommerce;
