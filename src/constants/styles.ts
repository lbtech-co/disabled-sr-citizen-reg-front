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

// card styles
const text: CSSProperties = {
  fontSize: 12,
  fontWeight: 600,
  margin: "1px",
};

const fullWidthDiv: CSSProperties = {
  display: "flex",
  width: "100%",
};

const halfWidthDiv: CSSProperties = {
  ...text,
  flexBasis: "50%",
};

const oneThirdWidthDiv: CSSProperties = { ...text, flexBasis: "33.3%" };

const disclaimer: CSSProperties = {
  position: "absolute",
  bottom: 0,
  right: 0,
  left: 0,
  display: "flex",
  justifyContent: "center",
  marginBottom: "5px",
  fontSize: "11px",
};

const thumbSpace: CSSProperties = {
  height: "100px",
  width: "90px",
  border: "2px solid black",
};

const card: CSSProperties = {
  padding: "16px",
  width: "550px",
  height: "350px",
  margin: "auto",
  position: "relative",
};

const gridContainer: CSSProperties = {
  position: "absolute",
  top: 30,
  left: 30,
  width: "100%",
};

const bottomRightText: CSSProperties = {
  ...text,
  marginBottom: ".5rem",
};

const photoSpace: CSSProperties = {
  height: "110px",
  width: "100px",
  border: "2px solid black",
  justifyContent: "end",
};

export const idCardStyle = {
  text,
  fullWidthDiv,
  halfWidthDiv,
  oneThirdWidthDiv,
  disclaimer,
  thumbSpace,
  card,
  gridContainer,
  bottomRightText,
  photoSpace,
};
