import DisabledCardFront from "../components/IdCards/DisabledCardFront";
import DisabledCardBack from "../components/IdCards/DisabledCardBack";
import { CSSProperties } from "react";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

function DisabledPersonCard() {
  const { t } = useTranslation();
  return (
    <div style={cardComponentStyle}>
      <Button
        variant="contained"
        sx={{ marginLeft: "auto" }}
        onClick={() => window.print()}
      >
        {t("print")}
      </Button>
      <div id="printableContent" style={cardComponentStyle}>
        <DisabledCardFront />
        <DisabledCardBack />
      </div>
    </div>
  );
}

export default DisabledPersonCard;

const cardComponentStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  gap: 30,
};
