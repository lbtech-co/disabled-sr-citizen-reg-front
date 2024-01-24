import { CSSProperties } from "react";

export const selectWrapper: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
  width: "100%",
};

export const WrapperStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "40%",
  justifyContent: "space-between",
};

export const FormButtonStyle: CSSProperties = {
  width: "max-content",
  height: "45px",
  paddingInline: 10,
  marginInline: "auto",
};

export const FormStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center",
  width: "100%",
  gap: "40px",
  flex: 1,
  padding: "20px",
  boxSizing: "border-box",
};
